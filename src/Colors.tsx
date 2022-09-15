import { configStore } from './redux'

let Colors = {}

const changed =  () => {
  Colors = configStore.getState().obj?.colors
}

configStore.subscribe(changed)

export default Colors