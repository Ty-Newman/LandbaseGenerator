import React, { useEffect } from 'react';
import { authenticate } from '../../services/auth';
// import './Home.css'

const UserDecks = () => {

    let userId;

    useEffect(() => {
        (async() => {
            const user = await authenticate();
            if (!user.errors){
                userId = user.id;
                console.log(userId);
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
