import React, { useState } from "react";
import "./App.css";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "0px", left: "0px" });
  const [showProposal, setShowProposal] = useState(false); // Controla a visibilidade da proposta

  const handleNoHover = () => {
    const randomTop = Math.floor(Math.random() * 300 - 150) + "px";
    const randomLeft = Math.floor(Math.random() * 300 - 150) + "px";
    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 20; i++) {
      hearts.push(<div key={i} className="floating-heart">❤️</div>);
    }
    return hearts;
  };

  return (
    <div className="container">
      {accepted && <div className="hearts-container">{renderHearts()}</div>}
      {!accepted ? (
        <>
          <div className="poem">
            <p>
              Nos olhos teus, verde Rebecca,<br />
              Olhar pra eles é ver Saturno<br />
              E cada órbita que a ti me apega.<br />
              Em teu olhar, me perco no fundo.<br /><br />
              
              Brilham teus olhos como luas ternas,<br />
              Que dançam livres no anel mais puro,<br />
              E em cada volta assim eternas,<br />
              Sinto-me como estivesse seguro.<br /><br />

              Saturno inveja o teu verde encanto,<br />
              Pois nem seus anéis de tanto reluz,<br />
              Tocam-me a alma com tão doce manto.<br /><br />

              És meu planeta, estrela e luz,<br />
              Rebecca, em ti meu amor é tanto,<br />
              És melodia que ao sonho seduz.
            </p>
          </div>

          {!showProposal && (
            <button className="reveal-proposal" onClick={() => setShowProposal(true)}>...</button>
          )}

          {showProposal && (
            <div className="proposal">
              <h2>Quer namorar comigo?</h2>
              <div className="buttons">
                <button className="yes" onClick={() => setAccepted(true)}>Sim 💖</button>
                <button
                  className="no"
                  onMouseEnter={handleNoHover}
                  style={{ position: "relative", top: noButtonPosition.top, left: noButtonPosition.left }}
                >
                  Não 😢
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="accept-message">
          <h1>Te amo!</h1>
          <div className="heart">❤️</div>
        </div>
      )}
    </div>
  );
}

export default App;
