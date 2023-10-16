import React, {useState} from "react";
import "../styles/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faLock} from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [action,setAction] = useState("Sign Up");

    
    return <div className="parent"> 
        
        <div className="leftpart">
            <h1>&nbsp;&nbsp;Merhaba !</h1>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp; Sen de bu deneyimi paylaşmak ve harika içerikler keşfetmek istemez misin? Web sitemize katılarak bu fırsatı kaçırma.</h3>
        </div>
        <form action="/submit-form" method="post">
        <div className="rightpart">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action==="Login"?<div></div>:<div className="input">
                        <FontAwesomeIcon icon={faUser} className="icon"/>
                        <input type="text" placeholder="Name" required/>
                    </div>}
                    
                    <div className="input">
                        <FontAwesomeIcon icon={faEnvelope}  className="icon"/>
                        <input type="email" placeholder="Email" required/>
                    </div>
                    <div className="input">
                        <FontAwesomeIcon icon={faLock} className="icon"/>
                        <input type="password" placeholder="Password" required />
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:<div className="forgot-password">Forget Password?<span> Click Here!</span></div>}
                <div className="submit-container">
                    <button type="submit" className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
                    <button type="submit" className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</button>
                </div>
            </div>
            </form>
    </div>;
}

export default Login;