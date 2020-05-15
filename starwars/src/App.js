import React from 'react';
import Navbar from './components/Navbar'
import CharacterList from './components/CharacterList'
import './App.css';

/////////////////////////////////////////////////////////////////
//                                                             //
//  WARNING! As of now an API request is instantly sent every  //
//  time the character search bar is changed (single keypress) //
//                                                             //
/////////////////////////////////////////////////////////////////

const App = () => 
(
    <div>

      <Navbar />

      <CharacterList />
      
    </div>
)

export default App;