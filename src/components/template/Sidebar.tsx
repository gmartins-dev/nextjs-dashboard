import { IconAdjustments, IconBell, IconHome, IconLogout } from "../icons/index";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {

  return(
    <aside className="flex flex-col">
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-800">
        <Logo/>
      </div>
      <ul className="flex-grow">
        <SidebarItem url="/" text="Home" icon={IconHome}/>

        <SidebarItem url="/adjustments" text="Configs" icon={IconAdjustments}/>

        <SidebarItem url="/notifications" text="Notifications" icon={IconBell}/>
      </ul>
      <ul>
        <SidebarItem 
        text="Logout" 
        icon={IconLogout} 
        onClick={() => console.log("logoooouuutt")}
        className={`text-red-600 hover:bg-red-400 hover:text-white`}
        />
      </ul>
    </aside>
  )
  
};
