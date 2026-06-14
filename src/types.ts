export type Movie = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
};

export type OmdbResponse = {
    Search?: Movie[]
    totalResults?: string
    Response: "True" | "False"
    Error?: string
}
