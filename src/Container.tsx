import * as React from 'react'
import { View, Text } from 'react-native'
import { Container } from './Prompt'
import { configStore } from './redux'

const baseConfig = {
  colors: {
    tabIconDefault: '#ccc',
    gray: '#3C3C4399',
    BGray: '#f5f5f5',
    BYellow: '#FFE29D',
    DYellow: '#D1955E',
    BBGreen: '#defffb',
    BGreen: '#003C34',
    DGreen: '#002520',
    BBlue: '#E7EFF5',
    DBlue: '#0071BC',
    BLACK: '#000',
    WHITE: '#FFF',
    GREEN: '#00A99D',
    RED: '#DD1C1D',
  },
  fonts: {
    regular: '',
    bold: '',
    black: '',
  },
}
export default ({ config = baseConfig }) => {
  configStore.dispatch({ type: 'change', obj: config })
  return (
    <View>
      <Text>Testing 123</Text>
      <Container />
    </View>
  )
}
