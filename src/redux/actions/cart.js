export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: pizzaObj 
})

export const clearCart = () => ({
    type: 'CLEAR_CART' 
})

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
})

export const onPlus = (id) => ({
    type: 'ON_PLUS',
    payload: id
})

export const onMinus = (id) => ({
    type: 'ON_MINUS',
    payload: id
})