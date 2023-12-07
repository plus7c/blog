import mongoose from "mongoose";


const { Schema } = mongoose

const postSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      date:{
        type:String,
        required:true,
      },
      content: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  );

export default mongoose.models.Blog || mongoose.model('Blog', postSchema,'blogList')