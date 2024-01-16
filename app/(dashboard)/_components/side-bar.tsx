import { Logo } from "./logo";
import { SideBarRoutes } from "./sidebarroutes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
        <div className="flex flex-col w-full">
          <SideBarRoutes />
        </div>
      </div>
    </div>
  );
};
