// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,combineReducers,applyMiddleware,compose } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from './redux/reducers';

// const reducer =combineReducers({
//     cartReducer:cartReducer
// });

const store = createStore(
    cartReducer,
   compose(applyMiddleware(thunk))
);

export default store;