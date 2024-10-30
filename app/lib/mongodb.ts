import mongoose from 'mongoose';

const connectMongo = async () => {
    if (mongoose.connection.readyState !== 1) {
        try {
            console.log('Attempting to connect to MongoDB...');
            const sample = await mongoose.connect(process.env.MONGODB_URI as string, {
                connectTimeoutMS: 20000

            });
            console.log('MongoDB connected')
            console.log('this sample', sample.Model);
        } catch (error) {
            console.error(`MongoDB connection error: ${error}`);
        }
    }
}

export default connectMongo;