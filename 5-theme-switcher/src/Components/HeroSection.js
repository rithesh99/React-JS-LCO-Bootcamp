import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors'

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <div
        style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}
        >
            <h1>Context API theme toggler</h1>
            <p>This is a nice paragragh</p>
            <button
            style={{
                backgroundColor:"#26ae60",
                padding: "10px 150px",
                fonstSize: "20px",
                color: "#fff",
                border: `${currentTheme.border}`
            }}>
                Click Me !!!</button>        
        </div>
    )
}

export default HeroSection;