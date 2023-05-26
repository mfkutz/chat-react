import { useState } from "react"
import { auth, db } from "../firebase/config"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import EmojiPicker from 'emoji-picker-react';



const SendMessage = () => {
    const [input, setInput] = useState('')
    const [open, setOpen] = useState('close')


    const sendMessage = async (e) => {
        e.preventDefault()
        const { uid, displayName, photoURL } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            photo: photoURL,
            timestamp: serverTimestamp()
        })
        setInput("")
    }


    const emoji = () => {
        setOpen('open')
    }
    const closeEmoji = () => {
        setOpen('close')
    }

    const onEmojiClick = (event, emojiObject) => {
       
        setInput(`${input}${event.emoji}`)
    }


    return (
        <form onSubmit={sendMessage}>
            <button
                type="button"
                className="close-emoji"
                onClick={emoji}
            >
                😀
            </button>


            <div className={open}>
                <button
                    type="button"
                    className=""
                    onClick={closeEmoji}
                >
                    close
                </button>
                <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
            <input
                type="text"
                placeholder="Enter you message here"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button
                type="submit"
            >
                Send
            </button>
        </form>
    )
}

export default SendMessage