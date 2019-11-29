import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import { getPlaylist } from '../utils/api'
import { Playlist } from '../types'

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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await getPlaylist(inputId)
    console.log('res', res)
    props.onClick(res)
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Playlist id"
        value={inputId}
        onChange={handleInputChange}
      />
      <Button type="submit">{props.buttonText}</Button>
    </form>
  )
}

export default InputWithButton
