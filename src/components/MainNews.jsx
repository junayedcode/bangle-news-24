import Image from "next/image";
import Link from "next/link";

const MainNews = ({ news }) => {
    const firstNews = news[0];
    const otherNews = news.slice(1);

    return (
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-4 px-4 py-4 md:grid-cols-3">

            {/* Main News */}
            <Link href={`/news/${firstNews.id}`} className="min-w-0 md:col-span-2 group">
                <div className="w-full">
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            height={600}
                            width={600}
                            src={firstNews.imageUrl}
                            alt={firstNews.title}
                            className="h-auto max-h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="py-3">
                        <p className="mb-2 text-xs font-semibold text-red-600">
                            {firstNews.category}
                        </p>

                        <h2 className="text-lg font-bold leading-7 group-hover:text-red-700 transition-colors">
                            {firstNews.title}
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            {firstNews.description}
                        </p>
                    </div>
                </div>
            </Link>

            {/* Other News */}
            <div className="min-w-0 md:col-span-1">
                {otherNews.slice(0, 4).map((on) => (
                    <Link href={`/news/${on.id}`} key={on.id}>
                        <div className="border-b border-gray-200 px-3 py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 group">
                            <p className="mb-2 text-xs font-semibold text-red-600">
                                {on.category}
                            </p>

                            <h3 className="text-sm font-semibold leading-6 group-hover:text-red-700 transition-colors">
                                {on.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default MainNews;