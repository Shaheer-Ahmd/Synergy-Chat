import React from 'react'
import Navbar from '../Navbar.jsx'
import Messages from '../Messages.jsx'
import Input from '../Input.jsx'
import { useContext } from 'react'
import {ChannelContext} from '../ChannelContext.jsx'
import '../index.css'

export default function Home() {
    const {Channels,setChannels,ActiveChannel,setActiveChannel,Replying, setReplying} = useContext(ChannelContext)
  return (
    <div>
    <Navbar/>
      {Channels.length>0 ?  <Messages/> : <div style = {{textAlign:'center', color:'white',fontWeight:'900'}} className = "heading no-channel">No Channels</div>}
      <Input/>
    </div>
  )
}
