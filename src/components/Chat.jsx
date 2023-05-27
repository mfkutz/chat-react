import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useRef, useState } from "react"
import { auth, db } from "../firebase/config"
import Messages from "./Messages"
import SendMessage from "./SendMessage"
import { useAuthState } from "react-firebase-hooks/auth"


const Chat = () => {
    //IN THIS ARRAY WILL BE SAVE ALL MESSAGES
    const [messages, setMessages] = useState([])
    const [user] = useAuthState(auth)
    const chatRef = useRef(null)


    useEffect(() => {
        //con esta query recuperamos todos los mensajes de la base de datos
        const newQuery = query(collection(db, 'messages'), orderBy('timestamp'))

        //La funcion onSnapshot nos recupera la base de datos en el estado actual (actualiza automaticamente)
        const unSuscribe = onSnapshot(newQuery, (querySnapShot) => {
            let currentMessages = [];
            querySnapShot.forEach(item => {
                currentMessages.push({ content: item.data(), id: item.id })
            })
            setMessages(currentMessages)
        })
        return unSuscribe
    }, [])

    useEffect(() => {
        // Ajustar el desplazamiento al contenido más reciente
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages]);

    return (
        <section
            ref={chatRef}
            className="relative mt-[76px] mb-11 ml-[84px] w-full mr-1 h-screen overflow-y-auto rounded-xl rounded-b-none z-0">
            {
                messages && messages.map(item => (
                    <Messages
                        key={item.id}
                        message={item.content}
                    />
                ))
            }
            {user && <SendMessage />}
        </section>
    )
}
export default Chat