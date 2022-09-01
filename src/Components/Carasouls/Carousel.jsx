import Slider from "react-slick";
import "./Carousel.css"
import LeftArrow from "../../icons/icons8-back-to-96.png";
import RightArrow from "../../icons/previcon.png";
import { useNavigate } from "react-router-dom";
export const Carousel = ({ data, title,time,isAuto }) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...size }) => (
    <img src={LeftArrow} alt="prevArrow" {...size} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    prevArrow: <SlickArrowLeft className="right-arrow"  />,
    nextArrow: <SlickArrowRight />,
    infinite: true,
    slidesToShow: 4,
    adaptiveHeight: true,
    slidesToScroll: 2,
    autoplay: isAuto,
    speed: 1200,
    autoplaySpeed: time,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
  
          slidesToScroll: 1
        }
      }
    ]
  };
  let navigate = useNavigate();
  return (
    <div className="carousel" >
      <div>
        <h2 className="title">{title}</h2>
        <Slider {...settings} className={"card-slider"} >
          <div className={"card  c1"}>
            <img className={"card-img"} src={data[0].poster} />
            <span className="card-titles">{data[0].title}</span>
            <button onClick={() => { navigate("/show/" + data[0].title ) }} className="btn card-btn">Read More.</button>
          </div>
          <div  className={"card  c2"}>
            <img className={"card-img"} src={data[1].poster} />
            <span className="card-titles">{data[1].title}</span>
            <button onClick={() => { navigate("/show/" + data[1].title) }} className="btn card-btn">Read More.</button>

          </div>
          <div  className={"card  c3"} >
            <img className={"card-img"} src={data[2].poster} />
            <span className="card-titles">{data[2].title}</span>
            <button onClick={() => { navigate("/show/" + data[2].title) }} className="btn card-btn">Read More.</button>

          </div>
          <div  className={"card  c4"}>
            <img className={"card-img"} src={data[3].poster} />
            <span className="card-titles">{data[3].title}</span>
            <button onClick={() => { navigate("/show/" + data[3].title) }} className="btn card-btn">Read More.</button>

          </div>
          <div  className={"card  c5"}>
            <img className={"card-img"} src={data[4].poster} />
            <span className="card-titles">{data[4].title}</span>
            <button onClick={() => { navigate("/show/" + data[4].title) }} className="btn card-btn">Read More.</button>

          </div>
          <div  className={"card  c6"}>
            <img className={"card-img"} src={data[5].poster} />
            <span className="card-titles">{data[5].title}</span>
            <button onClick={() => { navigate("/show/" + data[5].title) }} className="btn card-btn">Read More.</button>

          </div>

          <div  className={"card  c7"}>
            <img className={"card-img"} src={data[6].poster} />
            <span className="card-titles">{data[6].title}</span>
            <button onClick={() => { navigate("/show/" + data[6].title) }} className="btn card-btn">Read More.</button>

          </div>

          <div  className={"card  c8"}>
            <img className={"card-img"} src={data[7].poster} />
            <span className="card-titles">{data[7].title}</span>
            <button onClick={() => { navigate("/show/" + data[7].title) }} className="btn card-btn">Read More.</button>

          </div>

        </Slider>
      </div>

    </div>
  );
}