import React, { useState } from 'react';
import './Generator.css'

import whiteSymbol from './mana-symbols/White_Mana.png'
import blueSymbol from './mana-symbols/Blue_Mana.png'
import blackSymbol from './mana-symbols/Black_Mana.png'
import redSymbol from './mana-symbols/Red_Mana.png'
import greenSymbol from './mana-symbols/Green_Mana.png'

import { fetchGenerate } from '../../services/generate'


const Generator = () => {

    const [white, setWhite] = useState(false);
    const [blue, setBlue] = useState(false);
    const [black, setBlack] = useState(false);
    const [red, setRed] = useState(false);
    const [green, setGreen] = useState(false);

    const [whiteDevotion, setWhiteDevotion] = useState('');
    const [blueDevotion, setBlueDevotion] = useState('');
    const [blackDevotion, setBlackDevotion] = useState('');
    const [redDevotion, setRedDevotion] = useState('');
    const [greenDevotion, setGreenDevotion] = useState('');

    const [numOfLands, setNumOfLands] = useState('');
    const [format, setFormat] = useState('standard');
    const [hiddenOrNah, setHiddenOrNah] = useState('generator-results-hidden')
    const [generatedLands, setGeneratedLands] = useState('')

    const resetHandler = () => {
        setWhite(false);
        setBlue(false);
        setBlack(false);
        setRed(false);
        setGreen(false);

        setWhiteDevotion('');
        setBlueDevotion('');
        setBlackDevotion('');
        setRedDevotion('');
        setGreenDevotion('');

        setNumOfLands('');
        setFormat('standard');
        setHiddenOrNah('generator-results-hidden')
        setGeneratedLands('')
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        let colors = []

        if (white) colors.push('white');
        if (blue) colors.push('blue');
        if (black) colors.push('black');
        if (red) colors.push('red');
        if (green) colors.push('green');

        let payload = {
            colors: colors,
            white: whiteDevotion,
            blue: blueDevotion,
            black: blackDevotion,
            red: redDevotion,
            green: greenDevotion,
            numOfLands: numOfLands,
            format: format
        }

        const response = await fetchGenerate(payload)

        let displayText = ''
        response.colors.forEach((color) => {
            switch(color){
                case 'white':
                    displayText += `${response[color]} Plain \n`;
                    break;
                case 'blue':
                    displayText += `${response[color]} Island \n`;
                    break;
                case 'black':
                    displayText += `${response[color]} Swamp \n`;
                    break;
                case 'red':
                    displayText += `${response[color]} Mountain \n`;
                    break;
                case 'green':
                    displayText += `${response[color]} Forest \n`;
                    break;
            }
        });

        setHiddenOrNah('generator-results-not-hidden');
        setGeneratedLands(displayText);
    }

    return(
        <div id='generator-wrapper'>
            <form id='g-form' onSubmit={(e) => submitHandler(e)} action={''} method={'POST'} >
                <div id='color-checkboxes'>
                    <input type='checkbox' id='white-selector' name='white-selector' value='white' onChange={() => white ? setWhite(false) : setWhite(true)}/>
                    <label htmlFor='white-selector'><img src={whiteSymbol} alt='mana_symbol' /></label>
                    <input type='checkbox' id='blue-selector' name='blue-selector' value='blue' onChange={() => blue ? setBlue(false) : setBlue(true)}/>
                    <label htmlFor='blue-selector'><img src={blueSymbol} alt='mana_symbol' /></label>
                    <input type='checkbox' id='black-selector' name='black-selector' value='black' onChange={() => black ? setBlack(false) : setBlack(true)}/>
                    <label htmlFor='black-selector'><img src={blackSymbol} alt='mana_symbol' /></label>
                    <input type='checkbox' id='red-selector' name='red-selector' value='red' onChange={() => red ? setRed(false) : setRed(true)}/>
                    <label htmlFor='red-selector'><img src={redSymbol} alt='mana_symbol' /></label>
                    <input type='checkbox' id='green-selector' name='green-selector' value='green' onChange={() => green ? setGreen(false) : setGreen(true)}/>
                    <label htmlFor='green-selector'><img src={greenSymbol} alt='mana_symbol' /></label>
                </div>
                <div id='color-devotion'>
                    <input type='number' id='white-devotion' disabled={!white} onChange={(e) => setWhiteDevotion(e.target.value)} />
                    <input type='number' id='blue-devotion' disabled={!blue} onChange={(e) => setBlueDevotion(e.target.value)} />
                    <input type='number' id='black-devotion' disabled={!black} onChange={(e) => setBlackDevotion(e.target.value)} />
                    <input type='number' id='red-devotion' disabled={!red} onChange={(e) => setRedDevotion(e.target.value)} />
                    <input type='number' id='green-devotion' disabled={!green} onChange={(e) => setGreenDevotion(e.target.value)} />
                </div>

                <div id='form-bottom-generator'>
                    <div id='num-lands-container'>
                        <label htmlFor='num-of-lands'>Number of lands</label>
                        <input type='text' id='number-of-lands' name='num-of-lands' onChange={(e) => setNumOfLands(e.target.value)} />
                    </div>

                    <div id='format-container'>
                        <label htmlFor='format'>Select your format</label>
                        <select name='format' id='format-selector' onChange={(e) => setFormat(e.target.value)}>
                            <option value='standard'>Standard</option>
                            <option value='commander'>Commander</option>
                            <option value='modern'>Modern</option>
                        </select>
                    </div>
                    <button type='submit'>Generate</button>
                </div>
                    <textarea className={hiddenOrNah} value={generatedLands}></textarea>
                    <button type='reset' className={hiddenOrNah} onClick={() => resetHandler()}>Clear</button>

            </form>
        </div>
    )
}

export default Generator;
