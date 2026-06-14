import type { Movie } from "../types";

import MovieCard from "./MovieCard";

type MovieListProps = {
    movies: Movie[]
}

const MovieList = ({ movies }: MovieListProps) => {
    return (
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {movies.map(movie => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </ul>
    );
};
export default MovieList;
