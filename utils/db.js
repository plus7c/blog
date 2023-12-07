import mongoose from "mongoose";


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('成功连接数据库!')
    }catch(error){
        throw new Error("连接数据库失败~");
    }
};

export default connect;