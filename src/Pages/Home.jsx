import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../Components';
import { setCategory } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

const items = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortBy=[{ name: 'популярности', type: 'popular' },
                { name: 'цене', type: 'price' },
                { name: 'алфавиту', type: 'alphabet' }]

function Home() {
    const { pizzas } = useSelector(state => {
        return {
            pizzas: state.pizzas.items
        }
    })

    const dispatch = useDispatch()

    const onSelectItem = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    React.useEffect(() => {
        // if(!pizzas.length){}

        
        dispatch(fetchPizzas())
    }, [])

    

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectItem} items={items} />
                <SortPopup items={sortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas && pizzas.map((pizza) => (
                    <PizzaBlock key={pizza.id} {...pizza} />
                ))
                }
            </div>
        </div>

    )
}

export default Home
