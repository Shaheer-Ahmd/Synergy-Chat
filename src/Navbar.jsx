import React from "react";
import Logo from "./assets/logo.png";
import One from "./assets/channel_img/1.png";
import Two from "./assets/channel_img/2.png";
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
    //Change source of every other image to alternating one and two

    const channel_imgs = Channels.map((channel,index) => <img src={index%2===0 ? One: Two } className = {index === ActiveChannel ? "selected" : ""} onClick = {() => setActiveChannel(index)} alt={channel.name}/>)
  return (
    <div className="navbar">
      {/* <img src={Logo} alt="Logo" className="logo" /> */}
      <div className="channels">
        {channel_imgs}
      </div>
      <img src={plus} className="new-channel" alt="New Channel" onClick={newchannel} />
    </div>
  );
}
