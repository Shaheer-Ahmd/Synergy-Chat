import React from 'react'
import { useContext } from 'react'
import {ChannelContext} from './ChannelContext.jsx'
import Logo from './assets/logo.png'
import Message from './Message.jsx'
export default function Messages() {
    const {Channels,setChannels,ActiveChannel} = useContext(ChannelContext)
   // render Message component for each message in the active channel.
    const messages_rendered = Channels[ActiveChannel].messages.map((message,index) => <Message key = {index} id = {index} text = {message.text} time = {message.time} replies = {message.replies} user = {message.user}/>)
    return (
    <div className="messages">
      <h1 className = "heading">{Channels[ActiveChannel].name}</h1>
      {messages_rendered}
    </div>
  )
}
