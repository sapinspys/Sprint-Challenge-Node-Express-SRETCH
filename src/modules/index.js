import { combineReducers } from 'redux'
import counter from './counter'
import projects from './projects'


export default combineReducers({
  counter,
  projects
})
