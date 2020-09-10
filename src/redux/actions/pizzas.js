import Axios from "axios"

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})

export const fetchPizzas = (category, sortByRedux) => (dispatch) => {
    dispatch(setLoaded(false))
    switch(sortByRedux){
        case 'популярности': sortByRedux = 'popular'; break;
        case 'цене': sortByRedux = 'price'; break;
        case 'алфавиту': sortByRedux = 'name'; break;
      } 
    Axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortByRedux}&_order=desc`).then(({ data }) => {
        dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})