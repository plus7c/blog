'use client'
import { Pagination, ConfigProvider } from "antd"
import PostPreview from "../components/PostPreview";
import { useState } from "react";

export default function Show(props: any) {


    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(6);

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
            </div>
        </>

    )

};