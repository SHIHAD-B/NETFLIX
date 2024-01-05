import axios from "axios"
import { useEffect, useState } from "react"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import { Movies } from "./Movies"
export const Row = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([])
    const [like, setLike] = useState(false)

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })

    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 700;


    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 700;

    }




    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block" size={40} />
                <div id={'slider' + rowID} className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
                    {movies.map((item, id) => {

                        return (
                            <Movies item={item} key={id} like={like} />
                        )
                    })}
                </div>
                <MdChevronRight id='slideRightButton' onClick={slideRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block" size={40} />
            </div >
        </>
    )
}