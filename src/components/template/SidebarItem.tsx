import Link from "../../../node_modules/next/link"

interface SidebarItemProps {
  url?: string,
  text: string,
  icon: any,
  className?: string, 
  onClick?: (event: any) => void
}
 
export default function SidebarItem(props: SidebarItemProps) {
  
  function linkRender(){
    return (
      <a 
      className={`flex flex-col items-center justify-center w-20 h-20 dark:text-gray-200 ${props.className}`}>
      {props.icon}
      <span 
      className="w-20 text-xs font-light text-center">
        {props.text}
      </span>
      </a>
    )
  }
  
  return (
    <li onClick={props.onClick} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
      {props.url ? (
        <Link href={props.url}>
         {linkRender()}
        </Link>
        ):(linkRender()
      )}
    </li>
  )
}

