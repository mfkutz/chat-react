import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { auth } from "../firebase/config"



const Login = () => {

   
    //tengo que ver esto bien
    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    return (
        <button
            className="border "
            onClick={googleLogin}

        >
            Sing in with google
        </button>
    )
}

export default Login