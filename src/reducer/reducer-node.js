import { GET_NODE } from '../actions/node/get_all_nodes'
import { POST_NODE } from '../actions/node/post_node'


const node_info = (state = [], action) => {
    const data = action.payload;
    switch (action.type) {
        case GET_NODE:
        console.log("reducer node", data)
            return {state,  data  }
        case POST_NODE:
        console.log("reducer node post", data)
            return {state,  data  }
        default:
            return state
    }
}

export default node_info;