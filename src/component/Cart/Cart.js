import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    
    const totalExpenses = cart.reduce((total, player)=> total + player.salary ,0)
  
    const cartStyle = {display: 'flex', flexDirection:"column"};
    const spanStyle = {color:"red"};
    const textStyle = {marginTop:"10px", fontWeight:"bold", backgroundColor:"black", color:"white"}
   
    return (
        <div style={cartStyle}>
            <h4 className="text-left">Selected team list for BPL</h4>
            <h5 className="text-left">We have selected <span style={spanStyle}>{cart.length}</span> players. </h5>
            <h5 className="text-left text-info">Selected Player Name:{cart.name}</h5>
            {
            cart.map(player => <li className="list-group-item text-left">{player.name}  ------ Salary ${player.salary}</li>)
            }
            <p style={textStyle} className="text-left">Total Expense ${totalExpenses}</p>

        </div>
    );
};

export default Cart;