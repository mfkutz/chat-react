import { useEffect, useState } from "react"
import { auth, db } from "../firebase/config"
import { addDoc, collection, onSnapshot, query, serverTimestamp, where } from "firebase/firestore"
import EmojiPicker from 'emoji-picker-react';
import { RiSendPlane2Fill, RiCloseLine } from "react-icons/ri";
import messageSound from '../assets/sound.wav'

const SendMessage = () => {

    const [input, setInput] = useState('')
    const [open, setOpen] = useState('close')
    const [audio] = useState(new Audio(messageSound))
    const [messages, setMessages] = useState([])

    /* console.log(audio); */

    const playMessageSound = () => {
        audio.play();
    }

    //this line, clean input spaces on start and end line, them validate if empty, boolean result
    const isInputEntry = input.trim() === ''
    const isCurrentUser = auth.currentUser && auth.currentUser.uid
    console.log(isCurrentUser);


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

    useEffect(() => {
        const messagesQuery = query(collection(db, 'messages'), where('uid', '!=', auth.currentUser.uid));
        const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
            const newMessages = snapshot.docs.map((doc) => doc.data());
            setMessages(newMessages);
            playMessageSound();
        });

        return () => unsubscribe();
    }, []);

    return (

        <form onSubmit={sendMessage} className="bg-[--gitblackS] h-[40px] justify-evenly fixed bottom-0 flex ">
            <button
                type="button"
                className="close-emoji px-3 bg-gray-500"
                onClick={emoji}
            >
                😀
            </button>


            <div className={open}>
                <button
                    type="button"
                    className="text-white text-[20px]"
                    onClick={closeEmoji}
                >
                    <RiCloseLine className=""/>
                </button>
                <div className="left-0 bottom-10 absolute">
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                </div>
            </div>
            <input
                className="w-full px-2"
                type="text"
                placeholder="Enter you message here"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button
                disabled={isInputEntry}
                type="submit"
                className="px-3 bg-green-500"
            >
                <RiSendPlane2Fill />
            </button>
        </form>

    )
}

export default SendMessage