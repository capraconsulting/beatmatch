import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import yellow from '@material-ui/core/colors/yellow'
import brown from '@material-ui/core/colors/brown'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import purple from '@material-ui/core/colors/purple'
import grey from '@material-ui/core/colors/grey'
import lightBlue from '@material-ui/core/colors/lightBlue'
import deepOrange from '@material-ui/core/colors/deepOrange'
import lightGreen from '@material-ui/core/colors/lightBlue'
import { AudioFeatures } from '../types'

export const mapAudioFeatureToColor = (audioFeatureKey: keyof AudioFeatures): string => {
    const colorValue = 100
    const audioFeatureToColorMap = {
        'danceability': pink[colorValue],
        'energy': red[colorValue],
        'speechiness': yellow[colorValue],
        'acousticness': brown[colorValue],
        'instrumentalness': blue[colorValue],
        'liveness': green[colorValue],
        'valence': purple[colorValue],
        'mode': grey[colorValue],
        'time_signature': lightBlue[colorValue],
        'loudness': deepOrange[colorValue],
        'tempo': lightGreen[colorValue],
    }

    console.log('Returning color:', audioFeatureKey)

    return audioFeatureToColorMap[audioFeatureKey]
} 