import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {


  const [beers, setBeers] = useState('')
  const [vol, setVol] = useState([])
  const [des, setDes] = useState('')
  const [beerImg, setBeerImg] = useState([])

  const handleGenerator = () => {
      
      axios.get('https://api.punkapi.com/v2/beers/random')
      .then((res) => {
        console.log(res.data[0])
        setBeers(res.data[0].name)
        setVol(res.data[0].abv)
        setBeerImg(res.data[0].image_url)
        setDes(res.data[0].description)
      })


  }
  

  return (
    <div className="App">
      <h1>Random beer generator</h1>
      <button onClick={handleGenerator}> GENERATE YOUR BEER </button>
      <h2>{beers}</h2>
      <h3>Alc. {vol}% by Vol</h3>
      <div className='description'> 
      <p>{des}</p>
      </div>
      <div>
      <img className='beer-image' src={beerImg} alt={beers} />
      </div>

    </div>
  );
}

export default App;
