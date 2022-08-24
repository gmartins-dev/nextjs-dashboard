import useAppData from "../../data/hook/useAppData";
import ButtonSwitchTheme from "./ButtonSwitchTheme";
import Sidebar from "./Sidebar";
import Title from "./Title";


interface HeaderProps {
  title: string;
  subtitle: string;
  children?: any
  
}

export default function Header(props: HeaderProps) {
  
  const {theme, switchTheme} = useAppData()
  
  return(
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className="flex flex-grow justify-end">
        <ButtonSwitchTheme theme={theme} switchTheme={switchTheme}/>
      </div>
    </div>
  )
};
