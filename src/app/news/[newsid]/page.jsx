import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
export const instant = false;

const Detalispage = async ({ params }) => {
    const { newsid } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsid}`);
    const data = await res.json();
    const news = data.data;
    
    // console.log(news);

    if (!news) {
        notFound()
    }

    return (
        <article className="max-w-4xl mx-auto px-4 py-8">
            
            {/* ক্যাটাগরি (যদি থাকে) */}
            {news.category && (
                <p className="mb-4 inline-block border-l-4 border-red-600 pl-3 text-sm font-bold text-red-600 uppercase">
                    {news.category}
                </p>
            )}

            {/* টাইটেল */}
            <h1 className="text-2xl sm:text-4xl font-bold leading-snug text-gray-900 mb-6">
                {news.title}
            </h1>

            {/* ইমেজ */}
            {news.imageUrl && (
                <div className="w-full h-[300px] sm:h-[450px] relative mb-8 rounded-xl overflow-hidden shadow-sm bg-gray-100">
                    <Image 
                        src={news.imageUrl}
                        fill
                        priority
                        className="object-cover"
                        alt={news.title || 'news image'} 
                    />
                </div>
            )}

            {/* ডেসক্রিপশন / টেক্সট */}
            <div className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {news.text}
            </div>

        </article>
    );
};

export default Detalispage;