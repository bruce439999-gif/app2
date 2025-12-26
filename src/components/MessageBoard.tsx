'use client';

import { useState, useEffect } from 'react';

interface Message {
  id: string;
  name: string;
  content: string;
  date: string;
}

export default function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 初始化时从 localStorage 加载留言
  useEffect(() => {
    const savedMessages = localStorage.getItem('blog_messages');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.error('Failed to parse messages', e);
      }
    }
  }, []);

  // 保存留言到 localStorage
  const saveMessages = (newMessages: Message[]) => {
    localStorage.setItem('blog_messages', JSON.stringify(newMessages));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setIsSubmitting(true);

    const newMessage: Message = {
      id: Date.now().toString(),
      name: name.trim(),
      content: content.trim(),
      date: new Date().toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const updatedMessages = [newMessage, ...messages];
    setMessages(updatedMessages);
    saveMessages(updatedMessages);
    
    setName('');
    setContent('');
    setIsSubmitting(false);
  };

  return (
    <div className="mt-16 border-t border-zinc-100 dark:border-zinc-800 pt-16">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
        留言板
      </h2>

      {/* 留言表单 */}
      <form onSubmit={handleSubmit} className="mb-12 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            昵称
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 outline-none transition-all"
            placeholder="你的名字"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
            留言内容
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-zinc-500 outline-none transition-all resize-none"
            placeholder="说点什么吧..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? '发送中...' : '提交留言'}
        </button>
      </form>

      {/* 留言列表 */}
      <div className="space-y-6">
        {messages.length === 0 ? (
          <p className="text-zinc-500 dark:text-zinc-400 text-center py-8 border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-xl">
            还没有人留言，快来抢沙发吧！
          </p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 transition-all hover:shadow-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-zinc-900 dark:text-zinc-100">
                  {msg.name}
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {msg.date}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-wrap">
                {msg.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
