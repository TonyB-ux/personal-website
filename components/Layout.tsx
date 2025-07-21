import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tony bbsl | Personal Website',
  description: 'Welcome to Tony bbsl\'s personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-800">Tony bbsl</h1>
              </div>
              <div className="flex items-center space-x-8">
                <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
