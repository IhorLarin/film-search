import { type ReactNode } from "react";
import { FavoritesContext } from "./FavoritesContext";
import type { Movie } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage.ts";

type FavoritesProviderProps = {
    children: ReactNode
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
    const [favorites, setFavorites] = useLocalStorage<Movie[]>("favorites", []);

    const addFavorite = (movie: Movie) => {
        setFavorites(prev => [...prev, movie]);
    };

    const removeFavorite = (imdbID: string) => {
        setFavorites(prev => prev.filter(movie => movie.imdbID !== imdbID));
    };

    const isFavorite = (imdbID: string) => {
        return favorites.some(movie => movie.imdbID === imdbID);
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, isFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}
