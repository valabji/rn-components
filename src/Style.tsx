import React from 'react'
import { StyleSheet } from 'react-native'
import { t } from './language/engine'
import Colors from './Colors'
import Layout from './Layout'

export const SIZES = {
  BASE: 6,
  FONT: 12,
  TITLE: 20,
  PADDING: 12,
}
const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.BASE * 4,
    paddingTop:0,
  },
  input: {
    borderColor: Colors["BLACK"],
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    padding: 10,
    color: Colors["BLACK"],
    fontSize: SIZES.FONT,
    paddingVertical: SIZES.PADDING * 0.5,
  },
  inputContainer: {
    marginBottom: SIZES.PADDING * 1,
  },

  facebookbtn: {
    // backgroundColor: Colors["WHITE"],
    // width: 150,
    // padding: 20,
    borderRadius: 5,
    height: 60,
    marginTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },

  facebooklabel: {
    color: Colors["BLACK"],
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  signinLabel: {
    fontFamily: t('regular'),
    color: Colors["WHITE"],
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  title: {
    color: Colors["BLACK"],
    fontSize: SIZES.TITLE,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
  },
  title2: {
    color: Colors["WHITE"],
    fontSize: 32,
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: SIZES.BASE,
  },
  facebookbtnimg:{
    width: 160,
    height: 60,
    maxWidth:(Layout.window.width/2)-30
  },
  navItem:{
    height: 64,
    marginTop: 5,
    backgroundColor: Colors["DBlue"],
    flexDirection: t('row'),
  },
  homeCard:{
    display: 'flex',
    width: 170,
    height: 170,
    maxWidth:(Layout.window.width/2)-20,
    maxHeight:(Layout.window.width/2)-25,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeCardText:{ fontSize: 14,marginTop:16, fontFamily: t('bold') },
  NotesItem:{width:"100%", fontFamily: t('regular'),minHeight:62,marginTop:10,padding:10,borderRadius:6,backgroundColor:Colors["WHITE"]}
})

export default Style
