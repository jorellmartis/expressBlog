import mongoose from 'mongoose'

//initalizing connection to MongoDB
const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URL!);
        connection.readyState ==1 && (
            Promise.resolve(true)
        )
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo;