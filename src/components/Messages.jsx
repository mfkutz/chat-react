import { auth } from "../firebase/config";
import { formatDate } from "./helpers";


const Messages = ({ message }) => {

    let newStyle = 'message';
    if (auth.currentUser) {
        const user = auth.currentUser.uid
        const newUser = message.uid
        newStyle = user === newUser ? 'my-message' : 'message'
    }
   


    return (
        <article className={newStyle}>
            <div>
                <div className="flex gap-2">
                    <p>{message.text}</p>
                </div>
                <p>{formatDate(message.timestamp)}</p>
            </div>
            <img src={message.photo} alt="user foto" referrerPolicy="no-referrer" />
        </article>
    )
}

export default Messages