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
    title: '我的一篇爽文小说大纲',
    excerpt: '讲述一个拥有控制分子能力的人，从赌石到赌宇宙。',
    date: '2025-12-26',
    content: '这里是小说的详细大纲。主角意外获得控制分子的超能力，初期在都市中通过赌石积累财富，后期走向星际，开启一段震撼宇宙的冒险之旅。'
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
