
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "../../lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";

const SingUppage = () => {
  const router = useRouter();
  const [preview, setPreview] = useState("");
  const [imageData, setImageData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("একটি ছবির ফাইল নির্বাচন করুন");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("ছবির সাইজ 2 MB-এর কম হতে হবে");
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

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image: imageData || undefined,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        toast.success("সাইন আপ সফল হয়েছে");
        router.push("/");
      }
    } catch (error) {
      toast.error("সাইন আপ করা যায়নি");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-5">
        সাইন আপ
      </h2>

      <form onSubmit={onSubmit} className="flex justify-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs max-w-full border p-4 mt-4">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="নাম"
            required
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="ইমেইল"
            required
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="পাসওয়ার্ড"
            required
          />

          <label className="label">প্রোফাইল ছবি</label>
          <input
            type="file"
            accept="image/*"
            className="file-input"
            onChange={handleImageChange}
          />

          {preview && (
            <div className="mt-3 flex flex-col items-center gap-2">
              <Image
                src={preview}
                alt="Profile preview"
                width={100}
                height={100}
                className="h-24 w-24 rounded-full object-cover"
              />
              <p className="text-sm">ছবিটি নির্বাচন করা হয়েছে</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn bg-red-600 text-white hover:bg-red-700 border-none mt-4"
          >
            {loading ? "অপেক্ষা করুন..." : "সাইন আপ"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default SingUppage;
