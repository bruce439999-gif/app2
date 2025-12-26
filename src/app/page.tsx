import Link from 'next/link';
import { posts } from '@/data/posts';
import MessageBoard from '@/components/MessageBoard';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-4">
          欢迎来到我的小屋
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          我的生活与感悟。
        </p>
      </header>

      <div className="grid gap-12">
        {posts.map((post) => (
          <article key={post.id} className="group relative flex flex-col items-start">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              <Link href={`/posts/${post.id}`}>
                <span className="absolute -inset-y-2.5 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">{post.title}</span>
              </Link>
            </h2>
            <time className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" dateTime={post.date}>
              <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              </span>
              {post.date}
            </time>
            <p className="relative z-10 text-zinc-600 dark:text-zinc-400 text-base leading-7">
              {post.excerpt}
            </p>
            <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
              阅读更多
              <svg className="ml-1 h-4 w-4 stroke-current" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
        ))}
      </div>

      <MessageBoard />
    </div>
  );
}
