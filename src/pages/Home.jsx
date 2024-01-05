import { Main } from "../components/Main"
import { Row } from "../components/Row"
import requests from "../request"
export const Home = () => {
    return (
        <>
            <Main />
            <Row rowID='1' title='Up Comming' fetchURL={requests.UpcomingMovies} />
            <Row rowID='2' title='Top Rated Movies' fetchURL={requests.TopRatedMovies} />
            <Row rowID='3' title='Now Playing Movies' fetchURL={requests.NowPlayingMovies} />
            <Row rowID='4' title='Animated Movies' fetchURL={requests.AnimatedMovies} />
            <Row rowID='5' title='Comedy Movies' fetchURL={requests.ComedyMovies} />
            <Row rowID='6' title='Action Movies' fetchURL={requests.ActionMovies} />
            <Row rowID='7' title='Science And Fiction' fetchURL={requests.ScienceAndFiction} />
            <Row rowID='8' title='Popular Movies' fetchURL={requests.PopularMovies} />
            <Row rowID='9' title='Adventures Movies' fetchURL={requests.AdventuresMovies} />
            <Row rowID='10' title='Crime Movies' fetchURL={requests.CrimeMovies} />
            <Row rowID='11' title='Documentary Movies' fetchURL={requests.DocumentaryMovies} />
            <Row rowID='12' title='Drama Movies' fetchURL={requests.DramaMovies} />
            <Row rowID='13' title='Fantasy Movies' fetchURL={requests.FantasyMovies} />
            <Row rowID='14' title='Horror Movies' fetchURL={requests.HorrorMovies} />
            <Row rowID='15' title='Romance Movies' fetchURL={requests.RomanceMovies} />
            <Row rowID='16' title='Thrilled Movies' fetchURL={requests.ThrilledMovies} />
            <Row rowID='17' title='WarMovies' fetchURL={requests.WarMovies} />


        </>
    )
}