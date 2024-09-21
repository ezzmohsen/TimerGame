import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [playerName, setEnteredPlayerName] = useState("");
  const inputPlayer = useRef();

  function handleClick() {
    setEnteredPlayerName(inputPlayer.current.value);
    inputPlayer.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input ref={inputPlayer} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
