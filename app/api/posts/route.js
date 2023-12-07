import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"


export const GET = async (request) => {
    //fetch

    try {
        await connect()

        const posts = await Post.find()
        console.log("成功获取博客列表数据【API】")
        return new NextResponse(JSON.stringify(posts), { status: 200 })

    } catch (err) {
        return new NextResponse("调用获取博客列表失败【API】", { status: 500 })
    }

}

export const POST = async (request) => {
    const body = await request.json();

    const newPost = new Post(body);
    //console.log("进入post函数",body)
    try {
        await connect();

        await newPost.save();
        console.log("post成功")
        return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
        console.log("post失败")
        return new NextResponse("Database Error", { status: 500 });
    }
};