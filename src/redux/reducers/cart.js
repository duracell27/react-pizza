const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {

    if (action.type === 'ADD_PIZZA_TO_CART') {
        const newItems = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id] 
            ? [action.payload] 
            : [...state.items[action.payload.id], action.payload],
        }
        const allPizzas = [].concat.apply([], Object.values(newItems))
        const totalPrice = allPizzas.reduce((sum , obj)=>obj.price + sum, 0)
        return {
            ...state,
            items: newItems,
            totalCount: allPizzas.length,
            totalPrice
        }
    }
    // if(action.type === 'SET_TOTAL_PRICE'){
    //     return {
    //         ...state,
    //         totalPrice: action.payload
    //     }
    // }
    // if(action.type === 'SET_TOTAL_COUNT'){
    //     return {
    //         ...state,
    //         totalCount: action.payload
    //     }
    // }
    return state
}

export default cart
