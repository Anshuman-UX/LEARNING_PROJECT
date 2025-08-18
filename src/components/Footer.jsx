export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Redify. All rights reserved.</p>
      </div>
    </footer>
  );
}
