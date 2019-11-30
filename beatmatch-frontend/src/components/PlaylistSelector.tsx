import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { getPlaylist } from '../utils/api'
import { Playlist } from '../types'

interface Props {
  onSelect: (playlist: Playlist) => void
  buttonText: React.ReactNode
}

const PlaylistSelector = (props: Props) => {
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
    props.onSelect(res)
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        margin="dense"
        variant="outlined"
        placeholder="Playlist id"
        value={inputId}
        onChange={handleInputChange}
      />
      <Button type="submit">{props.buttonText}</Button>
    </form>
  )
}

export default PlaylistSelector
