import Header from "@/Layouts/Header";
import MobileNav from "@/Layouts/MobileNav";
import { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

export default function AuthenticatedLayout({ header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  // Theme state: check localStorage, default to system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Effect to apply theme class to html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => setIsDarkMode((prev) => !prev);
  const handleMenuClick = () => setShowingNavigationDropdown((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header
        onToggleTheme={handleToggleTheme}
        isDarkMode={isDarkMode}
        onMenuClick={handleMenuClick}
        showingNavigationDropdown={showingNavigationDropdown}
      />
      <MobileNav showingNavigationDropdown={showingNavigationDropdown} />
      {header && (
        <header className="bg-white shadow dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}
      <main>{children}</main>
    </div>
  );
}
