import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className=" relative border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-sky-500 hover:underline mb-1">{props.title}</h2>
      </Link>
      <p  className=" absolute right-3 top-5 text-sm text-slate-400 " >{props.date}</p>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
