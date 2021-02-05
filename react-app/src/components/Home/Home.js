import React from 'react';
import fiveLands from './5Lands.png';

const Home = () => {
    return(
        <div className='wrapper'>
            <h1>Landbase <br></br> Generator</h1>
            <img src={fiveLands} alt='all 5 colors of land' />
        </div>
    )
}

export default Home;
