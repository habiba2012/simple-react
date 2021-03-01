import './App.css';
import React, {useState, useEffect} from 'react';
import './App.css'
import fakeData from './fakeData/data.json'
import Team from './component/Team/Team';
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
      <h2>BPL Cricket tournament Selection</h2>
    <h3 >Total player: {players.length}</h3>

     <div className="container-team">
     {fakeData.map(player => <Team player={player} addPlayerHandler={addPlayerHandler} key={player.id}></Team> )}
     </div>
     <div className="container-cart">
     <Cart cart={cart}/> 
     </div>
    </div>
  );
}

export default App;
