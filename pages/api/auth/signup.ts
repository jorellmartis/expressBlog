import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '@/db/conn'
import Users from '@/model/Schema';
import { hash } from 'bcryptjs';
import { Error } from 'mongoose';


const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    connectMongo().catch(error => res.json({error: "Connection Failed"}))

    //only accepting POST method
    if(req.method === 'POST'){
        !req.body && res.status(404).json({error: "NO formww Data"});
        const {email , password} = req.body;

        //checking duplicate user
        const checkExisting = await Users.findOne({email})
        checkExisting && (
            res.status(422).json({message: "User already exists"})
        )
        //Password BcryptJS
        Users.create({email , password: await hash(password , 12)}, (err : Error ,data : NextApiResponse) => {
            err && (
                res.status(404).json({err})
            )
            res.status(201).json({status: true, user: data})
        })
    }
    else{
        res.status(500).json({message: 'HTTP method not valid'})
    }
}
export default handler