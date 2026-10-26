import Link from 'next/link';
import React from 'react';

const Navlinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await res.json();
    const navs =data.data
    const filterNavs =navs.filter(n => n.scrapable)
    // console.log(navs,"data");
    return (
       <div className='flex gap-5 justify-center mt-5'>
         <Link href={"/"}>হোম</Link>
            {
                filterNavs.map((n,i) => <Link key={i} href={`/category/${n.slug}`}>{n.title}</Link> )
            }
        </div>
    );
};

export default Navlinks;