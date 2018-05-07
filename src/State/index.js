import {createStore} from 'redux'

let Store = createStore(counter)

Store.subscribe(() => {
  console.log(Store.getState())
})

Store.dispatch({type: 'INCREMENT'})
Store.dispatch({type: 'INCREMENT'})
Store.dispatch({type: 'DECREMENT'})

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
}