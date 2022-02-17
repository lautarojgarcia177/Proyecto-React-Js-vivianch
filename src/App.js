import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemCount} from './components/ItemCount'


const onAdd= (count)=>{
  alert(`Se agregaron ${count} productos al carrito`);
}

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
     <NavBar/>
     <ItemListContainer greeting="HOLAAAA TUTOR"/>
     <ItemCount initial={1} stock={8} onAdd={onAdd}/>
     </header>
    </div>
    </React.Fragment>
  );
}

export default App;
