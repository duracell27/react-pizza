import Axios from "axios"

export const fetchPizzas = () => (dispatch) => {
    Axios.get('http://localhost:3001/pizzas?_sort=price&_order=desc').then(({ data }) => {
      dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})