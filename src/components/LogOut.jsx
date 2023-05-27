import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { RiCloseCircleLine } from "react-icons/ri";


const LogOut = () => {

    const logOut = () => {
        signOut(auth)
    }
    return (
        <div className="item-center justify-center text-center mt-6 ">
           {/*  <div className="text-[12px] text-white">
                Close
            </div>
            <div className="text-[12px] text-white">
                Session
            </div> */}
            <button
                className="bg-red-600 px-4 py-2 rounded-lg text-[20px] mt-2 "
                onClick={logOut}
            >
                <RiCloseCircleLine />
            </button>
        </div>
    )
}

export default LogOut