const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {

    if (action.type === 'ADD_PIZZA_TO_CART') {
        return {
            ...state,
            items: {
                [action.payload.id]: [
                    ...state.items,
                    action.payload
                ]
            }
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
