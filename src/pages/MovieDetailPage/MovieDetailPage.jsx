import { useParams } from "react-router-dom";

function MovieDetailPage({ movies }) {
    let { movieName } = useParams();

    let params = movies.find((m) => m.title === movieName);

    return (
        <>
        <h1>Movie Detail Page</h1>
        <p>Title: {params.title}</p>
        <p>Release Date: {params.releaseDate}</p>
        <img src={`${params.posterPath}`} alt="" />
        <ul>
            {params.cast.map((actor) => {
                return <li key={actor}>{actor}</li>
            })}
        </ul>
        </>
    )
}

export default MovieDetailPage;