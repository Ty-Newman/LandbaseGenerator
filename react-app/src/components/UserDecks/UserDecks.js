import React, { useEffect, useState } from 'react';
import { authenticate } from '../../services/auth';
import './UserDecks.css'

import {fetchUserDecks} from '../../services/decks';

const UserDecks = () => {

    const [loaded, setLoaded] = useState(false)
    const [returnedDecks, setReturnedDecks] = useState({})
    let userId;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }


    useEffect(() => {
        (async() => {
            const user = await authenticate();
            if (!user.errors){
                userId = user.id;
                let response = await fetchUserDecks(userId)
                setReturnedDecks(response);
                console.log(JSON.parse(response.decks[0].color))
            }
            setLoaded(true);
        })();
    }, []);

    if (!loaded){
        return null
    }

    return(
        <div id='decks-wrapper'>
            <div id='deck-select'>
                <ul>
                    {loaded ? returnedDecks.decks.map((deck) => {
                        return <li className={`${JSON.parse(deck.color)[getRandomInt(JSON.parse(deck.color).length)]}`}>{deck.name}</li>
                    }) : <li>Loading</li>}
                    <li className='Blue'>Mono Blue</li>
                    <li className='Black'>Mono Black</li>
                    <li className='White'>Mono White</li>
                    <li id='new-deck'>+</li>
                </ul>
            </div>
            <div id='deck-details'>

            </div>
        </div>
    )
}

export default UserDecks;
