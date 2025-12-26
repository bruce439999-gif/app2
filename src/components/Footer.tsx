export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} MyBlog. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
