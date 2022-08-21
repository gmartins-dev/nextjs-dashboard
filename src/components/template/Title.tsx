import Sidebar from "./Sidebar";

interface TitleProps {
  title: string;
  subtitle: string;
  children?: any
  
}

export default function Title(props: TitleProps) {
  return(
    <div>
      <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100">{props.title}</h1>
      <h2 className="text-sm font-light dark:text-gray-300">{props.subtitle}</h2>
    </div>
  )
}
