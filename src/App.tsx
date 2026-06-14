import { useState } from "react";

import type { OmdbResponse } from "./types";

import { useFetch } from "./hooks/useFetch.ts";
import { useDebounce } from "./hooks/useDebounce";

import SearchInput from "./components/SearchInput";
import MovieList from "./components/MovieList";
import StatusMessage from "./components/StatusMessage";
import Header from "./components/Header";

const API_KEY = import.meta.env.VITE_API_KEY;
const DEFAULT_QUERY = "avengers";

function App() {
    const [query, setQuery] = useState("");

    const debouncedQuery = useDebounce(query, 500);
    const searchQuery = debouncedQuery.trim() || DEFAULT_QUERY

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchQuery)}`;
    const { data, loading, error } = useFetch<OmdbResponse>(url);

    const omdbError = data?.Response === "False" ? data.Error ?? null : null
    const errorMessage = error || omdbError

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <div className="max-w-5xl mx-auto px-4 py-10">
                <Header />

                <SearchInput query={query} onChange={setQuery} />

                <StatusMessage loading={loading} error={errorMessage} />

                <MovieList movies={data?.Search ?? []} />

            </div>
        </div>
    );
}

export default App;
