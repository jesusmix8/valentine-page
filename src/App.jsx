import { useState } from "react";
import "./App.css";

function App() {
  const [yesSize, setYesSize] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: "60%", left: "50%" });

  const moveNoButton = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setNoPosition({
      left: `${randomX}px`,
      top: `${randomY}px`
    });

    setYesSize(yesSize + 0.2);
  };

  const handleYes = () => {
    const sound = new Audio("/love.mp3");
    sound.volume = 0.8;
    sound.play();

    setAccepted(true);
  };

  if (accepted) {
    return (
      <div className="container">
        <p className="message">
          Sabía que dirías que sí 🥰<br />
          Te veo 13 de febrero 5:00 pm 💘
        </p>

        <img
          src="/foto.png"
          alt="Nosotros 💖"
          className="photo yes-photo"
        />
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">
        ¿Quieres ser mi<br /> San Valentine? 💘
      </h1>

      <button
        className="yes"
        style={{ transform: `scale(${yesSize})` }}
        onClick={handleYes}
      >
        Sí 💖
      </button>

      <button
        className="no"
        style={noPosition}
        onTouchStart={moveNoButton}
        onMouseEnter={moveNoButton}
      >
        No 💔
      </button>
    </div>
  );
}

export default App;
