import { GET_OAUTH } from '../actions/oauth/get_oauth_key'


const oauth_info = (state = [], action) => {
    const data = action.payload;
    switch (action.type) {
        case GET_OAUTH:
            return {state,  data  }
        default:
            return state
    }
}

export default oauth_info