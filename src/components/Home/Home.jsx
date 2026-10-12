import React from "react";
import Image from "next/image";
import Mostread from "./Mostread";
import RestCard from "./RestCard";
import Link from "next/link";

const Home = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news/sections",
        {
            cache: "no-store",
        }
    );

    const { data: sections } = await res.json();

    const fullData = sections.slice(1);
    const today = new Date();
    const currentDate = today.toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <div className="mx-auto max-w-7xl px-4 font-sans bg-white">
            <div className="grid grid-cols-3 gap-4 ">

                {/* Left side */}
                <div className="col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2">

                    {/* Main News */}
                    <div className="bg-white p-4">
                        {sections[0] && sections[0].articles?.[0] && (
                            <div className="card ">
                                <figure>
                                    <Image
                                        src={sections[0].articles[0].imageUrl}
                                        alt={sections[0].articles[0].imageAlt}
                                        width={600}
                                        height={400}
                                        className="w-full"
                                    />
                                </figure>

                                <div className="card-body">
                                    <p className="text-xs font-medium text-red-600">
                                        {sections[0].title}
                                    </p>

                                    <h2 className="card-title">
                                        {sections[0].articles[0].title}
                                    </h2>

                                    <p>
                                        {sections[0].articles[0].description}
                                    </p>

                                    <p className="mt-2 text-xs text-neutral-400">
                                        {currentDate}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Other News */}
                    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white">
                        {sections[0].articles.slice(1, 6).map((article) => (
                            <div
                                key={article.id}
                                className="border-b border-gray-300 p-4 last:border-b-0"
                            >
                                <p className="text-xs font-medium text-red-600">
                                    {sections[0].title}
                                </p>

                                <Link href={`/news/${article.id}`}>
                                    <h3 className="mt-2 text-xs font-semibold leading-snug">
                                        {article.title}
                                    </h3>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
                {/* Right side */}
                <div className="bg-gray-200  col-span-1">
                    <Mostread />
                </div>



            </div>
            <div className="w-full lg:w-3/4">
                <RestCard fullData={fullData} />
            </div>
        </div>
    );
};

export default Home;