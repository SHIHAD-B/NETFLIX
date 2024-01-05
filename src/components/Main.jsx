import { useEffect, useState } from "react"
import requests from "../request"
import axios from "axios"

export const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {

        axios.get(requests.PopularMovies).then((response) => {

            setMovies(response.data.results)
        })
    }, [])


    return (
        <div className="w-full h-[300px] md:h-[650px] text-white">
            <div className="w-full h-full ">
                <div className="absolute w-full h-[300px] md:h-[650px] bg-gradient-to-r from-black overflow-clip"></div>
                <div className=" h-[300px] md:h-[650px] overflow-clip"><img className="w-full  object-top" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} /></div>
                <div className="absolute w-full top-[8%] md:top-[45%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
                    <div className="my-4">
                        <button className="border bg-gray-300 text-black border-gray-300 px-5 h-8">Play</button>
                        <button className="border  text-white border-gray-300 px-5 ml-4 hover:bg-gray-300 hover:text-black  h-8">Watch Later</button>
                    </div>
                    <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{movie?.overview.length > 150 ? movie?.overview.slice(0, 150) + ".." : movie?.overview}</p>
                </div>
            </div>
        </div>
    )
}