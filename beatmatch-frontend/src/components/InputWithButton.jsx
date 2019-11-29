import React, { useState } from 'react';

const InputWithButton = props => {
    const [inputId, setInputId] = useState("");

    const handleInputChange = event => {
        setInputId(event.target.value)
    }

    const handleButtonClick = event => {
        console.log(inputId)
    }

    return (
        <div>
            <input 
                type="text"
                placeholder="Playlist id"
                value={inputId}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>{props.buttonText}</button>
        </div>
    )
}

export default InputWithButton;