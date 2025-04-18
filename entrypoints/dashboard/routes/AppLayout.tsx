import { Outlet } from "react-router";
import { NavItem } from "@/common/components/Navigation/NavItem";
import { useAuth } from "@/common/components/auth/AuthContext";

export function AppLayout() {
  const auth = useAuth();
  if (!auth.ready) {
    return null;
  }

  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="bg-gray-100 w-50">
        <h1 className="pt-10 pb-10 pl-5 text-2xl font-bold">Focus Buddy</h1>
        <div className="flex flex-col">
          {!!auth.user && (
            <>
              <NavItem to="/focustimer">Focus Timer</NavItem>
              <NavItem to="/blocklist">Blocklist</NavItem>
              <NavItem to="/calendar">Calendar</NavItem>
              <NavItem to="/analytics">Dashboard</NavItem>
              <NavItem to="/notifications">Notifications</NavItem>
            </>
          )}
        </div>
      </div>
      <div className="px-5 py-10 flex-1">
        <Outlet />
      </div>
    </div>
  );
}
