import React from 'react';
import fiveLands from './5Lands.png';
import './Home.css'

const Home = () => {
    return(
        <div className='wrapper'>
            <div id='home-header-div'>
                <h1 id='splash-header'>Landbase <br></br> Generator</h1>
            </div>
            <div id='home-img-div'>
                <img src={fiveLands} alt='all 5 colors of land' id='five-lands' />
            </div>
        </div>
    )
}

export default Home;
