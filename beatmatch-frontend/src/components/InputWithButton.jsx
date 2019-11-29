import React, { useState } from 'react';
import { getAudioFeaturesForPlaylist } from "../utils/api";

const InputWithButton = props => {
    const [inputId, setInputId] = useState("");

    const handleInputChange = event => {
        setInputId(event.target.value)
    }

    const handleButtonClick = async event => {
        event.preventDefault();
        const res = await getAudioFeaturesForPlaylist(inputId);
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