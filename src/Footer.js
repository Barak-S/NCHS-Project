import React from 'react'
import './App.css';

export default function Footer(){
    return(
        <div className="footer">
            <h3 style={{color: "#fff", fontSize: 21, paddingTop: 54, paddingBottom: 12.5, fontWeight: "300", marginTop: 42.5}}>Ready to take your healthcare marketing to the next level?</h3>
            <h5 style={{color: "#fff", fontWeight: "700"}}>Put Crossix to work for you.</h5>
            <button className= "buttonF" style={{backgroundColor: "#F8981C", color: "#fff", width: 145, padding: 8.5, fontWeight: "700", fontSize:13.5, borderRadius: 40, borderColor: "#F8981c", marginTop: 26,}}>CONTACT US</button>
        </div>
    )
}