'use client'
import { Pagination, ConfigProvider } from "antd"
import PostPreview from "../components/PostPreview";
import { useState,useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation';


export default function ShowCardPage(props: any) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialPage = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = 6;

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [minValue, setMinValue] = useState((initialPage - 1) * pageSize);
    const [maxValue, setMaxValue] = useState(initialPage * pageSize);

    useEffect(() => {
        setMinValue((currentPage - 1) * pageSize);
        setMaxValue(currentPage * pageSize);
    }, [currentPage]);

    useEffect(() => {
        const page = parseInt(searchParams.get('page') || '1', 10);
        if (page !== currentPage) {
            setCurrentPage(page);
        }
    }, [searchParams]);

    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        // 更新 URL 的 page 查询参数
        router.push(`?page=${page}`);
    };
    
    return (
            <>
                <div className="flex flex-wrap justify-around gap-4 ">
                    {props.postMetadata
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
                        <Pagination
                        current={currentPage}
                        pageSize={pageSize} 
                        onChange={handlePageChange} 
                        total={props.postMetadata.length}
                        />
                    </div>
                </ConfigProvider>
            </>
    )

};