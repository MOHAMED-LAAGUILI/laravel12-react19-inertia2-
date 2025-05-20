import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import { Link, usePage } from "@inertiajs/react";
import { ChevronDownIcon, Menu, X, Sun, Moon } from "lucide-react";

export default function Header({ onToggleTheme, isDarkMode, onMenuClick, showingNavigationDropdown }) {
  const user = usePage().props.auth.user;

  return (
    <nav className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
              </Link>
            </div>
            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
              <NavLink href={route("dashboard")} active={route().current("dashboard")}>Dashboard</NavLink>
              <NavLink href={route("project.index")} active={route().current("project.index")}>Projects</NavLink>
              <NavLink href={route("user.index")} active={route().current("user.index")}>Users</NavLink>
              <NavLink href={route("task.index")} active={route().current("task.index")}>Tasks</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="relative ms-3 hidden sm:block">
              <Dropdown>
                <Dropdown.Trigger>
                  <span className="inline-flex rounded-md">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      {user.name}
                      <ChevronDownIcon className="ms-2 h-4 w-4" />
                    </button>
                  </span>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Link href={route("profile.edit")}>Profile</Dropdown.Link>
                  <Dropdown.Link href={route("logout")} method="post" as="button">Log Out</Dropdown.Link>
                </Dropdown.Content>
              </Dropdown>
            </div>
            <div className="-me-2 flex items-center sm:hidden">
              <button
                onClick={onMenuClick}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
              >
                {showingNavigationDropdown ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
