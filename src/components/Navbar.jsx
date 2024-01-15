import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import logo from '../assets/logos/Netflix_Logo_CMYK.png'
export const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full top-0 left-0 absolute">
            <Link to='/'>
                <img className="w-32 md:w-44" src={logo}alt="" />
            </Link>
            {user?.email ? <div>
                <Link to='/account'>
                    <button className="text-white pr-4">Account</button>
                </Link>

                <button onClick={handleLogout} className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer">Logout</button>


            </div> :
                <div>
                    <Link to='/login'>
                        <button className="text-white pr-4">Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className="text-white bg-red-600 px-6 py-2 rounded cursor-pointer">Sign Up</button>

                    </Link>
                </div>
            }
        </div>
    )

}
