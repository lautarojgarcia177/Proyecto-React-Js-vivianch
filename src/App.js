import logo from './logo.svg';
import './App.css';
import React from 'react';
import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <header className="App-header">
     <NavBar/>
     <ItemListContainer greeting="HOLAAAA TUTOR"/>
     </header>
    </div>
    </React.Fragment>
  );
}

export default App;
