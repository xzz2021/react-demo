
import { applyMiddleware, createStore, legacy_createStore } from 'redux'
import reducer from './reducer'

import reduxThunk from 'redux-thunk';

//  const store = createStore(reducer)
 const store = legacy_createStore(reducer,applyMiddleware(reduxThunk))

 export default store