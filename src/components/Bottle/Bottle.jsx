
import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img, price } = bottle;
    // console.log(bottle);

    return (
        <div className="bottle-container">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>purchase</button>

        </div>
    );
};

export default Bottle;