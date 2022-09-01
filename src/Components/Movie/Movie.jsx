/**
 * This File is Use for More Movie By categories
 * It Uses Paging Sorting etc.
 */
import { React, useState, useEffect } from "react";
import Comments from "../CommentsSection/Comments";
import "./Movie.css";
import { useNavigate, useParams , useLocation} from "react-router-dom";
import Axios from "axios";
function Movies({
}) {
  const [currPage, setCurrPage] = useState(0);
  const[active,setActive]=useState(false);

  let navigate = useNavigate();
  let {path,id,title}= useParams();
  const [data,setData]=useState([{
    totalPage:0,
    images:[]
  }]);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMovie();
  }, []);
  
  const fetchMovie = (Message) => {
    Axios.get(`http://localhost:8080/shows/${path}/${id}/${currPage}`)
    .then(response=>{
      setData(response.data);
      setActive(true);
    })
    .catch(err=>{
      console.log(`http://localhost:8080/shows/${path}/${id}/${currPage}`);

      if(active===false){
        navigate("/error404")
      }else{
        setCurrPage(0);
        fetchMovie();
      }
    })
  };


  const prevButton = () => {
    if (currPage >= 0) {
      setCurrPage(currPage - 1);
      fetchMovie();
    } else alert("No Previous Page is Available !!");
  };
  const nextButton = () => {
    console.log(currPage);
    setCurrPage(currPage+1);
    fetchMovie();
  };

  return (
    <div className="Movie">
      <h1 className={"Movie-title"}>
        {title}
      </h1>

      <div className="Movie-Cards">

        {
          data.map((response)=>

          <div className="Card">
          <img
            className="Card-img"
            onClick={() => {
              navigate("/show/" + response.name);
            }}
            src={response.images.coverImage}
          />
          <h4 className="Card-title">{response.name}</h4>
        </div>
        )
        }
        




      </div>



      <div className="Movie-Paging">
        <span className="Movie-Paging-Prev" onClick={prevButton}>
          Previous Page
        </span>
        <span className="Movie-Paging-Next" onClick={nextButton}>
          Next Page
        </span>
      </div>
    </div>
  );
}

export default Movies;
