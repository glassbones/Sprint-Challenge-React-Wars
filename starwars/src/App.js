import React from 'react';
import CharacterList from "./components/CharacterList"
import './App.css';



const App = () => {
   
    return (

        <div className="App">

          <h1 className="Header">Rick and Morty!</h1>
          <CharacterList />
          
        </div>
    )
}

export default App