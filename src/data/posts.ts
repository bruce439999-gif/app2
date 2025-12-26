export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: '我的第一篇博客文章',
    excerpt: '这是我使用 Next.js 和 Tailwind CSS 构建的个人博客的第一篇文章。',
    date: '2025-12-26',
    content: '这里是文章的详细内容。欢迎来到我的个人博客！在这里我会分享我的学习心得和生活点滴。'
  },
  {
    id: '2',
    title: '为什么选择 Next.js?',
    excerpt: 'Next.js 提供了卓越的开发者体验和出色的性能表现。',
    date: '2025-12-25',
    content: 'Next.js 是一个基于 React 的框架，它支持服务端渲染 (SSR)、静态生成 (SSG) 等多种模式，让 Web 开发变得更加高效。'
  },
  {
    id: '3',
    title: 'Tailwind CSS 的魅力',
    excerpt: '原子化 CSS 让样式编写变得如此简单和直观。',
    date: '2025-12-24',
    content: 'Tailwind CSS 允许你直接在 HTML 中编写样式，大大提高了开发速度，并且易于维护。'
  }
];
