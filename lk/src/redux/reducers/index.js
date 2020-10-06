import { combineReducers } from 'redux'

import { recordsReducer } from './records'
import { dateReducer } from './dateReducer'
 
export default combineReducers({
    records: recordsReducer,
    date: dateReducer
})