import React, { useEffect } from 'react';
import {Header} from './Components';
import {Home, Cart} from './Pages'
import { Route } from 'react-router-dom';
import Axios from 'axios';



function App() {

  const [pizzas, setPizzas] = React.useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3000/db.json').then(({data})=>{
      setPizzas(data.pizzas)
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path='/' render={()=> <Home pizzas={pizzas}/>} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
