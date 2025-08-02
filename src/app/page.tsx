import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <main className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6">
          Sonika
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A beautiful static site built with Next.js, TypeScript, and Tailwind CSS
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex-1 max-w-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              ⚡ Fast Performance
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Optimized static generation for lightning-fast loading
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex-1 max-w-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              🎨 Beautiful Design
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Crafted with Tailwind CSS for stunning visuals
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex-1 max-w-sm">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              🔧 TypeScript Ready
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Type-safe development with full TypeScript support
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/about"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Get Started
          </Link>
          <Link 
            href="/about"
            className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}
