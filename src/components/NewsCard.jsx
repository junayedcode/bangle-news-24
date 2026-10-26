import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsCard = ({ news }) => {
    return (
       <Link href={`/news/${news.id}`}>
        <div className="group w-full flex flex-col h-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            
           
            <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                <Image
                    height={600}
                    width={600}
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

           
            <div className="p-4 flex flex-col grow">
                {/* ক্যাটাগরি */}
                <p className="mb-2 inline-block border-l-4 border-red-600 pl-2 text-xs font-bold text-red-600 uppercase">
                    {news.category}
                </p>

              
                <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-red-700 transition-colors line-clamp-2">
                    {news.title}
                </h2>

              
                <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3 grow">
                    {news.description}
                </p>
            </div>
            
        </div>
       </Link>
    );
};

export default NewsCard;