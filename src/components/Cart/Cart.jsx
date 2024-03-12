
import './Cart.css'
const Cart = ({ cart, handleRemove }) => {

    return (
      

        <div className="cart-container">
              <h3>cart: {cart.length}</h3>

            
            {
                cart.map(bottle => 
                <div className='cart-content'>
                    <img src={bottle.img}></img>
                    <button onClick={() => handleRemove(bottle.id)}>remove</button>
                </div>)
            }

        </div>
    );
};

export default Cart;