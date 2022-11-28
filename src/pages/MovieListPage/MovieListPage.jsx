import { movies } from "../../Data";
import MovieCard from "../../components/MovieCard/MovieCard";

function MovieListPage() {
    return (
        <>
        <h1>Movies List Page</h1>
        <div>
            {movies.map((movie, idx) => (
                <MovieCard movie={movie} key={idx} />
            ))}
        </div>
        </>
    )
}

export default MovieListPage;