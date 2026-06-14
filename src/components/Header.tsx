import FavoritesList from "./FavoritesList.tsx";

const Header = () => {
    return (
        <header className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-slate-800">
                🎬 Film Search
            </h1>
            <FavoritesList />

        </header>
    );
};
export default Header;
