import Axios from "axios"

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})

export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false))
    Axios.get('http://localhost:3001/pizzas?_sort=price&_order=desc').then(({ data }) => {
        dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})