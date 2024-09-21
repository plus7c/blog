'use client';

import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { Card,Skeleton } from "antd";
import '../styles/font/iconfont.css';

interface PostPreviewProps extends PostMetadata {
  loading?: boolean;
}

const PostPreview = ({ loading, ...props }: PostPreviewProps) => {
  return (
    <>
      {/* 保持图标字体样式 */}
      <link rel="stylesheet" href="/styles/iconfont.css" />

      <Link href={loading ? "#" : `/posts/${props.slug}`}>
        <Card
          size="small"
          hoverable={!loading}
          style={{ width: 270, height: 300 }}
          cover={
            loading ? (
              // 使用 Skeleton.Image 显示图片骨架
              <Skeleton active style={{ width: 270, height: 150 }} />
            ) : (
              <img alt="Post Image" src={props.image} width="270" height="150" />
            )
          }
          loading={loading} // 使用 Card 的 loading 属性
        >
          {loading ? (
            // 使用 Skeleton 组件显示文本骨架
            <Skeleton active paragraph={{ rows: 4 }} />
          ) : (
            <div className="flex flex-col">
              <p className="text-base text-sky-500 hover:underline underline-offset-4 mb-1">{props.title}</p>
              <p className="mt-2 text-slate-700">{props.subtitle}</p>
              <p className="text-slate-400 flex flex-row-reverse">{props.date}</p>
              <p className="text-slate-400 flex flex-row-reverse">
                <i className="iconfont icon-21baogaozongjiezhuanqu ml-2"></i>
                <span>{props.category}</span>
              </p>
            </div>
          )}
        </Card>
      </Link>
    </>
  );
};

export default PostPreview;
