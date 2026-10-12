import React from "react";
import NewsCard from "@/components/NewsCard";
const CategoryPage = async ({ params }) => {
    const { slug } = await params;
    const res = await fetch(
        `https://news-api-v2.vercel.app/api/category/${slug}`,

    );
    const data = await res.json();
    const categoryNews = data.data;

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5">
                {data.title}
            </h1>

            <div className="grid grid-cols-3 gap-10">
                {categoryNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;