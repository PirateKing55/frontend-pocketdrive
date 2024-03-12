import { SidebarWrapper } from "./SidebarWrapper";

export const Layout = ({ component: Component, collections }) => {
  return (
    <div className="flex bg-[#fbfbfb] h-screen">
      <SidebarWrapper collections={collections} />
      <Component />
    </div>
  );
};
