import dns from "dns";
import mongoose from "mongoose";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    
    await mongoose.connect(`${process.env.MONGODB_URI}/AdvocateAssam`)
}
export default connectDB