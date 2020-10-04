import { combineReducers } from 'redux'

import { recordsReducer } from './records'
 
export default combineReducers({
    records: recordsReducer
})