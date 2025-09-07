import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      {/* Top Bar */}
      {/* <Header /> */}
      <Header />

      <div className="flex flex-1">
        {/* Rotated Page Title */}
        <aside className="w-20 flex flex-col items-center justify-center fixed left-0 top-1/2 -translate-y-1/2 select-none  ">
          <h1 className="transform -rotate-90 whitespace-nowrap tracking-[0.2em] text-4xl font-bold text-neutral-700 hover:text-emerald-600">
            {pageTitle}
          </h1>
        </aside>

        {/* Main Content */}
        <main
          role="main"
          className="flex-1 bg-[#111111] p-8 ml-20 shadow-lg border-l-1 border-neutral-700"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
