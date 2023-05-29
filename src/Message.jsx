import React from "react";
import { useContext } from "react";
import { ChannelContext } from "./ChannelContext.jsx";
import Reply from "./Reply.jsx";
import reply_arrow from "./assets/reply_arrow.png";

export default function Message({ text, time, user, id, replies}) {
  const { Channels, setChannels,ActiveChannel, Replying, setReplying } = useContext(
    ChannelContext
  );
  const replies_rendered = replies.length>0 ? replies.map((reply, index) => <Reply text={reply.text} time={reply.time} id = {id} key = {id} user={reply.user} />) : <></>;
    function setReplybtn(){
        setReplying((prevReplying) => ({
            status: true,
            replyto: id,
            }))
        }
  return (
    <div className="message">
      <div className="msg-header">
        <div className="username">{user}</div>
        <div className="time">{time}</div>
        <img src = {reply_arrow} onClick={setReplybtn} className="reply-arrow" />
        <div
          className="reply"
          onClick={setReplybtn}
        >
          Reply
        </div>
      </div>
      <p className="msg-text">{text}</p>
      <div className="replies">
          {replies_rendered}
      </div>
    </div>
  );
}
