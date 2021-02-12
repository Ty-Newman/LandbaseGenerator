import React, { useState } from 'react';
import './Generator.css'

import whiteSymbol from './mana-symbols/White_Mana.png'
import blueSymbol from './mana-symbols/Blue_Mana.png'
import blackSymbol from './mana-symbols/Black_Mana.png'
import redSymbol from './mana-symbols/Red_Mana.png'
import greenSymbol from './mana-symbols/Green_Mana.png'

const Generator = () => {

    const [white, setWhite] = useState(false);
    const [blue, setBlue] = useState(false);


    return(
        <div id='generator-wrapper'>
            <form id='g-form'>
                <div id='color-checkboxes'>
                    <input type='checkbox' id='white-selector' name='white-selector' value='white' onChange={() => white ? setWhite(false) : setWhite(true)}/>
                    <label htmlFor='white-selector'><img src={whiteSymbol} alt='mana_symbol' /></label>
                    <input type='checkbox' id='blue-selector' name='blue-selector' value='blue' onChange={() => blue ? setBlue(false) : setBlue(true)} />
                    <label htmlFor='blue-selector'><img src={blueSymbol} alt='mana_symbol' /></label>
                    <input type='checkbox' id='black-selector' name='black-selector' value='black' />
                    <label htmlFor='black-selector'><img src={blackSymbol} alt='mana_symbol' /></label>
                    <input type='checkbox' id='red-selector' name='red-selector' value='red' />
                    <label htmlFor='red-selector'><img src={redSymbol} alt='mana_symbol' /></label>
                    <input type='checkbox' id='green-selector' name='green-selector' value='green' />
                    <label htmlFor='green-selector'><img src={greenSymbol} alt='mana_symbol' /></label>
                </div>
                <div id='color-devotion'>
                    <input type='number' id='white-devotion' />
                    <input type='number' id='blue-devotion' />
                    <input type='number' id='black-devotion' />
                    <input type='number' id='red-devotion' />
                    <input type='number' id='green-devotion' />
                </div>

                <label htmlFor='num-of-lands'>Number of lands</label>
                <input type='text' id='number-of-lands' name='num-of-lands' />

                <label htmlFor='format'>Select your format</label>
                <select name='format' id='format-selector'>
                    <option value='standard'>Standard</option>
                    <option value='commander'>Commander</option>
                    <option value='modern'>Modern</option>
                </select>
                <button type='submit'>Generate</button>
            </form>
        </div>
    )
}

export default Generator;
