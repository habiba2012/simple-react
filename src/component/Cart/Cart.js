import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)

    const totalExpenses = cart.reduce((total, player)=> total + player.salary ,0)
  
    const cartStyle = {display: 'flex', flexDirection:"column"};
    const spanStyle = {color:"red"};
   
    return (
        <div style={cartStyle}>
            <h3 >Selected team list for BPL</h3>
            <h4>We have selected <span style={spanStyle}>{cart.length}</span> players. </h4>
            <p>Selected Player Name:{cart.name}</p>
            {
            cart.map(player => <li>{player.name}</li>)
            }
            <p>Total Expense {totalExpenses}</p>
            <p>player salary{cart.salary}</p>

        </div>
    );
};

export default Cart;