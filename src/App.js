import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chats from "./Chats";
const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUserName] = useState();
  const [room, setRoom] = useState();

  const joinRoom = () => {
    if (username !== "" && room !== "") socket.emit("join_room", room);
  };
  return (
    // <div className="App">
    //   <h3>Join A Chat</h3>
    //   <input
    //     type="text"
    //     placeholder="John...."
    //     onChange={(e) => setUserName(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Room Id"
    //     onChange={(e) => setRoom(e.target.value)}
    //   />

    //   <button onClick={joinRoom}>Submit</button>

    //   <Chats Socket={socket} username={username} room={room} />
    // </div>
  );
}

export default App;
