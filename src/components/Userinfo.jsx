"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { authClient } from "../lib/auth-client";

const Userinfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
    await authClient.signOut();
  };

  // সেশন লোড হওয়ার সময় কিছু দেখানোর দরকার নেই (layout লাফানো এড়াতে)
  if (isPending) {
    return <div className="w-24 h-10" />;
  }

  return (
    <div className="flex items-center justify-end gap-2 sm:gap-5">
      {user ? (
        /* ---------- লগইন করা অবস্থা ---------- */
        <div className="flex flex-col items-center gap-2">
         <Link href={'/profile'}>
          <div className="avatar">
            <div className="w-16 rounded-full ring-2 ring-red-600 ring-offset-2 ring-offset-base-100">
             <Image
                      src={user.image}
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
            </div>
          </div>
         </Link>

          <h2 className="text-sm font-semibold text-center">{user.name}</h2>

          <button
            onClick={handleSignout}
            className="btn btn-sm bg-red-600 text-white hover:bg-red-700 border-none"
          >
            সাইন আউট
          </button>
        </div>
      ) : (
      
        <div className="flex items-center gap-2">
          <Link
            href="/sign-in"
            className="whitespace-nowrap rounded-md border border-red-600 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="whitespace-nowrap rounded-md bg-red-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-red-700"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;