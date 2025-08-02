import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Sonika
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🚀 Modern Technology Stack
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Next.js 15 for static site generation</li>
              <li>• TypeScript for type safety</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Optimized for performance</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ✨ Key Features
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Static site generation</li>
              <li>• Responsive design</li>
              <li>• Dark mode support</li>
              <li>• SEO optimized</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Sonika is designed to be a fast, modern, and beautiful static website template. 
            Built with the latest web technologies, it provides an excellent foundation for 
            your next project.
          </p>
          
          <Link 
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
