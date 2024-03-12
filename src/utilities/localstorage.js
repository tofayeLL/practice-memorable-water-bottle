

const getStoredCart = () => {
    const isStored = localStorage.getItem('cart');
    if (isStored) {
        return JSON.parse(isStored);
    }
    return [];
}


const addCartItemToLs = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    saveItemToLs(cart);
}

const saveItemToLs = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}

const removeFromLs = (id) => {
   const cart = getStoredCart();
   const remaining = cart.filter(cartItemId => cartItemId !== id);
   saveItemToLs(remaining);
}

export { addCartItemToLs, getStoredCart, removeFromLs }