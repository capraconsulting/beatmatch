import React, { useState } from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { getAudioFeaturesForPlaylist } from '../utils/api'
import { Playlist } from '../types'
import { getAverageAudioFeaturesForPlaylist } from '../utils/api'

interface Props {
  onClick: (playlist: Playlist) => void
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
    props.onClick(res)
  }

  return (
    <div>
      <Input
        placeholder="Playlist id"
        value={inputId}
        onChange={handleInputChange}
      />
      <Button onClick={event => handleButtonClick(event, props)}>
        {props.buttonText}
      </Button>
    </div>
  )
}

export default InputWithButton
