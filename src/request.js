const API_KEY = '8c254dad99758b8f6ca8087caaeaad34'
const baseUrl = 'https://api.themoviedb.org/3/'

const requests = {
    PopularMovies: `${baseUrl}movie/popular?api_key=${API_KEY}`,
    TopRatedMovies: `${baseUrl}movie/top_rated?api_key=${API_KEY}`,
    NowPlayingMovies: `${baseUrl}movie/now_playing?api_key=${API_KEY}`,
    UpcomingMovies: `${baseUrl}movie/upcoming?api_key=${API_KEY}`,
    AnimatedMovies: `${baseUrl}movie/popular?api_key=${API_KEY}&with_genres=16`,
    ComedyMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=35`,
    ActionMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`,
    ScienceAndFiction: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=878`,
    AdventuresMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=12`,
    CrimeMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=80`,
    DocumentaryMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=99`,
    DramaMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=18`,
    FantasyMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=14`,
    HorrorMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10749`,
    ThrilledMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=53`,
    WarMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10752`,

};

export default requests;