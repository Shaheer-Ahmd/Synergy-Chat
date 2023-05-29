import React from 'react'
import { useState } from 'react'
import {ChannelContext} from './ChannelContext.jsx'
import Home from './pages/Home.jsx'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './index.css'
export default function App() {
  
  const [Channels, setChannels] = useState([]) // Array of Channels Objects. Channel Objects have a name and image and an array of Messages Objects. Messages Objects have a user, message, replies, and time . 
  const [ActiveChannel, setActiveChannel] = useState(0) // Index of the active channel in the Channels array.
  const [Replying, setReplying] = useState({
    status:false,
    replyto:0
  })
  return (
    <ChannelContext.Provider value = {{Channels,setChannels,ActiveChannel,setActiveChannel,Replying, setReplying}}>
      {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/signin" element = {<div className = "heading">signin</div>}/>
        <Route path = "/signup" element = {<div>signup</div>}/>
        <Route path = "/createchannel" element = {<div>createchannel</div>}/>
        <Route path = "*" element = {<div className = "heading">
          <h1 className="heading">Synergy</h1>
          404
          </div>}/>
      </Routes>
      </BrowserRouter>
      
    </ChannelContext.Provider>
  )
}
