import mongoose from "mongoose";


const connect = async () => {
    const apiDbUrl = process.env.MONGODB_URI;
    mongoose.set('strictQuery', true);
    try{
        
        await mongoose.connect(apiDbUrl);
        console.log('成功连接数据库!')
    }catch(error){
        throw new Error("连接数据库失败~");
    }
};

export default connect;