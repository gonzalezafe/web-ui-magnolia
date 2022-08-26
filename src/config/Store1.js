import { createStore } from 'redux'

// import Reducers from '../reducers/Reducers'

const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET"
}

export const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_BASKET":
          return {
            ...state,
            basket: [...state.basket, action.item]
          }
        default: return state  
    }
}

export const Store = createStore(reducer)