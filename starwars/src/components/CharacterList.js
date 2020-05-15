import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CharacterList = () =>{

    let [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(res => {
                console.log('setting chars')
                console.log(res.data.results)
                setCharacters(res.data.results) })
            .catch(err => { console.log("oops")} 
        )

    },[])

    let content = characters.map(char => <p key={char.id}>{char.name}{char.status}</p> );

    return(
        <div>{content}</div>
    )

}

export default CharacterList;
