import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

export const getContent = async (id) => {
    //fetch

    
    try {

        await connect()
        const posts = await Post.findById(id)
        console.log("成功获取博客列表数据【API】")
        return posts;
        //return new NextResponse(JSON.stringify(posts), { status: 200 })

    } catch (err) {
        return new NextResponse("调用获取博客列表失败【API】", { status: 500 })
    }

}