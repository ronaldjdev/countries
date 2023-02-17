import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "features/reducer/reducer"

export const store = createStore(rootReducer,applyMiddleware(thunk))