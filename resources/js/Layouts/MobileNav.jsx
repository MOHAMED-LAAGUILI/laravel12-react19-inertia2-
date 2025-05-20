import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { usePage } from "@inertiajs/react";

export default function MobileNav({ showingNavigationDropdown }) {
  const user = usePage().props.auth.user;
  return (
    <div className={(showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"}>
      <div className="space-y-1 pb-3 pt-2">
        <ResponsiveNavLink href={route("dashboard")} active={route().current("dashboard")}>Dashboard</ResponsiveNavLink>
        <ResponsiveNavLink href={route("project.index")} active={route().current("project.index")}>Projects</ResponsiveNavLink>
        <ResponsiveNavLink href={route("user.index")} active={route().current("user.index")}>Users</ResponsiveNavLink>
        <ResponsiveNavLink href={route("task.index")} active={route().current("task.index")}>Tasks</ResponsiveNavLink>
      </div>
      <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
        <div className="px-4">
          <div className="text-base font-medium text-gray-800 dark:text-gray-200">{user.name}</div>
          <div className="text-sm font-medium text-gray-500">{user.email}</div>
        </div>
        <div className="mt-3 space-y-1">
          <ResponsiveNavLink href={route("profile.edit")}>Profile</ResponsiveNavLink>
          <ResponsiveNavLink method="post" href={route("logout")}
                as="button"
              >
                Log Out
              </ResponsiveNavLink>
        </div>
      </div>
    </div>
  );
}
