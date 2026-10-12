import React from "react";
import Image from "next/image";
import Link from "next/link";

const RestCard = ({ fullData }) => {
    const filteredSections = fullData.filter(
        (section) =>
            section.title !== "বিবিসি বাংলা এখন হোয়াটসঅ্যাপে!" &&
            section.title !== "বিবিসি বাংলা এখন ইন্সটাগ্রামে!" &&
            section.title !== "সামাজিক মাধ্যমে বিবিসি"
    );

    return (
        <div className="px-4 font-sans bg-white items-center justify-center">
            {filteredSections.map((section) => (
                <div key={section.id} className="mb-8">

                    {/* Category title */}
                    <h3 className="mb-4 text-lg font-bold text-red-600">
                        {section.title}
                    </h3>

                    {/* Articles */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {section.articles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/news/${article.id}`}
                                className="card border border-gray-300 bg-white shadow-sm hover:shadow-md transition"
                            >
                                <figure>
                                    <Image
                                        src={article.imageUrl}
                                        alt={article.imageAlt || article.title}
                                        width={600}
                                        height={400}
                                        className="w-full"
                                    />
                                </figure>

                                <div className="card-body">
                                    <p className="text-xs font-medium text-red-600">
                                        {article.title}
                                    </p>

                                    <p className="text-sm">
                                        {article.description?.slice(0, 100)}...
                                    </p>

                                    <p>
                                        {new Date(
                                            article.lastPublished
                                        ).toLocaleDateString("bn-BD", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}{" "}
                                        এ{" "}
                                        {new Date(
                                            article.lastPublished
                                        ).toLocaleTimeString("bn-BD", {
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestCard;