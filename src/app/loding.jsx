export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center gap-6">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-slate-700 border-t-purple-500 rounded-full animate-spin"></div>

      {/* Text */}
      <h2 className="text-2xl font-bold text-white">Loading...</h2>

      {/* Description */}
      <p className="text-slate-400 text-sm">একটু অপেক্ষা করুন</p>

      {/* Dots */}
      <div className="flex gap-2">
        <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.15s]"></span>
        <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.3s]"></span>
      </div>
    </div>
  );
}