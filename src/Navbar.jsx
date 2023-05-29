import React from "react";
import Logo from "./assets/logo.png";
import plus from "./assets/plus.png";
import { useContext } from "react";
import { ChannelContext } from "./ChannelContext";

export default function () {
    const {Channels,setChannels,setActiveChannel,ActiveChannel} = useContext(ChannelContext)
    function newchannel() {
        const name = prompt("Enter Channel Name")
        // const image = prompt("Enter Channel Image URL")
        setChannels([...Channels,{name,messages:[]}])
    }
    const channel_imgs = Channels.map((channel,index) => <img src={Logo} className = {index === ActiveChannel ? "selected" : ""} onClick = {() => setActiveChannel(index)} alt={channel.name}/>)
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="channels">
        {channel_imgs}
      </div>
      <img src={plus} className="new-channel" alt="New Channel" onClick={newchannel} />
    </div>
  );
}
