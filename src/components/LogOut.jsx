import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"


const LogOut = () => {

    const logOut = () => {
        signOut(auth)
    }


    return (
        <button
            className="bg-red-500"
            onClick={logOut}

        >
            logout
        </button>
    )
}

export default LogOut