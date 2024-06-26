import React from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerleft">
                <h1 style={{ color: "red", fontFamily: "sans-sarif", fontSize: 40 }}>KHYATi'S MOViEFLiX</h1>

            </div>
            <div className="headerright">
                <Link to="/" style={{ textDecoration: "none" }}>  <span> Home</span></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
                <Link to="/movies/signUp" style={{ textDecoration: "none" }}>  <span> SignUp</span></Link>
            </div>

        </div >
    )
}
export default Header