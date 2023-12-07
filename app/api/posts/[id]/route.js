import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"


export const GET = async (request, { params }) => {
    //fetch
    const { id } = params;
    try {
        await connect()

        const posts = await Post.findById(id)
        console.log("成功根据id获取博客文章内容【API】")
        return new NextResponse(JSON.stringify(posts), { status: 200 })

    } catch (err) {
        return new NextResponse("根据id获取博客文章内容失败【API】", { status: 500 })
    }
}
