import React from 'react';
import { useState,useEffect } from "react";
import "./SearchBar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SearchBar(props) {
        const [value, setValue] = useState("");
        const [data,setData] = useState([]);
        let navigate = useNavigate();
        useEffect(() => {
            axios.get(`http://localhost:8080/shows/allShowsName`)
            .then(response=>{
                setData(response.data);
            })
            .catch(err=>{
                console.log(err);
            })
          }, []);

        const onChange = (event) => {
            setValue(event.target.value);
        };
        
        const onSearch = (searchTerm) => {
            navigate("/show/" + searchTerm);
        };

    return (
        <div className="Search">
            <div className="search-container">
                <div className="search-inner">
                    <input type="text" value={value} onChange={onChange} />
                    <button className="button" onClick={() => onSearch(value)}> Search </button>
                </div>
                <div className="dropdown">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.full_name.toLowerCase();

                            return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.full_name)}
                                className="dropdown-row"
                                key={item.full_name}
                            >
                                {item.full_name}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;