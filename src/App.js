import React, {useState, useEffect} from 'react';
import './App.css'
import fakeData from './fakeData/data.json'
import Player from './component/Player/Player';
import Cart from './component/Cart/Cart';

function App() {
  const[players, setPlayer] = useState([]);
  const[cart, setCart] = useState([]);
  
  useEffect(() => {
    setPlayer(fakeData )
  }, [])

  const addPlayerHandler = (player) => {
    const newCart = [...cart, player];
    setCart(newCart)
  }
  return (
    <div className="App">
      <h2>BPL Team Selection</h2>
    <h3 >Total player: {players.length}</h3>

     <div className="container-team">
     {fakeData.map(player => <Player player={player} addPlayerHandler={addPlayerHandler} key={player.id}></Player> )}
     </div>
     <div className="container-cart">
     <Cart cart={cart}/> 
     </div>
    </div>
  );
}

export default App;
