'use client';

import { Pagination, ConfigProvider } from "antd";
import PostPreview from "../components/PostPreview";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation';

interface PostMetadata {
    title?: string;
    date?: string;
    subtitle?: string;
    image?: string;
    category?: string;
    slug?: string;
}

export default function ShowCardPage(props: any) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialPage = parseInt(searchParams.get('page') || '1', 10);
    const pageSize = 6;

    const [currentPage, setCurrentPage] = useState(initialPage);
    const [minValue, setMinValue] = useState((initialPage - 1) * pageSize);
    const [maxValue, setMaxValue] = useState(initialPage * pageSize);
    const [postMetadata, setPostMetadata] = useState<PostMetadata[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        try {
            const data: PostMetadata[] = props.postMetadata;
            setPostMetadata(data);
        } catch (error) {
            console.error("Failed to fetch posts:", error);
        } finally {
            setLoading(false);
        }
    }, []);

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
        router.push(`?page=${page}`);
    };

    return (
        <>
            <div className="flex flex-wrap justify-around gap-4">
                {loading ? (
                    // 显示与每页帖子数量相同的 Skeleton
                    Array.from({ length: pageSize }).map((_, index) => (
                        <PostPreview key={index} loading />
                    ))
                ) : (
                    postMetadata &&
                    postMetadata.length > 0 &&
                    postMetadata.slice(minValue, maxValue).map((post: any) => (
                        <PostPreview key={post.slug} {...post} />
                    ))
                )}
            </div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#0ea5e9',
                    },
                }}
            >
                {!loading ? (
                    <div className="mt-10 flex justify-center">
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            onChange={handlePageChange}
                            total={postMetadata.length}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </ConfigProvider>
        </>
    );
};
