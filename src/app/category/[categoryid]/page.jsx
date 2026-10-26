import { notFound } from 'next/navigation';
import NewsCard from '../../../components/NewsCard';
export const instant = false;

const CategoryPage = async ({params}) => {
   const {categoryid} = await params
   const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`);
   const data = await res.json();
   const categorys = data.data;
       if (!categorys) {
           notFound()
       }
   
   
    return (
        <div>
  <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5">
    {data.title}
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
    {
      categorys.map(category => (
        <NewsCard key={category.id} news={category} />
      ))
    }
  </div>
</div>
    );
};

export default CategoryPage;