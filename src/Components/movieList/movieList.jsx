import React, { useEffect, useState } from "react";
import Cards from "../card/card"
import "./movieList.css"
import { useParams } from "react-router-dom";

const MovieList = () => {
    console.log("Movielist function is called")
    const [movieList, setmovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {

        getData()

    }, []);

    useEffect(() => {
        getData()
    }, [type]);

    const getData = () => {
        console.log("function get data called")
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=6042589a11a3e37903a7f1d2f73e296f`)
            .then(res => res.json())
            .then(data => setmovieList(data.results))
        //.then(data => console.log(data.results))
    };

    return (
        <div className="movie_list">
            <h2 className="list_title">{(type ? type : "popular").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    );
};
export default MovieList