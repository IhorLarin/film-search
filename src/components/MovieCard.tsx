import type { Movie } from "../types";

type MovieCardProps = {
    movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <li className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden">
            <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x450?text=No+Poster"}
                alt={movie.Title}
                onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/300x450?text=No+Poster";
                }}
                className="w-full object-cover aspect-2/3"
            />
            <div className="p-3">
                <p className="font-semibold text-sm leading-tight">{movie.Title}</p>
                <p className="text-xs text-slate-400 mt-1">{movie.Year}</p>
            </div>
        </li>
    );
};
export default MovieCard;
