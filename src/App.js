import React, { useEffect } from 'react';
import { Header } from './Components';
import { Home, Cart } from './Pages'
import { Route } from 'react-router-dom';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas'
import pizzas from './redux/reducers/pizzas';



function App() {

  const dispatch = useDispatch()

  const {items, sortBy} = useSelector(state => {
    return {
      items: state.pizzas.items,
      sortBy: state.filters.sortBy
    }
  })
  

  useEffect(() => {
    Axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas))
    })
  }, [])
  debugger
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={() => <Home pizzas={[items]} />} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
