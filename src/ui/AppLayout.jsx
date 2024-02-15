import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="grow bg-color_white px-3 pb-5 md:px-10 ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
