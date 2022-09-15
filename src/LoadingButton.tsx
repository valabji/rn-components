import React, { useState } from 'react'
import { ActivityIndicator,TouchableOpacity, Text } from 'react-native'
import Colors from './Colors'
import styles, { SIZES } from './Style'
import { t } from './language/engine'

export default function LoadingButton(props) {
  const {
    onClick = async () => {},
    text,
    isLoading = false,
    backgroundColor = Colors["DBlue"],
    textColor = Colors["WHITE"],
  } = props
  const [loading, setLoading] = useState(isLoading)
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.signin, { backgroundColor,...props.style }]}
      onPress={async () => {
        if(!loading){
          setLoading(true)
          await onClick()
          setLoading(false)
        }
      }}
    >
      {loading ? (
        <ActivityIndicator size={SIZES.FONT * 1.2} color={textColor} />
      ) : (
        <Text style={[styles.signinLabel, { color: textColor,fontFamily:t("regular") }]}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}
