import { Card } from './components/Card';
import { key } from '../secret';
import { useEffect, useState } from 'react';

function App() {
  const [url, setUrl] = useState('');

  // get image
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}`)
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.data[3].images.downsized.url);
      });
  }, []);

  return <Card url={url} />;
}

export default App;
