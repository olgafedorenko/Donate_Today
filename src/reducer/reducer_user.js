import { GET_USER } from '../actions/user/get_user_all'
import { POST_USER } from '../actions/user/post_user'


const user_info = (state = [], action) => {
    const data = action.payload;
    switch (action.type) {
        case GET_USER:
            return {state,  data }
        case POST_USER:
            return {state,  data:{users:[data.response]} }
        default:
            return state
    }
}
  
export default user_info;