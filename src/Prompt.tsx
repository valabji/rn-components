import React, { useState } from 'react'
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { promptStore } from './redux'
import LoadingButton from './LoadingButton'
import { t } from './language/engine'

export function prompt({ title,okText, onConfirm = () => {} }) {
  promptStore.dispatch({ type: 'prompt', obj: { title,okText, visible: true } })

  const unsub = promptStore.subscribe(() => {
    if (promptStore.getState().obj.visible == false) {
      unsub()
    if (promptStore.getState().obj.confirmed == true) {
        onConfirm()
    }
    }
  })
}

export function Container() {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [okText, setOkText] = useState('')
  promptStore.subscribe(() => {
    if (!visible) {
      if (promptStore.getState().obj.visible == true) {
        setTitle(promptStore.getState().obj.title)
        setOkText(promptStore.getState().obj.okText)
        setVisible(true)
      }
    }
  })
  const close = (confirmed=false) => {
    setVisible(!visible)
    promptStore.dispatch({ type: 'prompt', obj: { visible: false,confirmed } })
  }
  return (
    <Modal
      visible={visible}
      style={{ margin: 0 }}
      animationType="fade"
      transparent={true}
      onRequestClose={()=>{close()}}
    >
      <TouchableOpacity
        onPress={() => {
          close()
        }}
        style={{ justifyContent: 'center',backgroundColor:"#ccc9" ,height: '100%' }}
      >
        <TouchableWithoutFeedback>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "#fff",
              marginLeft: 10,
              marginRight: 10,
              padding:30,
            }}
          >
            <Text
            style={{
                fontFamily:t('regular'),
                textAlign:t('left')
            }}
            >{title}</Text>
            <LoadingButton
              text={okText}
              onClick={() => {
                close(true)
              }}
              style={{ marginTop: 20 }}
            />
            <LoadingButton
              text={t('Cancel')}
              backgroundColor={"#fff"}
              textColor={"#000"}
              onClick={() => {
                close()
              }}
              style={{ marginTop: 20, borderWidth: 1 }}
            />
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  )
}
