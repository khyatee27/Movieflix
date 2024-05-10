import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <Link
      to={`movie/${movie.id}`}
      className="card-link"
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/original${
            movie ? movie.poster_path : ""
          }`}
          alt="image not found"
        />
        <div className="card-overlay">
          <div className="card-content">
            <h2 className="card-title">{movie ? movie.original_title : ""}</h2>
            <div className="card-details">
              <p className="card-runtime">{movie ? movie.release_date : ""}</p>
              <p className="card-rating">
                <i className="fas fa-star"></i>
                {movie ? movie.vote_average : ""}
              </p>
            </div>
            <p className="card-description">
              {movie ? movie.overview + "..." : ""}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
