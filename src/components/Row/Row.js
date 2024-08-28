import axios from "../../helpers/axios";
import React, { useEffect, useState } from 'react';
import "./Row.css";

const Row = ({ title, fetchUrl, isLarge = false }) => {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results || []); // Ensure movies is always an array
                return request;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    ((isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path)) && (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLarge && "row__posterLarge"}`}
                            src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
                ))}
            </div>
        </div>
    );
}

export default Row;
