import { createStore, combineReducers, applyMiddleware } from 'redux'
// import counterReducer from './reducer/counterReducer'
import authReducer from './reducer/authReducer'

let reducer = combineReducers({
    // counterReducer: counterReducer,
    auth: authReducer
})

const middleware = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch)
    } else {
        next(action)
    }
}

let store = createStore(reducer, applyMiddleware(middleware))
export default store