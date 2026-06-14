import { Heart } from "lucide-react";

import { useFavorites } from "../hooks/useFavorites";

const Header = () => {
    const { favorites } = useFavorites();
    return (
        <header className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-slate-800">
                🎬 Film Search
            </h1>
            <div className="flex items-center gap-2 text-slate-600">
                <Heart className="w-5 h-5 fill-red-500 stroke-red-500" />
                <span className="font-semibold">{favorites.length}</span>
            </div>
        </header>
    );
};
export default Header;
