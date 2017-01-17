import { combineReducers } from 'redux'
import posts from './post'
import topics from './topic'

export const rootReducer = combineReducers({
  posts,
  topics
})

export default rootReducer
