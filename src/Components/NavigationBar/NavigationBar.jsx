import { React,useState,useContext , useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import "./Navbar.css";
import titleLogo from "../../icons/movie.png";
import LoginContext from '../../context/loginContext';

const Navigation = () => {

    const auth = useContext(LoginContext);
    let navigate = useNavigate();
    const [type, settype] = useState([{
        movie:"MOVIE"
    }])

    const handleLogin=()=>{
        // If a User is Already Login then Logout.
        if(auth.status){
            localStorage.setItem('userName',"null");
            localStorage.setItem('isLogin',false);
            localStorage.setItem('isAdmin',false);
            localStorage.removeItem('jwtToken');
            localStorage.setItem('userPic',"defaultProfile");
            window.location.reload();
        }else{
            navigate("/login");
        }
    }


    return (
        <div className="Navbar" id="Navbar" >
            <nav className="navbar navbar-expand-lg navbar-default">
                {/* <a className="navbar-brand" onClick={()=>{navigate("/")}}>Movie & Shows</a> */}
                <img src={titleLogo} className={"navbar-brand"} onClick={()=>{navigate("/")}}></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>{
                                navigate("/search")
                            }} >Search Movies & Show </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>navigate("/") }>Home Page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  onClick={()=>{navigate("/categories")}}>Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={()=>navigate("/movie/" +"getShowsByType/"+ "MOVIE"+ "/"+"MOVIE") }>Movies</a>
                        </li>

                        {(auth.status)? 
                        <li className="nav-item profile">
                            <a className="nav-link" onClick={()=>navigate("/profile/" + auth.userName)}>{auth.userName}</a>
                        </li> 
                        :null    
                        }
                        <button className={"btn"} onClick={handleLogin}>
                        {
                            (auth.status)?
                            <div>Logout</div>:
                            <div>Login/SignUp</div>
                            
                        }</button>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation