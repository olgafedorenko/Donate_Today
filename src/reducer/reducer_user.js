import { GET_USER } from '../actions/user/get_user_all'


const user_info = (state = [], action) => {
    const data = action.payload;
    switch (action.type) {
        case GET_USER:
            return {state,  data  }
        default:
            return state
    }
}
  
export default user_info