import fs from "fs";
import matter from "gray-matter";

const getPostContent = (slug) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    //console.log("matterResult为",matterResult);
    return matterResult;
};

const post = getPostContent("2023-01-12");

const handleAdd = async (post) => {
    const title = post.data.title;
    const subtitle = post.data.subtitle;
    const image = post.data.image;
    const date = post.data.date;
    const category = post.data.category;
    const content = post.content;
    //console.log("content为",post);
    // try {
    //     await fetch("http://localhost:3000/api/posts", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             title,
    //             subtitle,
    //             image,
    //             content,
    //             date,
    //             category,
    //         }),
    //     });
    // } catch (err) {
    //     console.log(err);
    // }
    try {
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        
        await fetch(`${apiBaseUrl}/api/posts`, {
            method: "POST",
            body: JSON.stringify({
                title,
                subtitle,
                image,
                content,
                date,
                category,
            }),
        });
    } catch (err) {
        console.log(err);
    }

};

handleAdd(post)