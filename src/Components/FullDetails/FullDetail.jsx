import React, { useState, useEffect, useContext } from "react";
import "./FullDetails.css";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Comments from "../CommentsSection/Comments";
function FullDetails() {
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [show, setShow] = useState({
    images: [],
    showCasts: [],
    showGenre: [],
  });
  const [isParentLoaded,setIsParentLoaded]=useState(false);
  useEffect(() => {
    Axios.get(`http://localhost:8080/shows/get/${id}`)
      .then((response) => {
        setShow(response.data);
        setIsParentLoaded(true)
      })
      .catch((err) => {
        navigate("/error404");
      });

  }, []);


  return (
    <div className={"FullDetails"}>
      <h3 className="FullDetails-title">{show.name}</h3>

      <img className={"FullDetails-image"} src={show.images.coverImage} />

      <span className={"des1"}>{show.description}</span>
      <span className={"type-heading"}>Type: </span>
      <a
        onClick={() =>
          navigate("/movie/" + "getShowsByType/" + show.type + "/" + show.type)
        }
      >
        <span className={"type"}>{show.type} SHOW</span>
      </a>

      <div className="FullDetails-category">
        {show.showGenre.map((item) => (
          <span
            
            className={"cat1"}
            onClick={() =>
              navigate(
                "/movie/" + "showGenre/" + item.genreName + "/" + item.genreName
              )
            }
          >
            {item.genreName}
          </span>
        ))}
      </div>

      <h3 className={"Film-Credits-title"}>Film Credits</h3>
      <div className="Film-Credits">
        <div className="Film-Credits-left">
          <img
            className={"Film-Credits-img"}
            src={show.images.poster3}
            alt=""
          />
          <span className={"date"}>{show.releaseDate}</span>
          <span className={"rating"}>Rating : {show.rating} out of 10</span>
          <span className={"duration"}>Duration : {show.time}</span>
        </div>

        <div className="Film-Credits-right">
          <h2 className={"Film-Credits-right-cast"}>Top Cast </h2>
          {show.showCasts.map((item) => (
            <ul
              className={"cast"}
              onClick={() => {
                console.log(item.actorName);
                navigate(
                  "/movie/" + "actor/" + item.actorName + "/" + item.actorName
                );
              }}
            >
              {item.actorName}
            </ul>
          ))}
          <h2 className={"director"}>Director</h2>
          <span
            className={"d-name"}
            onClick={() => {
              navigate(
                "/movie/" +
                  "director/" +
                  show.directorName +
                  "/" +
                  show.directorName
              );
            }}
          >
            {show.directorName}
          </span>
        </div>
      </div>{(isParentLoaded)?
      <div className="commentSection"> 
            <Comments id={show.id}/>

      </div>
      :null
      }
    </div>
  );
}

export default FullDetails;
