import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { auth } from "../firebase/config"
import { RiGoogleFill } from "react-icons/ri";

const Login = () => {

    //tengo que ver esto bien
    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect(auth, provider)
    }

    return (
        <div className="flex items-center justify-center pt-3">
            <button
                className=" flex justify-center items-center border py-2 px-3 border-[--black] rounded-md"
                onClick={googleLogin}
            >
                <RiGoogleFill />
            </button>
        </div>
    )
}

export default Login