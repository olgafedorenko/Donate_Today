
import { SEVER_URL } from '../../modules/server_setting'


export const getOauthKeyById = (user_id, refresh_token) => {
    Storage.prototype.getObject = function(key) {
        var value = this.getItem(key);
        return value && JSON.parse(value);
    }   
    var name = window.sessionStorage.getItem(`${user_id}/oauth_key`);
    if( name !== null) {
        return new Promise((resolve, reject) => {
            fetch(name)
            .then((response) => {
                resolve( {oauth_key:name} );
            })
        })
    }
    else{
    const data = {
        
            "refresh_token":`${refresh_token}`,
            "scope":[
                "USER|PATCH",
                "USER|GET",
                "NODES|POST",
                "NODES|GET",
                "NODE|GET",
                "NODE|PATCH",
                "NODE|DELETE",
                "TRANS|POST",
                "TRANS|GET",
                "TRAN|GET",
                "TRAN|PATCH",
                "TRAN|DELETE"
            ],
            "phone_number":"901.942.8167",
            "validation_pin":"430829"
        
        }
    return new Promise((resolve, reject) => {
        fetch(`${SEVER_URL}/v3.1/oauth/${user_id}`, {
            method: "POST",
            headers: {
                'X-SP-GATEWAY': 'client_id_cz8B2ZlWO9TFLPwHgbUe4Aua1oYKhjSyd5Dtv7Cx|client_secret_p4QEyGqa6xmMfNFS1APb7rOoVske25TuZcUtJC0d',
                'X-SP-USER-IP': '127.0.0.1',
                'X-SP-USER': '|e83cf6ddcf778e37bfe3d48fc78a6502062fc1030449628c699ef3c4ffa6f9a2000b8acc3c4c0addd8013285bb52c89e5267b628ca02fa84a6d71fe186b7cd5d',
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }, {mode: 'cors'})
        .then(response => response.json())
        .then((response) => {
            resolve({...response});
        })
    })
}
}

export const GET_OAUTH = 'GET_OAUTH';
export function getOauthKey(user_id, refresh_token) {
    return {
        type: GET_OAUTH,
        payload: getOauthKeyById(user_id, refresh_token)
    }
}
