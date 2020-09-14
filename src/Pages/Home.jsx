import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadinkBlock } from '../Components';
import { addPizzaToCart } from '../redux/actions/cart';
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const items = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortBy=[{ name: 'популярности', type: 'popular' },
                { name: 'цене', type: 'price' },
                { name: 'алфавиту', type: 'alphabet' }]

function Home() {
    const { pizzas, isLoaded, category, sortByRedux, cartItems } = useSelector(state => {
        return {
            pizzas: state.pizzas.items,
            isLoaded: state.pizzas.isLoaded,
            category: state.filters.category,
            sortByRedux: state.filters.sortBy,
            cartItems: state.cart.items,
        }
    })

    const dispatch = useDispatch()

    const onSelectItem = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortBy = React.useCallback((name) => {
        dispatch(setSortBy(name))
    }, [])

    React.useEffect(() => {
        // if(!pizzas.length){}


        dispatch(fetchPizzas(category, sortByRedux))
    }, [category, sortByRedux])

    const addPizza = obj => {
       dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeItem={category} onClickItem={onSelectItem} items={items} />
                <SortPopup activeSortType={sortByRedux} onSelectSortBy={onSelectSortBy} items={sortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? pizzas.map((pizza) => <PizzaBlock inCartItems={cartItems[pizza.id] && cartItems[pizza.id].items.length} onAddPizza={addPizza} key={pizza.id}  {...pizza}/>) : Array(10).fill(0).map((_, index)=><PizzaLoadinkBlock key={index} />)}
            </div>
        </div>

    )
}

export default Home
