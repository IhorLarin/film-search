import { Heart } from "lucide-react";

import { useFavorites } from "../hooks/useFavorites";
import { useState, useEffect, useRef } from "react";

const FavoritesList = () => {
    const { favorites } = useFavorites();
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
            >
                <Heart className="w-5 h-5 fill-red-500 stroke-red-500" />
                <span className="font-semibold">{favorites.length}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 max-h-96 overflow-y-auto bg-white rounded-xl shadow-lg p-3 z-20">
                    {favorites.length === 0 ? (
                        <p className="text-center text-slate-400 py-4">No favorites yet</p>
                    ) : (
                        <ul className="flex flex-col gap-2">
                            {favorites.map(movie => (
                                <li key={movie.imdbID} className="flex gap-2 items-center">
                                    <img
                                        src={movie.Poster !== "N/A" ? movie.Poster : "..."}
                                        alt={movie.Title}
                                        className="w-10 h-14 object-cover rounded"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">{movie.Title}</p>
                                        <p className="text-xs text-slate-400">{movie.Year}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};
export default FavoritesList;
