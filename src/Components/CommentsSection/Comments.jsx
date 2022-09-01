import {React,useEffect,useState,useContext} from 'react'
import "./Comments.css";
import Axios from "axios";
import LoginContext from '../../context/loginContext';
import {useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert } from 'bootstrap';
function Comments({id}) {
    const [Data, setData] = useState({
        data:[]
    });
    const date = new Date().toISOString().slice(0,10);
    const navigate=useNavigate();
    const auth = useContext(LoginContext);
    const [formData,SetFormData]=useState({
        showId: 0,
        userName: "",
        userPic: "",
        note: "",
        dateOfComment: ""
    })
    useEffect(()=>{
        const timeoutID = window.setTimeout(() => {
            Axios.get(`http://localhost:8080/shows/getComments/${id}`)
            .then((response) => {
                setData({...Data,data:response.data});
              })
              .catch((err) => {
                console.log(err)
              });
        }, 2000);
    
        return () => window.clearTimeout(timeoutID );
    },[]);

    const submitComment= async()=>{
        if(!auth.status)navigate("/login")
        else{

            if(formData.note.length>0){ 
                console.log(formData);
                if(formData.userProfilePic===""){
                    SetFormData({...formData,userProfilePic:"defaultProfile"});
                }
                const api =`http://localhost:8080/uploadComment`;
                const token=localStorage.getItem('jwtToken');
                Axios.post(api,formData, { headers: {"Authorization" : `Bearer  ${token}`} })
                .then((response)=>{
                    toast.success('🎀 Congratulation Your comment is Added successfully' + ' Please Refresh Page', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });    
                    setTimeout(window.location.reload,4000);
                })
                .catch((error)=>{
                    toast.error('😕 Something Went Wrong Please try to Login/Re-Login', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });  
                    console.log(error);              
                })
                
            }else{
                alert("Comment field is empty");
            }
        }
    }
    const handleInput=(event)=>{
        const userName=localStorage.getItem("userName");
        const userPic=localStorage.getItem("userPic");
        SetFormData({...formData,
            note:event.target.value,
            showId:id,
            dateOfComment:date,
            userName:userName,
            userPic:userPic
        });
    }


return (
<div className="row d-flex justify-content-center ">
    <div className="container ">
        <div className="row">
                <h1>User Reviews</h1>
            <div className="col-sm-5 col-md-6 col-12 pb-4">
                {
                    Data.data.map((response)=>
                    <div className="text-justify  col-sm-5 col-md-6 col-12 pb-4 darker mt-4 float-right" key={response.id}>
                        <img src={`http://localhost:8080/file/download/${response.userPic}`} alt="" 
                        className="rounded-circle" width="40" height="40"/>
                        <h4>{response.userName}</h4>
                        {
                            console.log(response)
                        }
                        <span>{response.dateofComment}</span>
                        <br/>
                        <p style={{color:'lightBlue'}}>
                            {response.note}
                        </p>
                        <h5 className={"text-primary"}>{response.dateOfComment}</h5>
                    </div>
                    )
                }
            </div>
            <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                <form id="algin-form">
                    <div className="form-group">
                        <h4>Leave a comment</h4>
                        <label className="message">Message</label>
                    </div>
                    <div className="form-group">
                        <label className="name">Comment</label>
                        <input type="text" name="name" id="fullname" className="form-control name"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <button type="button" id="post" onClick={submitComment} className="btn btn-comment">Post Comment</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  
)}

export default Comments