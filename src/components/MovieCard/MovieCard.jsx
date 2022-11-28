import { Link } from "react-router-dom";

function MovieCard( {movie }) {
    return (  
        <Link to={`/movies/${movie.title}`}>
            <div
            style={{
                width: "400px",
                height: "400px",
                display: "inline-block",
                margin: "32px",
                backgroundImage: `url(${movie.posterPath})`
            }}>
                <div className="movie-title">
                    <h1>{movie.title}</h1>
                    <h3>{movie.release_date}</h3>
                </div>
            </div>
        </Link>
    );
}

export default MovieCard;