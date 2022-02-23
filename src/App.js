import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';



/*const onAdd= (count)=>{
  alert(`Se agregaron ${count} productos al carrito`);
  <ItemCount initial={1} stock={8} onAdd={onAdd}/>
}*/

function App() {
  return (
    <React.Fragment>
      <div>
      <header>
     <NavBar/>
     </header>
     <ItemListContainer/>
     </div>
    </React.Fragment>
  );
}

export default App;
