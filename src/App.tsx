import { useEffect, useState } from "react";
import "./App.css";
import type { Movie } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.Response === "True") {
                    setMovies(data.Search);
                }
            });
    }, []);

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <div className="max-w-5xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold mb-8 text-center text-slate-800">
                    🎬 Film Search
                </h1>
                <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {movies.map(movie => (
                        <li key={movie.imdbID} className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden">
                            <img
                                src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x450?text=No+Poster"}
                                alt={movie.Title}
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/300x450?text=No+Poster"
                                }}
                                className="w-full object-cover aspect-2/3"
                            />
                            <div className="p-3">
                                <p className="font-semibold text-sm leading-tight">{movie.Title}</p>
                                <p className="text-xs text-slate-400 mt-1">{movie.Year}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;
