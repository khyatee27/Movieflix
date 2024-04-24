import { useEffect, useState } from 'react';
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Components/header/header';
import Home from './pages/home/home'
import MovieList from './Components/movieList/movieList'
import Movie from './Components/movieDetail/movieDetail';
import SignUp from './Components/signUp/signUp';
//  6042589a11a3e37903a7f1d2f73e296f  API KEY For TMDB Movie
//  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDQyNTg5YTExYTNlMzc5MDNhN2YxZDJmNzNlMjk2ZiIsInN1YiI6IjY2MjBlYTI5N2EzYzUyMDE2NDRiZjliYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0BPwsLEoepxxN45g858K2bfM-SVEDNq4xIrcgoeyZoI


//https://api.themoviedb.org/3/discover/movie?api_key= 6042589a11a3e37903a7f1d2f73e296f  API to fetch data
//read token


function App() {


  /* const getMovieRequest = async () => {
     const url = "https://api.themoviedb.org/3/discover/movie?api_key= 6042589a11a3e37903a7f1d2f73e296f"
     const response = fetch(url);
     const responsejson = await response.json(); //convert into json
     console.log(responsejson);
 
   };
   useEffect(() => {
     getMovieRequest();
   }, [])*/

  //<MovieList movies={movies} />
  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type/movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="movies/signUp" element={<SignUp />}></Route>
          <Route path="/Movieflix" element={<Movie />}></Route>
          <Route path="/*" element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App
