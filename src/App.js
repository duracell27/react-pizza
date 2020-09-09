import React, { useEffect } from 'react';
import { Header } from './Components';
import { Home, Cart } from './Pages'
import { Route } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    Axios.get('http://localhost:3001/pizzas?_sort=price&_order=desc').then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
