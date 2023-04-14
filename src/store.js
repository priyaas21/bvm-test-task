import { configureStore } from '@reduxjs/toolkit'
import root from './reducers'
import { addUserData } from './actions'

export default configureStore({
  reducer: {
    root
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(addUserData)
})
