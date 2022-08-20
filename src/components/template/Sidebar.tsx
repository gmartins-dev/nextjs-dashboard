import { IconAdjustments, IconBell, IconHome } from "../icons/index";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {

  return(
    <aside>
      <ul>
        <SidebarItem url="/" text="Home" icon={IconHome}/>

        <SidebarItem url="/" text="Configs" icon={IconAdjustments}/>

        <SidebarItem url="/" text="Notificações" icon={IconBell}/>
      </ul>
    </aside>
  )
  
};
