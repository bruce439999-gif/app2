'use client';

import Giscus from '@giscus/react';

export default function GiscusComments() {
  return (
    <div className="mt-16 border-t border-zinc-100 dark:border-zinc-800 pt-16">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
        留言板
      </h2>
      <Giscus
        id="comments"
        repo="bruce439999-gif/app2"
        repoId="R_kgDOQvCZEQ"
        category="Announcements"
        categoryId="DIC_kwDOQvCZEc4C0QU1"
        mapping="pathname"
        term="Welcome to my blog!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
