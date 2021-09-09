import { createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import RootReducer from './reducers'

export const middlerware = [thunk]
export const store = createStore(RootReducer,applyMiddleware(...middlerware));
