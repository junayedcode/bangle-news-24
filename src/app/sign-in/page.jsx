
"use client";

import toast from "react-hot-toast";
import { authClient } from "../../lib/auth-client";

const SignInpage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Sign In successfull");
      console.log(data);
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handlegoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handlegithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });

    console.log(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-5">
        সাইন ইন
      </h2>

      <form onSubmit={onSubmit} className="flex justify-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs max-w-full border p-4 mt-4">
          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="ইমেইল"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="পাসওয়ার্ড"
          />

          <button
            type="submit"
            className="btn bg-red-600 text-white hover:bg-red-700 border-none mt-4"
          >
            সাইন ইন
          </button>
        </fieldset>
      </form>

      <button
        type="button"
        onClick={handlegoogleSignIn}
        className="flex items-center justify-center gap-2 w-xs max-w-full mx-auto mt-4 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer transition hover:bg-gray-100 hover:shadow-sm active:scale-[0.98]"
      >
        <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z" />
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
          <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.6 5.1C9.5 39.6 16.2 44 24 44z" />
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.5l6.3 5.3C36.9 40.3 44 35 44 24c0-1.3-.1-2.3-.4-3.5z" />
        </svg>
        Google দিয়ে সাইন ইন
      </button>

      <button
        type="button"
        onClick={handlegithubSignIn}
        className="flex items-center justify-center gap-2 w-xs max-w-full mx-auto mt-3 rounded-md border border-gray-300 bg-gray-900 px-4 py-2 text-sm font-medium text-white cursor-pointer transition hover:bg-gray-800 hover:shadow-sm active:scale-[0.98]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
        </svg>
        GitHub দিয়ে সাইন ইন
      </button>
    </div>
  );
};

export default SignInpage;
