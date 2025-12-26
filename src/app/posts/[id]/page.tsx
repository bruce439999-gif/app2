import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 mb-8 transition-colors"
      >
        <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        返回首页
      </Link>

      <article>
        <header className="mb-10">
          <time className="text-sm text-zinc-400 dark:text-zinc-500 mb-2 block">
            {post.date}
          </time>
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {post.content}
          </p>
          {/* 这里可以添加更多模拟内容 */}
          <div className="mt-8 space-y-4">
            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
              在现代 Web 开发中，选择合适的工具至关重要。Next.js 为我们提供了开箱即用的各种优化，而 Tailwind CSS 则让我们能够以极快的速度构建出美观且响应式的界面。
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
              这篇文章仅仅是一个开始。在接下来的日子里，我将分享更多关于前端开发、性能优化以及个人成长的心得体会。感谢你的阅读！
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}
