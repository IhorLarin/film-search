type SearchInputProps = {
    query: string
    onChange: (value: string) => void
}

function SearchInput({ query, onChange }: SearchInputProps) {
    return (
        <input
            type="text"
            value={query}
            onChange={e => onChange(e.target.value)}
            placeholder="Search films..."
            className="w-full max-w-md mx-auto block mb-8 px-4 py-2 rounded-lg border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    );
}

export default SearchInput;
