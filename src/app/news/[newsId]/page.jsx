import React from 'react';
import Image from 'next/image';

const NewsDetails = async ({ params }) => {
    const { newsId } = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const news = data.data
      if (!news) {
        return <div>News not found</div>;
    }

    

    const today = new Date();

    const banglaDate = today.toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className='max-w-7xl mx-auto px-4 py-10 justify-center items-center'>
            <h1 className='text-3xl font-bold mb-4 text-center'>{news?.title}</h1>
            <p className='border-b border-gray-300 mb-4 text-center'>
                {news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text}
            </p>
            <p className='border-b border-gray-300 mb-4 text-center'>{news.byline?.[0]?.name}<span className="text-gray-500 ml-2">{banglaDate}</span><span className="text-gray-500 ml-2">{news.wordCount} words</span></p>
            <div className="space-y-5 mx-auto max-w-3xl">
                {news.body.map((item, index) => {
                    if (item.type === "image") {
                        return (
                            <figure key={index}>
                                <Image
                                    src={item.url}
                                    alt={item.altText || ""}
                                    width={item.width}
                                    height={item.height}
                                    className="w-full h-auto"
                                />

                                {item.caption && (
                                    <figcaption className="text-sm text-gray-500 mt-2">
                                        {item.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    }

                    if (item.type === "subheading") {
                        return (
                            <h2
                                key={index}
                                className="text-2xl font-bold mt-8 mb-3"
                            >
                                {item.text}
                            </h2>
                        );
                    }

                    if (item.type === "text") {
                        return (
                            <p
                                key={index}
                                className="text-lg leading-8"
                            >
                                {item.text}
                            </p>
                        );
                    }

                    return null;
                })}
            </div>
            <div className="flex gap-2 mt-5 Items-center justify-center">
                {news.topics?.map((topic) => (
                    <span key={topic.id} className="text-sm">
                        {topic.name}
                    </span>
                ))}
            </div>

        </div>
    )
};

export default NewsDetails;