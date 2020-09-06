import React from 'react'

import {Categories, SortPopup, PizzaBlock} from '../Components';

function Home({pizzas}) {
    return (
        <div className="container">
        <div className="content__top">
          <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
          <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {pizzas.map((pizza)=>(
                    <PizzaBlock key={pizza.id} {...pizza}/>
                ))
            }
         </div> 
      </div>

    )
}

export default Home
