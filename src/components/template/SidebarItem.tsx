interface SidebarItemProps {
  url: string,
  text: string,
  icon: any
}
 
export default function SidebarItem(props: SidebarItemProps) {
  return (
    <li className="">
      {props.icon}
    </li>
  )
}

