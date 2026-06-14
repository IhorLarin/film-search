import { createContext } from "react";
import type { Movie } from "../types";

type FavoritesContextType = {
    favorites: Movie[]
    addFavorite: (movie: Movie) => void
    removeFavorite: (imdbID: string) => void
    isFavorite: (imdbID: string) => boolean
}


export const FavoritesContext = createContext<FavoritesContextType | null>(null);


