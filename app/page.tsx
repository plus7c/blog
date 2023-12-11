
//import getPostMetadata from "../components/getPostMetadata";

import Show from "../components/showAndNav";


async function getData() {
  //开发环境
  // const res = await fetch("http://localhost:3000/api/posts", {
  //   cache: "no-cache"
  // });

  // const res = await fetch("https://blog.zplus7.space/api/posts", {
  //   cache: "no-cache"
  // });
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}/api/posts`, {
      cache: "no-cache"
    });
    return res.json();
  } catch (err) {
    console.log(err)
  }



}


export default async function HomePage() {
  const data = await getData();

  return (
    <>
      <Show postMetadata={data}></Show>
    </>
  );
};