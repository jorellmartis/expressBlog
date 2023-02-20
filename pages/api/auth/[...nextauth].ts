// @ts-nocheck
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from '@/db/conn';
import Users from '@/model/Schema';

export default NextAuth({
    providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
    }),

    CredentialsProvider({
        name: "Credentials",
        async authorize(credentials, req) {
            connectMongo().catch(error => {error: "Connection Failed"})
            //checking user existance
            const result = await Users.findOne({email: credentials.email})
        }
        })
    ]
})