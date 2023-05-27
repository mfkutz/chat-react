import Chat from "./components/Chat"
import Header from "./components/Header"
import User from "./components/User"

function App() {

  return (
    <div className="flex bg-[--blackO] min-h-screen relative" >
      <Header />
      <User />
      <Chat />
    </div>
  )
}

export default App
