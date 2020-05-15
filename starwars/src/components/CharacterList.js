import React, {useState, useEffect} from 'react'
import { TextField, Grid } from '@material-ui/core'
import Character from './Character'
import axios from 'axios'

//filter character api url (returns all characters without a querey parameter)
const apiURL = 'https://rickandmortyapi.com/api/character/?name='

const CharacterList = () =>{
    //storing what the api filters back to us here
    let [characters, setCharacters] = useState([]);
    //storing the user querey here. (this is the querey parameter needed for the aip filter)
    let [searchString, setSearchString] = useState('');

    //sidereffect make network requests on querey state update
    useEffect(() => {
        
        axios.get(`${apiURL} + ${searchString}`)
        .then(res => { setCharacters(res.data.results) })
        .catch(err => { console.log("uhhh rickkkk?")} )

    },[searchString])

    //this function is called Onchange of the "Textfield" element (when the user types or deletes in the searchbar)
    function onSearchInput(e){
        //event? Yes? Set querey to whats in the search box. No? Set querey to nothing
         e 
         ? setSearchString(e.target.value)
         : setSearchString('');
         console.log(`search input detected`)

    }
    // if characters array is not empty build a grid for cards to be placed in and send each character in array over to 'character' as props
    return(

        <div>
           
            {characters !== [] ? ( 

                <div>

                    <TextField style={{padding: 24}}
                        id="searchInput"
                        placeholder="Search for Characters"
                        margin="normal"
                        onChange={onSearchInput} />

                    <Grid container spacing={1} style={{padding: 24}}>

                        {characters.map(char => (

                            <Grid item xs={12} sm={6} lg={4} xl={3} key={char.id} >

                                <Character char={char} key={char.name} />

                            </Grid>

                        ))}

                    </Grid>

                </div>
            
            ) : "Nothing , Zilch, Nadaaaaa!" }

        </div>
    )
}
export default CharacterList;
