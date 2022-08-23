import { createContext, useState } from "react";

type Theme = 'dark' | ''

interface AppContextProps {
  theme?: Theme
  switchTheme?: () => void
} 

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props){

  const [theme, setTheme] = useState<Theme>('dark')

  function switchTheme() {
    console.log('testttttttttt')
    setTheme(theme === '' ? 'dark' : '')
  }

  return(
    <AppContext.Provider value={{
      theme,
      switchTheme
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext