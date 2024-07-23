import { useState } from 'react';
import React from 'react';
import luffy from './images/luffy.png';
import zoro from './images/zoro.png';
import sanji from './images/sanji.png';
import usopp from './images/usopp.png';
import nami from './images/nami.png';
import robin from './images/robin.png';
import chopper from './images/chopper.png';
import franky from './images/franky.png';
import jinbe from './images/jinbe.png';
import brook from './images/brook.png';
import './styles/styles.css';

function App() {
  const [images, setImages] = useState([
    { imgUrl: luffy, id: '1' },
    { imgUrl: zoro, id: '2' },
    { imgUrl: sanji, id: '3' },
    { imgUrl: usopp, id: '4' },
    { imgUrl: nami, id: '5' },
    { imgUrl: robin, id: '6' },
    { imgUrl: brook, id: '7' },
    { imgUrl: franky, id: '8' },
    { imgUrl: jinbe, id: '9' },
    { imgUrl: chopper, id: '10' },
    ,
  ]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentCard, setCurrentCard] = useState('');
  const [gameOver, setGameOver] = useState(false);

  // Randomize images
  function shuffleArray(imgArr) {
    for (let i = imgArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = imgArr[i];
      imgArr[i] = imgArr[j];
      imgArr[j] = temp;
    }
    return imgArr;
  }

  // Check if the same card was clicked twice in a row
  function cardCheck(card) {
    if (card === currentCard) {
      setScore(0);
      setGameOver(true);
    } else {
      setScore((currentScore) => currentScore + 1);

      if (score == highScore) {
        setHighScore((currentScore) => currentScore + 1);
      }
    }
  }

  if (gameOver) {
    return (
      <div className="game-over">
        <h2>Game Over </h2>
        <p>
          Best Score: <span> {highScore}</span>
        </p>
        <button onClick={() => setGameOver(false)}>Play again</button>
      </div>
    );
  }

  return (
    <>
      <h1>Memory Card</h1>

      <div className="heading-container">
        <div>
          <p id="hint">Dont pick the same card twice!</p>
        </div>
        <div>
          <p>
            Score: <span>{score}</span>
          </p>
          <p>
            Highscore: <span> {highScore}</span>
          </p>
        </div>
      </div>

      <div className="gif-container">
        {images.map((img) => {
          {
            if (img === undefined) return;
          }
          return (
            <div
              key={img.id}
              onClick={(e) => {
                setCurrentCard(e.target);
                cardCheck(e.target);
                setImages([...shuffleArray(images)]);
              }}
            >
              <img src={img.imgUrl} className="gif-card" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
