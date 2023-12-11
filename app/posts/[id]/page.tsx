import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import { notFound } from "next/navigation";

// const getPostContent = (slug: string) => {
//   const folder = "posts/";
//   const file = `${folder}${slug}.md`;
//   const content = fs.readFileSync(file, "utf8");
//   const matterResult = matter(content);
//   return matterResult;
// };

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };



async function getData(id:string) {
  //开发环境
  // const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
  //   cache: "no-cache"
  // });
  
  // const res = await fetch(`http://blog.zplus7.space/api/posts/${id}`, {
  //   cache: "no-cache"
  // });
  
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/posts/${id}`, {
    cache: "no-cache"
  });
  
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

//生成元数据
export async function generateMetadata({ params }:any) {
  const post = await getData(params.id)
  
  return {
    title:post.title,
    description:post.subtitle,
  }
}


const PostPage = async ({params}:any) => {
 
  const data = await getData(params.id);

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{data.title}</h1>
        <p className="text-slate-400 mt-2">{data.date}</p>
      </div>

      <article className="prose mx-auto">
        <Markdown>{data.content}</Markdown>
      </article>
    </div>
  );
  // const slug = props.params.slug;
  // const post = getPostContent(slug);
  // return (
  //   <div>
  //     <div className="my-12 text-center">
  //       <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
  //       <p className="text-slate-400 mt-2">{post.data.date}</p>
  //     </div>

  //     <article className="prose mx-auto">
  //       <Markdown>{post.content}</Markdown>
  //     </article>
  //   </div>
  // );
};

export default PostPage;
