import LogOut from "./LogOut"
import Login from "./Login"
import { auth } from "../firebase/config"
import { useAuthState } from "react-firebase-hooks/auth"



const User = () => {

    //vemos quien esta logueado
    const [user] = useAuthState(auth)
    const image = user ? user.photoURL : "/userImg.png"
    const name = user ? user.displayName : "Name User"

    return (
        <div>
            <h1>QuickChat</h1>
            <article>
                <img src={image} alt="user photo" referrerPolicy="no-referrer"/>
                <p>{name}</p>
                {user ? <LogOut /> : <Login />}
            </article>

        </div>
    )
}

export default User