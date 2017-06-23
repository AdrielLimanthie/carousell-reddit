import { combineReducers } from 'redux'
import locationReducer from './location'
import topicReducer from '../routes/Home/components/module'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    topic: topicReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
