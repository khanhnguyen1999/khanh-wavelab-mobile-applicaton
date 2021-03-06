import { combineReducers } from 'redux'

import UserReducer from "../reducers/user.reducer";
import AuthReducer from "../reducers/auth.reducer";
import AppReducer from '../reducers/app.reducer';

const FoodOnline = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  app: AppReducer,
})

export default FoodOnline;
