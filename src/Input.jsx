import React from "react";
import "./index.css";
import { useState, useContext, useEffect } from "react";
import { ChannelContext } from "./ChannelContext.jsx";

export default function () {
  const [input, setinput] = useState("");
  function handlechange(event) {
    setinput(event.target.value);
  }
  const {
    Channels,
    setChannels,
    ActiveChannel,
    Replying,
    setReplying,
  } = useContext(ChannelContext);

  function newmsg() {
    // Time in AM PM format
    let time = new Date();
    // Update the messages array of the active channel using setChannels state update method.

    setChannels((prevChannels) =>
      prevChannels.map((channel, index) =>
        index === ActiveChannel
          ? {
              ...channel,
              messages: [
                ...channel.messages,
                {
                  user: "user",
                  text: input,
                  replies: [],
                  time:
                    time.getHours() > 12
                      ? `${time.getHours() - 12}:${time.getMinutes()} PM`
                      : `${time.getHours()}:${time.getMinutes()} AM`,
                },
              ],
            }
          : channel
      )
    );
    setinput("");
  }

  function newreply() {
    // Time in AM PM format
    let time = new Date();
    setChannels((prevChannels) =>
      prevChannels.map((channel, index) =>
        index === ActiveChannel
          ? {
              ...channel,
              messages: channel.messages.map((message, index2) =>
                index2 === Replying.replyto
                  ? {
                      ...message,
                      replies: [
                        ...message.replies,
                        {
                          user: "user",
                          text: input,
                          replies: [],
                          time:
                            time.getHours() > 12
                              ? `${
                                  time.getHours() - 12
                                }:${time.getMinutes()} PM`
                              : `${time.getHours()}:${time.getMinutes()} AM`,
                        },
                      ],
                    }
                  : message
              ),
            }
          : channel
      )
    );
    setinput("");
    setReplying((prevReplying) => ({
      ...prevReplying,
      status: !prevReplying.status,
    }));
  }
  function handleKeyDown(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      event.preventDefault();
      
      Replying.status ? newreply() : newmsg();
    }
  }
  console.log(Replying)
  return (
    <div className="input">
      <input
        type="text"
        onChange={handlechange}
        name="input"
        value={input}
        onKeyDown={handleKeyDown}
        placeholder="Type a message"
      />
      <button
        id="submit"
        className={ Replying.status ? "reply-btn":"btn"}
        onClick={Replying.status ? newreply : newmsg}
      >
        {Replying.status ? "Reply" : "Send"}
      </button>
    </div>
  );
}
