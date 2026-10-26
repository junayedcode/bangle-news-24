"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "../../lib/auth-client";
import Image from "next/image";

const Profilepage = () => {
  const { data: session, isPending } = authClient.useSession();

  const [preview, setPreview] = useState(null);
  const [imageData, setImageData] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false)
  const handleShowForm = () => {
    setShow(!show)
  }

  const user = session?.user;

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("একটি image ফাইল নির্বাচন করো।");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("ছবির সাইজ 2 MB-এর কম হতে হবে।");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result;

      if (typeof result === "string") {
        setPreview(result);
        setImageData(result);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    setLoading(true);

    try {
      const updateData = {
        name: String(name).trim(),
      };

      if (imageData) {
        updateData.image = imageData;
      }

      const { error } = await authClient.updateUser(updateData);

      if (error) {
        alert(error.message || "প্রোফাইল আপডেট করা যায়নি।");
        return;
      }

      alert("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
      setPreview(null);
      setImageData("");
    } catch (error) {
      console.error("Profile update error:", error);
      alert("একটি সমস্যা হয়েছে। আবার চেষ্টা করো।");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) return <p className="p-5 text-center text-base-content/70">লোড হচ্ছে...</p>;

  if (!user) {
    return <p className="p-5 text-center text-base-content/70">প্রোফাইল দেখতে আগে লগইন করো।</p>;
  }

  return (
    <div className="mx-auto max-w-md p-5">
      {/* অ্যাভাটার */}
      <Link href="/profile" className="mx-auto block w-fit">
        <div className="avatar">
          <div className="w-20 rounded-full ring-2 ring-red-600 ring-offset-2 ring-offset-base-100 transition hover:ring-red-700">
            {preview || user.image ? (
              <Image
                src={preview || user.image}
                alt="Profile"
                width={80}
                height={80}
                unoptimized
                className="h-20 w-20 rounded-full object-cover object-center"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-300 text-2xl font-bold text-gray-600">
                {user.name?.charAt(0) || "U"}
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* নাম ও ইমেইল */}
      <h2 className="mt-4 text-center text-xl font-bold">{user.name}</h2>
      <p className="text-center text-sm text-base-content/60">{user.email}</p>

      {/* এডিট বাটন */}
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={handleShowForm}
          className="whitespace-nowrap rounded-md bg-red-600 px-4 py-2 text-xs font-medium text-white cursor-pointer transition hover:bg-red-700 active:scale-[0.98]"
        >
          এডিট প্রোফাইল
        </button>
      </div>

      {/* এডিট ফর্ম */}
      {show && (
        <form onSubmit={handleUpdateProfile} className="mt-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-5 shadow-sm">
            <label className="label font-medium">নাম</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="নতুন নাম লিখুন"
              defaultValue=""
              required
            />

            <label className="label font-medium">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="নতুন ইমেইল লিখুন"
              defaultValue=""
              required
            />

            <label className="label font-medium">প্রোফাইল ছবি</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              onChange={handleImageChange}
            />

            {preview && (
              <div className="mt-3 flex flex-col items-center gap-2">
                <Image
                  src={preview || user.image}
                  alt="Profile"
                  width={64}
                  height={64}
                  unoptimized
                  className="h-16 w-16 rounded-full object-cover object-center ring-2 ring-red-600 ring-offset-2"
                />
                <p className="text-sm text-base-content/70">ছবিটি নির্বাচন করা হয়েছে</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn mt-4 w-full border-none bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400"
            >
              {loading ? "অপেক্ষা করুন..." : "প্রোফাইল আপডেট"}
            </button>
          </fieldset>
        </form>
      )}
    </div>
  );
};

export default Profilepage;