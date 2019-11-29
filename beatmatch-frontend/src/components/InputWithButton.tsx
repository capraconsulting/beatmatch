import React, { useState } from 'react'
import { getAudioFeaturesForPlaylist } from '../utils/api'
import { Playlist } from '../types'

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
    const res = await getAudioFeaturesForPlaylist(inputId)
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
