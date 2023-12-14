'use client'
import { Pagination, ConfigProvider } from "antd"
import PostPreview from "./PostPreview";
import { useState } from "react";

export default function Wrap(props: any) {


    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(6);

    const sortedPosts = [...props.postMetadata].sort((a, b) => {
        // 获取日期的时间戳并进行比较
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    const handlePageChange = (page: number, pageSize: number) => {
        if (page <= 1) {
            setMinValue(0);
            setMaxValue(6);
        } else {
            setMinValue((page - 1) * 6);
            setMaxValue((page - 1) * 6 + 6);

        }
    };
    return (
        <>
            <div className="">
                <div className="flex flex-wrap justify-around gap-4 ">{sortedPosts
                    && sortedPosts.length > 0
                    && sortedPosts.slice(minValue, maxValue).map((post: any) => (
                    <PostPreview key={post._id} {...post} />
                        
                        // 这里用...是因为父子组件传值不能传一整个数组，要解构
                    ))}
                </div>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#0ea5e9',
                        },
                    }}
                >
                    <div className="mt-10 flex justify-center">
                        <Pagination defaultCurrent={1} defaultPageSize={6} onChange={handlePageChange} total={props.postMetadata.length} />
                    </div>
                </ConfigProvider>
            </div>
            {/* <div className="">
                <div className="flex flex-wrap justify-around gap-4 ">{props.postMetadata
                    && props.postMetadata.length > 0
                    && props.postMetadata.slice(minValue, maxValue).map((post: any) => (
                        <PostPreview key={post.slug} {...post} />
                        // 这里用...是因为父子组件传值不能传一整个数组，要解构
                    ))}
                </div>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#0ea5e9',
                        },
                    }}
                >
                    <div className="mt-10 flex justify-center">
                        <Pagination defaultCurrent={1} defaultPageSize={6} onChange={handlePageChange} total={props.postMetadata.length} />
                    </div>
                </ConfigProvider>
            </div> */}


        </>

    )

};