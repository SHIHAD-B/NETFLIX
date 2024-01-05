import { FaHeart, FaRegHeart } from 'react-icons/fa'
import AuthUser from "../context/AuthContext"
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useContext, useState } from 'react'

export const Movies = ({ item, like }) => {
    const [likes, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = useContext(AuthUser)


    const movieID = doc(db, 'users', `${user?.email}`)
    const saveShow = async () => {
        if (user?.email) {
            setLike(!likes)
            setSaved(!saved)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
            alert(" saved movie")
        } else {
            alert("please login to save a movie")
        }
    }
    return (
        < div className="w-[160px] sm:w-[200px] md:w-[280px] lg:w-[280px] inline-block cursor-pointer relative p-2" >
            <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title} />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">{item?.title}</p>
                <p onClick={saveShow}>
                    {likes ? <FaHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" />}
                </p>
            </div>
        </div>
    )
}