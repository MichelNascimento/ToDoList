import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import AddToDo from './Components/AddToDo/AddToDo';
import ItensToDos from './Components/ItemToDo/ItemToDo';

function App() {
  return (
    <>
      <Header />
      <div id="AppContainer">
        <AddToDo />
        <ItensToDos />
      </div>
    </>
  );
}

export default App;
