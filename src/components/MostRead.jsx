import Link from 'next/link';
import React from 'react';

const MostRead = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const mostread = data.data;

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
            <h1 className="font-bold text-lg text-red-600 mb-2 pb-2 border-b border-gray-200">
                সর্বাধিক পঠিত
            </h1>
            
            <div className="flex flex-col">
                {
                    mostread.map((most, i) => (
                        <Link href={`/news/${most.id} `} key={most.id}>
                        <div className="group flex gap-2 items-center py-2 border-b border-gray-100 last:border-b-0 cursor-pointer" >
                            <p className="text-lg font-bold text-red-500 shrink-0 w-5 text-center">
                                {i + 1}
                            </p> 
                            <h2 className="text-sm text-gray-800 font-medium leading-tight group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                                {most.title}
                            </h2>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default MostRead;