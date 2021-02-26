import React, { useEffect, useState } from 'react';
import { authenticate } from '../../services/auth';
import './UserDecks.css'

import {fetchUserDecks} from '../../services/decks';

const UserDecks = () => {

    const [loaded, setLoaded] = useState(false)
    const [returnedDecks, setReturnedDecks] = useState({})
    const [decklist, setDecklist] = useState('');
    let userId;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const deckClickHandler = (e) =>{
        const deckId = Number(e.target.value) - 2
        let textFormating = returnedDecks.decks[deckId].decklist
        textFormating = `        ${textFormating}`
        setDecklist(textFormating)
    }


    useEffect(() => {
        (async() => {
            const user = await authenticate();
            if (!user.errors){
                userId = user.id;
                let response = await fetchUserDecks(userId)
                setReturnedDecks(response);
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
                        return <li onClick={(e) => {deckClickHandler(e)}} value={deck.id} className={`${JSON.parse(deck.color)[getRandomInt(JSON.parse(deck.color).length)]}`}>{deck.name}</li>
                    }) : <li>Loading</li>}
                    <li className='Blue'>Mono Blue</li>
                    <li className='Black'>Mono Black</li>
                    <li className='White'>Mono White</li>
                    <li id='new-deck'>+</li>
                </ul>
            </div>
            <div id='deck-details'>
                    <div className='deck-form-container'>
                        <form id='deck-detail-form'>
                            <textarea disabled='disabled' value={decklist}>

                            </textarea>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default UserDecks;
