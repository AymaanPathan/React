import { useEffect, useState } from "react"
import { ThemeProvider } from "./Context/ThemeContext"
import Card from "./Components/Card"
import ThemeBtn from "./Components/ThemeBtn"

export default function App() {
  const [Theme,setTheme] = useState('light')

  const LightMode = ()=>{
    setTheme('light')
  }
  const darkMode = ()=>{
    setTheme('dark')
  }

  // Actual working on theme
  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(Theme)
  },[Theme])

  return (
    <ThemeProvider value={{Theme,LightMode,darkMode}}>

    <div className="flex flex-wrap min-h-screen items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                            {/* Theme Btn */}
                            <ThemeBtn/>
                        </div>
                        <div className="w-full max-w-sm mx-auto">
                           {/* Card */}
                           <Card/>
                        </div>
                    </div>
                </div>
        </ThemeProvider>
  )
}