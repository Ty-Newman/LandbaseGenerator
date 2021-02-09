import React from 'react';
import './Generator.css'

import whiteSymbol from './mana-symbols/White_Mana.png'
import blueSymbol from './mana-symbols/Blue_Mana.png'
import blackSymbol from './mana-symbols/Black_Mana.png'
import redSymbol from './mana-symbols/Red_Mana.png'
import greenSymbol from './mana-symbols/Green_Mana.png'

const Generator = () => {
    return(
        <div id='generator-wrapper'>
            <form id='g-form'>
                <div id='color-checkboxes'>
                    <input type='checkbox' id='white-selector' name='white-selector' value='white' />
                    <label for='white-selector'><img src={whiteSymbol} /></label>
                    <input type='checkbox' id='blue-selector' name='blue-selector' value='blue' />
                    <label for='blue-selector'><img src={blueSymbol} /></label>
                    <input type='checkbox' id='black-selector' name='black-selector' value='black' />
                    <label for='black-selector'><img src={blackSymbol} /></label>
                    <input type='checkbox' id='red-selector' name='red-selector' value='red' />
                    <label for='red-selector'><img src={redSymbol} /></label>
                    <input type='checkbox' id='green-selector' name='green-selector' value='green' />
                    <label for='green-selector'><img src={greenSymbol} /></label>
                </div>
                <div id='color-devotion'>
                    <input type='text' id='white-devotion' />
                    <input type='text' id='blue-devotion' />
                    <input type='text' id='black-devotion' />
                    <input type='text' id='red-devotion' />
                    <input type='text' id='green-devotion' />
                </div>

                <label for='num-of-lands'>Number of lands</label>
                <input type='text' id='number-of-lands' name='num-of-lands' />

                <label for='format'>Select your format</label>
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
