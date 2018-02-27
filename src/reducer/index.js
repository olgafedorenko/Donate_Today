import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import user_info from './reducer_user'
import oauth_info from './reducer-oauth_key'
import node_info from "./reducer-node"

 
const rootReducer = combineReducers({
  userDetails: user_info,
  oauthKeyDetails: oauth_info,
  nodeDetails: node_info
})
 
export default rootReducer