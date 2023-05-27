import LogOut from "./LogOut"
import Login from "./Login"
import { auth } from "../firebase/config"
import { useAuthState } from "react-firebase-hooks/auth"


const User = () => {

    //vemos quien esta logueado
    const [user] = useAuthState(auth)
    const image = user ? user.photoURL : "/userImg.png"
    const name = user ? user.displayName : "User"

    return (
        <div className="bg-[--blackS] fixed top-0 left-0 max-w-[80px] min-h-screen z-20 border-r border-gray-500">
            <h1 className="flex pt-2 text-white text-[12px] justify-center">MKChat</h1>
            <article className="">
                <img className="p-2" src={image} alt="user photo" referrerPolicy="no-referrer"/>
                <p className="text-white text-[12px] flex justify-center text-center">{name}</p>
                {user ? <LogOut /> : <Login />}
            </article>
        </div>
    )
}

export default User


