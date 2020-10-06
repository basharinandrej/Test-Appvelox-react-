import { combineReducers } from 'redux'

import { recordsReducer } from './records'
import { dateReducer } from './dateReducer'
import { cntReducer } from './cntReducer'
import { burgerReducer } from './burger'

export default combineReducers({
    records: recordsReducer,
    date: dateReducer,
    cnt: cntReducer,
    burger: burgerReducer
})