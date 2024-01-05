import { Navigate } from "react-router-dom"
import AuthUser from "../context/AuthContext"
import { useContext } from "react"

export const ProtectedAccount = ({ children }) => {
    const { user } = useContext(AuthUser)

    if (!user) {
        return <Navigate to='/' />
    } else {

        return children
    }
}