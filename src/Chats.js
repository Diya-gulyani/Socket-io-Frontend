import React, { useEffect, useState } from 'react'

function Chats({Socket, username, room}) {
 const [currentMessage, setCurrentMessage] = useState("")


 const sendMessage = async () => {
    if (currentMessage !== "" ){
        const messageData = {
            room:room,
            author: username,
            message: currentMessage,
            time: new Date(Date.now()).getHours() + ":"+ new Date(Date.now()).getMinutes()
        }
        console.log(messageData)
        await Socket.emit("send", messageData)
    }

 }

useEffect(() => {
    Socket.on("receive_message", (data) => {
    console.log(data)
 }) 
}, [Socket])

  return (
    <div>
    <div className='chat-header'>
        <p>Live Chat</p>
    </div>
    <div className='chat-body'></div>
    <div className='chat-footer'>
        <input type="text" placeholder='Hey...'  onChange={(e) => setCurrentMessage(e.target.value)}/>
        <button onClick={sendMessage}>&#9658;</button>
    </div>
    </div>
  )
}

export default Chats