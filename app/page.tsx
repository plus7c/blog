
import getPostMetadata from "../components/getPostMetadata";

import Show from "../components/showAndNav";


async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-cache"
  });

  if(!res.ok){
    throw new Error("获取博客列表失败")
  }
  return res.json();
}


export default async function HomePage() {
  const data = await getData();
  
  return (
    <>
      <Show postMetadata={data}></Show>
    </>
  );
};