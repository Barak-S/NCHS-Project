import React from 'react'
import './App.css';

export default function Footer(){
    return(
        <div className="footer">
            <h3 style={{color: "#fff", fontSize: 21, paddingTop: 54, paddingBottom: 8, fontWeight: "700", marginTop: 42.5}}>React JavaScript Frontend</h3>
            <h5 style={{color: "#fff", fontWeight: "300"}}>Ruby on Rails Backend</h5>
            <button className= "buttonF" style={{backgroundColor: "#E6EFF6", color: "#013C71", width: 145, padding: 8.5, fontWeight: "700", fontSize:15, borderRadius: 40, borderColor: "#E6EFF6", marginTop: 26,}}>Barak's Portfolio</button>
        </div>
    )
}