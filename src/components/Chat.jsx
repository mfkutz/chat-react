import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { auth, db } from "../firebase/config"
import Messages from "./Messages"
import SendMessage from "./SendMessage"
import { useAuthState } from "react-firebase-hooks/auth"


const Chat = () => {
    //IN THIS ARRAY WILL BE SAVE ALL MESSAGES
    const [messages, setMessages] = useState([])
    const [user] = useAuthState(auth)


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
    },[])

    return (


        <section>

            {
                messages && messages.map(item => (
                    <Messages
                        key={item.id}
                        message={item.content}
                    />
                ))
            }
            {user && <SendMessage /> }
            
        </section>
    )
}

export default Chat