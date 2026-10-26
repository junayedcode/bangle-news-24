import Link from "next/link";
import Navlinks from "./Navlinks";
import Userinfo from "./Userinfo";


const Header = () => {
  return (
    <header className="mx-auto max-w-7xl px-6 py-5">
      <div className="grid grid-cols-3 items-center border-b border-neutral-800 pb-6">
        {/* Left Side */}
        <div className="flex items-center gap-5 text-white"></div>

        {/* Center */}
        <div className="flex flex-col items-center text-center">
          <Link
            href="/"
            className="text-xl font-bold text-red-700 sm:text-3xl hover:text-red-600 transition-colors"
          >
            Bangla News 24
          </Link>

          <p className="mt-1 text-xs text-neutral-400">
            সত্যের সন্ধানে, সবার আগে
          </p>

        
        </div>

        {/* Right Side */}
        <Userinfo />
      </div>

      <Navlinks />
    </header>
  );
};

export default Header;