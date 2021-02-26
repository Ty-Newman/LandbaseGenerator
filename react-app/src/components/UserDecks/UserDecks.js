import React, { useEffect } from 'react';
import { authenticate } from '../../services/auth';
// import './Home.css'

import {fetchUserDecks} from '../../services/decks';

const UserDecks = () => {

    let userId;
    let returnedDecks;

    useEffect(() => {
        (async() => {
            const user = await authenticate();
            if (!user.errors){
                userId = user.id;
                returnedDecks = await fetchUserDecks(userId)
                console.log(returnedDecks);
            }
        })();
    }, []);

    return(
        <div id='decks-wrapper'>
            <div id='deck-select'>

            </div>
            <div id='deck-details'>

            </div>
        </div>
    )
}

export default UserDecks;
