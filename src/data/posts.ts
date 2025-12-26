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
  }
];
