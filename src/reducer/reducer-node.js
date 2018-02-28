import { GET_NODE } from '../actions/node/get_all_nodes'
import { POST_NODE } from '../actions/node/post_node'


const node_info = (state = [], action) => {
    const data = action.payload;
    switch (action.type) {
        case GET_NODE:
            return {state,  data  }
        case POST_NODE:
            return {state,  data  }
        default:
            return state
    }
}

export default node_info;