import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

const change = createAction('change')
const changeReducer = createReducer(
  { obj: { lang: 'en', token: '', random: '' } },
  {
    [change]: (state, action) => {
      state.obj = action.obj
      return state
    },
  },
)
export const mystore = configureStore({ reducer: changeReducer })

const prompt = createAction('prompt')
const promptReducer = createReducer(
  { obj: { title: '', okText: '', visible: false, confirmed: false } },
  {
    [prompt]: (state, action) => {
      state.obj = action.obj
      return state
    },
  },
)
export const promptStore = configureStore({ reducer: promptReducer })


const config = createAction('config')
const configReducer = createReducer(
  { obj: null},
  {
    [config]: (state, action) => {
      state.obj = action.obj
      return state
    },
  },
)
export const configStore = configureStore({ reducer: configReducer })
