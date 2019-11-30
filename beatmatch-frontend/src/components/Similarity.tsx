import React, { useEffect } from 'react'
import { Playlist, Similarity as ISimilarity } from '../types'
import { getSimilarity } from '../utils/api'
import { Typography } from '@material-ui/core'
/**
 * TODO
 * two playlist ids
 * Show score
 * Update on playlist id change
 */

interface Props {
  playlist1: Playlist
  playlist2: Playlist
}

const Similarity = ({ playlist1, playlist2 }: Props) => {
  console.log(playlist1, playlist2)

  const [similarity, setSimilarity] = React.useState<ISimilarity | null>(null)
  const [isLoading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<Error | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await getSimilarity(
          playlist1.playlistInfo.id,
          playlist2.playlistInfo.id
        )
        setSimilarity(res)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [playlist1, playlist2])

  if (!similarity) return null

  return (
    <div>
      <Typography variant="h2">
        {Math.round(similarity.similarity * 100)}% match
      </Typography>
    </div>
  )
}

export default Similarity
