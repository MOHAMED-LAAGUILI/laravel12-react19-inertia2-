import { useState, useEffect } from "react";
import Header from "./Header";
import MobileNav from "./MobileNav";

export default function AuthenticatedLayout({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage or system preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => setIsDarkMode((prev) => !prev);
  const handleMenuClick = () => setShowingNavigationDropdown((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header navigation */}
      <Header
        onToggleTheme={handleToggleTheme}
        isDarkMode={isDarkMode}
        onMenuClick={handleMenuClick}
        showingNavigationDropdown={showingNavigationDropdown}
      />
      <MobileNav showingNavigationDropdown={showingNavigationDropdown} />

      {header && (
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
