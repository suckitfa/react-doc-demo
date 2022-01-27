import { createStore, combineReducers, applyMiddleware, } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from 'redux-thunk';
const initialState = {
    count: 0
}

const userInitialState = {
    name: "bob",
    age: 20
}

const ADD = 'ADD'

function add(num) {
    return {
        type: ADD,
        num
    }
}

function addAsync(num) {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(add(num))
        }, 1000)
    }
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return { count: state.count + (action.num || 1) }
        default:
            return state
    }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'

function userReducer(state = userInitialState, action) {
    console.log('actions = ', action)
    switch (action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                name: action.name
            }
        default:
            return state
    }
}

const allReducers = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const store = createStore(
    allReducers, {
        counter: initialState,
        user: userInitialState
    },
    composeWithDevTools(applyMiddleware(ReduxThunk)),
)

console.log('store state = ', store.getState())
store.dispatch({ type: ADD })
store.subscribe(() => {
    console.log('changing state......... = ', store.getState())
})
store.dispatch(addAsync(7))
store.dispatch({ type: ADD, num: 2 })
console.log('store state = ', store.getState())
store.dispatch({ type: UPDATE_USERNAME, name: "joke........" })
console.log(store.getState())
export default store;