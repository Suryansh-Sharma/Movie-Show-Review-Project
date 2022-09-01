import React from 'react'
import "./Card.css";
import { useNavigate, useParams ,Link} from "react-router-dom";
const AllCategories=()=> {
  let navigate=useNavigate();
  return (
    <div className="main-container" >
  <div className="heading">
    <h1 className="heading__title">CATEGORIES</h1>
  </div>
  <div className="cards">
    <div className="card card-1">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">Action</h2>
      <p className="card__apply">
        <a className="card__link" href="#" 
        onClick={()=>navigate("/movie/" +"showGenre/"+"Action/" + "Action Movies" )}
        >View Movies<i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-2">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">Comedy</h2>
      <p className="card__apply">
        <a className="card__link" href="#"
        onClick={()=>navigate("/movie/" + "showGenre/"+"Comedy/" + "Comedy Movies" )}
        >View Movies<i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-3">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">DRAMA</h2>
      <p className="card__apply">
        <a className="card__link" href="#"
        onClick={()=>navigate("/movie/" + "showGenre/"+"Drama/" + "Drama Movies" )}
        >View Movies<i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-4">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">Horror</h2>
      <p className="card__apply">
        <a className="card__link" href="#"
        onClick={()=>navigate("/movie/" + "showGenre/"+"Horror/" + "Horror Movies" )}
        >View Movies<i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-5">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">THRILLER</h2>
      <p className="card__apply">
        <a className="card__link" href="#"
        onClick={()=>navigate("/movie/" + "showGenre/"+"Thriller/" + "Thriller Movies" )}
        >View Movies<i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div className="card card-1">
      <div className="card__icon"><i className="fas fa-bolt"></i></div>
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__title">FANTASY</h2>
      <p className="card__apply">
        <a className="card__link" href="#"
        onClick={()=>navigate("/movie/" + "showGenre/"+"Fantasy/" + "Fantasy Movies" )}
        >View Movies<i className="fas fa-arrow-right"></i></a>
      </p>
    </div>
  </div>
</div>
  )
}

export default AllCategories