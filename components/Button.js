import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default Button = ({ onPress, style, text, backgroundColor, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.button, { backgroundColor }]}
    ><Text style={[style.buttonText, { color }]}>{text}</Text>
    </TouchableOpacity>
  )
}