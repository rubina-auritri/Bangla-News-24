import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import Link from "next/link";

const LatestNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news");
  const data = await res.json();
  const newses = data.data

  return (
    <div className="flex bg-gray-100">
      <div className="bg-red-600 px-4 py-2 text-white">
        সর্বশেষ
      </div>

      <MarqueeText direction="right" duration={10} className="flex items-center text-sm text-white bg-red-700 ">
        {newses.map((news) => (
          <Link className= "mx-8 hover:underline hover:decoration-white" href={`/news/${news.id}`} key={news.id}>
            {news.title}
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default LatestNews;