
//import getPostMetadata from "../components/getPostMetadata";

import Wrap from "../components/Wrap";
import {getPostData} from "@/utils/getPostData"

async function getData() {
  //开发环境
  // const res = await fetch("http://localhost:3000/api/posts", {
  //   cache: "no-cache"
  // });

  // const res = await fetch("https://blog.zplus7.space/api/posts", {
  //   cache: "no-cache"
  // });

  
  // try {
    
  //   //const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  //   const url = "https://zplus777-git-main-plus7cs-projects.vercel.app/";
  //   const res = await fetch(url, {
  //     cache: "no-cache"
  //   });
  //   console.log('res的内容为', res)

  //   return res.json();
  // } catch (err) {
  //   console.log(err)
  // }

}


export default async function HomePage() {
  const data = await getPostData();

  console.log("前端的数据为",data)
  //const data = await getData();

  return (
    <>
      <Wrap postMetadata={data}></Wrap>
    </>
  );
};