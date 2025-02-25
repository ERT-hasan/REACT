import {createContext,useContext} from "react";






export default ThemeContext = createContext({

    themeMode:"light",
    darkTheme: () =>{},
    lightTheme: () =>{},


})

export const ThemeProvider = ThemeContext.Provider