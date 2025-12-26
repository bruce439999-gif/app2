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
        repoId="R_kgDONn5R4w" // 这通常是默认 ID，如果不对请告诉我
        category="General"
        categoryId="DIC_kwDONn5R484Cl646" // 这通常是默认 ID，如果不对请告诉我
        mapping="pathname"
        term="Welcome to my blog!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
