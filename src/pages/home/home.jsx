import React, { useEffect, useState } from "react";
import "./home.css"

import Cards from "../../Components/card/card";
import MovieList from "../../Components/movieList/movieList";

const Home = () => {

    const [poplularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/person/popular?api_key=6042589a11a3e37903a7f1d2f73e296f")
            .then(res => res.json())
            // .then(data => setPopularMovies(data.results))
            .then(data => setPopularMovies(data.results))
    }, []);

    return (
        <>
            <MovieList />
        </>
    )
};
export default Home