import mongoose from 'mongoose';

export const connectDB= async()=>{
    try{
        const conn= await mongoose.connect("mongodb+srv://tungnguyenx99:Tungnguyenx99@cluster0.fctzt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            // useCreateIndex:true,
        })
        console.log(`MongoDC connect:${conn.connection.host}`);
    }catch(error){
        console.error(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB