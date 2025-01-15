import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

// ? Reducers
import lastSeenReducer from '../store/slices/lastSeen.slice'
import cartReducer from '../store/slices/cart.slice'
import alertReducer from '../store/slices/alert.slice'
import apiSlice from '@/services/baseApi'

// ? Actions
export * from '../store/slices/lastSeen.slice'
export * from '../store/slices/cart.slice'
export * from '../store/slices/alert.slice'

export const store = configureStore({
  reducer: {
    lastSeen: lastSeenReducer,
    cart: cartReducer,
    alert: alertReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
