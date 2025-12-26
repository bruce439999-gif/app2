import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-6">
            关于我
          </h1>
          <div className="prose prose-zinc dark:prose-invert">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 leading-8">
              你好！我是一个热衷于 Web 开发的程序员。我喜欢探索新技术，并在我的博客上分享我的所见所闻。
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 leading-8">
              我的技术栈主要包括 React, Next.js, TypeScript 和 Tailwind CSS。我相信简洁的代码和优秀的用户体验是构建成功产品的关键。
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-8">
              除了编程，我还喜欢摄影、阅读和旅行。如果你有任何问题或者想和我交流，欢迎随时联系我！
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">联系方式</h2>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Email: hello@example.com</li>
              <li>GitHub: github.com/username</li>
              <li>Twitter: @username</li>
            </ul>
          </div>
        </div>
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600">
            <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          {/* 这里可以放一张个人照片 */}
          {/* <Image src="/avatar.jpg" alt="我的头像" fill className="object-cover" /> */}
        </div>
      </div>
    </div>
  );
}
