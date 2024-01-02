/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'
import { useContext } from 'react'


export const ThemeContext = createContext({
    Theme:'light',
    darkMode:{},
    LightMode:{}
})

export const ThemeProvider = ThemeContext.Provider

export default function UseTheme(){
   return  useContext(ThemeContext);
}

