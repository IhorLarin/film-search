import { Heart } from "lucide-react";

import type { Movie } from "../types";
import { useFavorites } from "../hooks/useFavorites";

type MovieCardProps = {
    movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const favorite = isFavorite(movie.imdbID);

    const handleToggle = () => {
        if (favorite) {
            removeFavorite(movie.imdbID);
        } else {
            addFavorite(movie);
        }
    };

    return (
        <li className="relative flex flex-col bg-white rounded-xl shadow-md overflow-hidden">
            <button
                onClick={handleToggle}
                className="absolute top-2 right-2 w-10 h-10 z-10 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white transition"
            >
                {favorite ? (
                    <Heart className="w-6 h-6 fill-red-500 stroke-red-500" />
                ) : (
                    <Heart className="w-6 h-6 stroke-slate-600" />
                )}
            </button>
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
