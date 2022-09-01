import React from 'react';
import {Carousel} from "../Carasouls/Carousel";

const Top10Movies=()=> {
    const data=[
        {
            id:1,
            poster:"https://cdnb.artstation.com/p/assets/images/images/026/756/249/large/andrey-pankov-mifallout.jpg?1589636503",
            title:"Mission Impossible Fallout"
        },
        {
            id:2,
            poster:"https://www.mmppicture.co.in/wp-content/uploads/2020/12/Scam-1992-Background-The-Harshad-Mehta-Story.jpg",
            title:"Scam 1992: The Harshad Mehta Story"
        },
        {
            id:3,
            poster:"https://image.tmdb.org/t/p/original/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
            title:"Justice League"
        },
        {
            id:4,
            poster:"https://m.media-amazon.com/images/M/MV5BM2ZkOTZmNTYtMWFmZi00MmY1LTkxZjgtNWViNjE3ZmU0YWJhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
            title:"Forensic (2020)"
        },
        {
            id:5,
            poster:"https://image.tmdb.org/t/p/original/gG7N8hvj3LwbdSFZ6NealucfH0h.jpg",
            title:"Ghost Rider: Spirit of Vengeance"
        },
        {
            id:6,
            poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/badla-et00077951-19-06-2018-10-46-53.jpg",
            title:"Badla"
        },
        {
            id:7,
            poster:"https://m.media-amazon.com/images/M/MV5BYzNiYTkyZjgtODRmNC00ZTc0LWIzZDgtODYyZWIwMTNhZjhiXkEyXkFqcGdeQXVyMTE0MzY0NjE1._V1_.jpg",
            title:"Asur: Welcome to Your Dark Side"
        },
        {   id:8,
            poster:"https://static.toiimg.com/photo/71753285.cms",
            title:"Bypass Road"

        }
    ];
    const Actiondata=[
        {
            id:1,
            poster:"https://cdnb.artstation.com/p/assets/images/images/021/662/693/large/hari-krish-terminator-4.jpg?1572495555",
            title:"Terminator: Dark Fate"
        },
        {
            id:2,
            poster:"https://c8.alamy.com/comp/2E8WGTN/robert-pattinson-in-the-batman-2022-directed-by-matt-reeves-credit-dc-entertainmentwarner-bros-album-2E8WGTN.jpg",
            title:"The Batman"
        },
        {
            id:3,
            poster:"https://www.gamespot.com/a/uploads/original/1557/15576725/3611048-nttd_danielcraig.jpg",
            title:"No Time to Die"
        },
        {
            id:4,
            poster:"https://image.tmdb.org/t/p/original/jwqL7croP7JMVfz0l9o7V4yJsJO.jpg",
            title:"Mission: Impossible - Rogue Nation"
        },
        {
            id:5,
            poster:"https://image.tmdb.org/t/p/original/gG7N8hvj3LwbdSFZ6NealucfH0h.jpg",
            title:"Ghost Rider: Spirit of Vengeance"
        },
        {
            id:6,
            poster:"https://www.moviesnewsfeed.com/thumb/1x1/images/article/karthikeya-2-movie-review-this-mystical-adventure-engages-despite-its-shortcomings-main.webp",
            title:"Karthikeya 2"
        },
        {
            id:7,
            poster:"https://movieposters2.com/images/642965-b.jpg",
            title:"Minority Report"
        },
        {   id:8,
            poster:"https://static.toiimg.com/photo/71753285.cms",
            title:"Bypass Road"

        }
    ];
    return (
        <div>
            {
                <Carousel data={data} title={"TOP Collections"} time={4000} isAuto={true}></Carousel>
            }
            {
                <Carousel data={Actiondata} title={"TOP ACTION MOVIES"} time={5000} isAuto={false}></Carousel>
            }
            
        </div>
    );
}

export default Top10Movies;