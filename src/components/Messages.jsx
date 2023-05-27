import { auth } from "../firebase/config";
import { formatDate } from "./helpers";


const Messages = ({ message }) => {

    let newStyle = 'message';
    if (auth.currentUser) {
        const user = auth.currentUser.uid
        const newUser = message.uid
        newStyle = user === newUser ? 'my-message' : 'message'
    }


    console.log(message.name);

    return (
        <div className="">
            <div className="flex gap-1">
                <img className="max-w-[30px] rounded-full " src={message.photo} alt="user foto" referrerPolicy="no-referrer" />
                <div>
                    <p className="text-white text-[10px]">{message.name}</p>
                    <p className="text-[8px] text-white">{formatDate(message.timestamp)}</p>

                </div>
            </div>
            <div className={`${newStyle}`}>
                <article >
                    <div>
                        <div className={`prueba ${newStyle} rounded-md px-2`}>
                            <p>{message.text}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Messages