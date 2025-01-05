import React from "react"

function Hero(props) {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours <19) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    
    return (
        <div className={props.darkMode ? "dark" : ""}>
            <h1 className="hero">Good {timeOfDay}!</h1>
            <p className="hero-p">I am a Productdesigner and Brand creator based in Berlin, currently learning React 🖤</p>
        </div>
    )}


export default Hero;