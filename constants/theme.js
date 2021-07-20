import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import { responsiveFontSize } from 'react-native-responsive-dimensions'

export const COLORS = {
  // base colors
  // primary: '#FC6D3F', // orange
  primary: '#13051A', // green
  // primary: '#BD5BDF', // purple
  // primary: '#765BDF', // blue
  secondary: '#FEFBE1', // gray

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#F2EFCF',
  red: '#FA3E3E',
  green: '#23BD0A',
  yellow: '#FDB426',
  //   lightGray2: '#F6F6F7',
  //   lightGray3: '#EFEFF1',
  //   lightGray4: '#F8F8F9',
  transparent: 'transparent',
  darkgray: '#463A4E',
}

export const SIZES = {
  width,
  height,
}

const appTheme = { COLORS, SIZES }
