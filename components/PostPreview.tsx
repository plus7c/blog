import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { Card } from "antd";
import '../styles/font/iconfont.css'
const PostPreview = (props: any) => {

  return (
    <>
      <link rel="stylesheet" href="../styles/iconfont.css" />
      <Link href={`/posts/${props._id}`}>
     
        <Card
          size="small"
          hoverable
          style={{ width: 270, height: 300 }}
          cover={<img alt="example" src={props.image} width="270" height="150" />}
        >

          <div className="flex flex-col">
            <p className=" text-base text-sky-500 hover:underline underline-offset-4 mb-1">{props.title}</p>
            <p className="mt-2 text-slate-700">{props.subtitle}</p>
            <p className="text-slate-400 flex flex-row-reverse" >{props.date}</p>
            <p className="text-slate-400 flex flex-row-reverse" >
              <i className="iconfont icon-21baogaozongjiezhuanqu ml-2"></i>
              <span>{props.category}</span>
            </p>

          </div>

        </Card>

      </Link>
    </>


  );
};

export default PostPreview;
