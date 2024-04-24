import React from "react";
import { useParams } from "react-router-dom";
import "./signUp.css"

const SignUp = () => {
    console.log("this sdf sdfj p")
    return (
        <>


            <div className="main">
                <label id="uname"> Enter UserName/E-mail</label>
                <input type="text" for="uname"></input><br />
                <label id="pwd">Enter Password</label>
                <input type="text" for="pwd"></input><br />
            </div>
            <div className="btn">
                <button type="button"> Sign Up </button>
                <button type="button"> Cancel </button>
            </div>

        </>
    );

};
export default SignUp