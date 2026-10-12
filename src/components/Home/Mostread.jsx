import Link from "next/link";
import React from "react";

const Mostread = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news/most-read",
        {
            cache: "no-store",
        }
    );

    const { data: newses } = await res.json();

    return (
        <div className="bg-white ">
            <h2 className="mb-4 text-xl font-bold">
                সর্বাধিক পঠিত
            </h2>

            {newses.map((news, i) => (
                <div
                    key={news.id}
                    className="mb-4 border-b border-gray-300 pb-4"
                >
                    <Link href={`/news/${news.id}`} className="text-lg font-semibold hover:text-blue-600"><h3 className="text-xs font-semibold">
                        <span className="text-red-600"> {i + 1}.</span>  {news.title}
                    </h3></Link>
                </div>
            ))}
        </div>
    );
};

export default Mostread;