import { IconMoon, IconSun } from "../icons/index"

interface ButtonSwitchThemeProps {

  theme: string
  switchTheme: () => void
}

export default function ButtonSwitchTheme(props: ButtonSwitchThemeProps){
  return(
    props.theme === 'dark' ? (
      <div onClick={props.switchTheme}>
        <div className="">
          {IconSun}
        </div>
        <div className="">
          <span>Light</span>
        </div>
      </div>
    ):(
      <div onClick={props.switchTheme}>
      <div>
        {IconMoon}
      </div>
      <div>
        <span>Dark</span>
      </div>
    </div>
    )
  )
}