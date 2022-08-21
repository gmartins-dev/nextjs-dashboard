import Link from "../../../node_modules/next/link"

interface SidebarItemProps {
  url: string,
  text: string,
  icon: any
}
 
export default function SidebarItem(props: SidebarItemProps) {
  return (
    <li className="hover:bg-gray-100">
      <Link href={props.url}>
        <a 
        className="flex flex-col items-center justify-center w-full h-20">
        {props.icon}
        <span 
        className="w-20 text-xs font-light text-center text-gray-600">
          {props.text}
        </span>
        </a>
      </Link>
    </li>
  )
}

