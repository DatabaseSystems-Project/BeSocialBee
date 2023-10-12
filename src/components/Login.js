import React, {useState} from "react";
import "../styles/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faLock} from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    const [action,setAction] = useState("Sign Up");

    
    return <div className="parent"> 
        <div className="leftpart">
            
        </div>

        <div className="rightpart">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action==="Login"?<div></div>:<div className="input">
                        <FontAwesomeIcon icon={faUser} className="icon"/>
                        <input type="text" placeholder="Name"/>
                    </div>}
                    
                    <div className="input">
                        <FontAwesomeIcon icon={faEnvelope}  className="icon"/>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input">
                        <FontAwesomeIcon icon={faLock} className="icon"/>
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">Forget Password?<span> Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
    </div>;
}

export default Login;