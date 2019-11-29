import React, { useState } from 'react'
import { Playlist } from '../types'
import { getAverageAudioFeaturesForPlaylist } from '../utils/api'

interface Props {
  setPlaylist: (playlist: Playlist) => void
  buttonText: React.ReactNode
}

const InputWithButton = (props: Props) => {
  const [inputId, setInputId] = useState('')

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setInputId(event.target.value)
  }

  const handleButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    props: Props
  ) => {
    event.preventDefault()
    const res = await getAverageAudioFeaturesForPlaylist(inputId)
    props.setPlaylist(res)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Playlist id"
        value={inputId}
        onChange={handleInputChange}
      />
      <button onClick={event => handleButtonClick(event, props)}>
        {props.buttonText}
      </button>
    </div>
  )
}

export default InputWithButton
