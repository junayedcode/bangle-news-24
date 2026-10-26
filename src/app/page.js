
import { Suspense } from "react";
import MainNews from "../components/MainNews";
import MostRead from "../components/MostRead";
import NewsCard from "../components/NewsCard";

async function HomeContent() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  if (!res.ok) {
    throw new Error("সংবাদ লোড করা যায়নি");
  }

  const data = await res.json();
  const sections = data.data || [];
  const mainNews = sections[0]?.articles || [];
  const otherSections = sections.slice(1);

  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {/* News Section */}
        <div className="min-w-0 md:col-span-2">
          <MainNews news={mainNews} />

          <div className="mt-5 grid gap-6">
            {otherSections.map((os) => (
              <div key={os.curationId}>
                <h1 className="border-b-2 border-red-700 pb-3 font-bold">
                  {os.title}
                </h1>

                <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read Section */}
        <div className="min-w-0 md:col-span-1">
          <MostRead />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-96 items-center justify-center">
          <p className="animate-pulse text-lg font-semibold text-red-600">
            সংবাদ লোড হচ্ছে...
          </p>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
