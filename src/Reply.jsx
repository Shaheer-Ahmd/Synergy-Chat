import React from "react";
import { useContext } from "react";
import { ChannelContext } from "./ChannelContext.jsx";


export default function Reply({ text, time, user, id }) {
  const { Channels, setChannels,ActiveChannel, Replying, setReplying } = useContext(
    ChannelContext
  );

  return (
    <div className="message">
      <div className="msg-header">
        <div className="username">{user}</div>
        <div className="time">{time}</div>
      </div>
      <p className="msg-text">{text}</p>
    </div>
  );
}
