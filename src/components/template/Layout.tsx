import useAppData from "../../data/hook/useAppData";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any
}

export default function Layout(props: LayoutProps) {
  
  const {theme} = useAppData()

  return(
    <div className={`${theme} flex w-screen h-screen`}>
      <Sidebar/>
      <div className='flex flex-col w-full bg-gray-300 p-7 dark:bg-gray-800'>
        <Header title={props.title} subtitle={props.subtitle}/>
        <Content>
          {props.children}
        </Content>
      </div>
    </div>
  )
};
