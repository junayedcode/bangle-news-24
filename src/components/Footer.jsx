import Link from "next/link";
import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const Footer = async () => {
  const currentYear = await getCurrentYear();

  return (
    <footer className="mt-16 border-t-2 border-red-600 bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight text-gray-900"
            >
              Bangla News <span className="text-red-600">24</span>
            </Link>

            <p className="mt-3 text-sm font-semibold text-red-600">
              সত্যের সন্ধানে, সবার আগে
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              দেশ ও বিশ্বের সর্বশেষ সংবাদ, রাজনীতি, অর্থনীতি,
              খেলাধুলা, প্রযুক্তি ও বিনোদনের খবর জানতে
              আমাদের সঙ্গেই থাকুন।
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="transition hover:text-red-600">হোম</Link></li>
              <li><Link href="/about" className="transition hover:text-red-600">আমাদের সম্পর্কে</Link></li>
              <li><Link href="/contact" className="transition hover:text-red-600">যোগাযোগ</Link></li>
              <li><Link href="/privacy-policy" className="transition hover:text-red-600">প্রাইভেসি পলিসি</Link></li>
            </ul>
          </div>

          {/* News Categories */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              সংবাদ বিভাগ
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="transition hover:text-red-600">জাতীয়</Link></li>
              <li><Link href="/" className="transition hover:text-red-600">আন্তর্জাতিক</Link></li>
              <li><Link href="/" className="transition hover:text-red-600">খেলাধুলা</Link></li>
              <li><Link href="/" className="transition hover:text-red-600">বিনোদন</Link></li>
              <li><Link href="/" className="transition hover:text-red-600">প্রযুক্তি</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">যোগাযোগ</h3>
            <p className="text-sm leading-7 text-gray-600">
              সংবাদ, মতামত বা যেকোনো প্রয়োজনে আমাদের সঙ্গে যোগাযোগ করুন।
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              যোগাযোগ করুন →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
          <p>© {currentYear} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।</p>
          <Link href="/" className="transition hover:text-red-600">
            সত্যের সন্ধানে, সবার আগে
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;