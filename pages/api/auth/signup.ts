import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '@/db/conn'


const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    connectMongo().catch(error => res.json({error: "Connection Failed"}))
}
export default handler