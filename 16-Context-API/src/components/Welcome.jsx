import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext'

const Welcome = () => {

    const {theme} = useContext(ThemeContext);
    console.log(theme);
  return (
    <h1 className={`text-6xl text-bold ${theme === 
    'light' ? "text-gray-800 bg-slate-200" :
    "text-slate-200 bg-gray-800"}`}>Welcome To Theme
     Changing App</h1>
  )
}

export default Welcome