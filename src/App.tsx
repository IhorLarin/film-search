import { useState } from "react";

import type { OmdbResponse } from "./types";

import { useFetch } from "./hooks/useFetch.ts";
import { useDebounce } from "./hooks/useDebounce";

import SearchInput from "./components/SearchInput";
import MovieCard from "./components/MovieCard";

const API_KEY = import.meta.env.VITE_API_KEY;
const DEFAULT_QUERY = "avengers";

function App() {
    const [query, setQuery] = useState("");

    const debouncedQuery = useDebounce(query, 500);
    const searchQuery = debouncedQuery.trim() || DEFAULT_QUERY

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchQuery)}`;
    const { data, loading, error } = useFetch<OmdbResponse>(url);

    const errorMessage = error || (data?.Response === "False" ? data.Error : null);

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <div className="max-w-5xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold mb-8 text-center text-slate-800">
                    🎬 Film Search
                </h1>

                <SearchInput query={query} onChange={setQuery} />

                {loading && (
                    <p className="text-center text-slate-500 mb-4">Loading...</p>
                )}

                {errorMessage && (
                    <p className="text-center text-red-500 mb-4">{errorMessage}</p>
                )}

                <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {data?.Search?.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
