import { Card } from './components/Card';
import { key } from '../secret';
import { useEffect, useState } from 'react';
import React from 'react';
import luffy from './luffy.png';
import zoro from './zoro.png';
import sanji from './sanji.png';

function App() {
  const [url, setUrl] = useState('');
  const [images, setImages] = useState([
    { imgUrl: luffy, id: '1' },
    { imgUrl: zoro, id: '2' },
    { imgUrl: sanji, id: '4' },
    ,
  ]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentCard, setCurrentCard] = useState('');
  const [gameOver, setGameOver] = useState(false);

  // get image
  // useEffect(() => {
  //   fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUrl(data.data[2].images.downsized.url);
  //     });
  // }, []);

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
      <>
        <h2>Game Over </h2>
        <p>Best Score: {highScore}</p>
        <button onClick={() => setGameOver(false)}>Play again</button>
      </>
    );
  }

  return (
    <>
      <h1>Memory Card</h1>
      <p>Dont pick the same card twice!</p>
      {images.map((img) => {
        {
          if (img === undefined) return;
        }
        return (
          <div
            key={img.id}
            className="gif-container"
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
      <h2>Score: {score}</h2>
      <h2>Highscore: {highScore}</h2>
    </>
  );
}

export default App;
