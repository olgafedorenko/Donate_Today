
import { SEVER_URL } from '../../modules/server_setting'

export const getUserByName = (userName) => {
    return new Promise((resolve, reject) => {
        fetch(`${SEVER_URL}/v3.1/users?show_refresh_tokens=yes&per_page=10&page=1&query=${userName}`, {
            method: "GET",
            headers: {
                'X-SP-GATEWAY': 'client_id_cz8B2ZlWO9TFLPwHgbUe4Aua1oYKhjSyd5Dtv7Cx|client_secret_p4QEyGqa6xmMfNFS1APb7rOoVske25TuZcUtJC0d',
                'X-SP-USER-IP': '127.0.0.1',
                'X-SP-USER': '|e83cf6ddcf778e37bfe3d48fc78a6502062fc1030449628c699ef3c4ffa6f9a2000b8acc3c4c0addd8013285bb52c89e5267b628ca02fa84a6d71fe186b7cd5d',
                'content-type': 'application/json'
            },
        }, {mode: 'cors'})
        .then(response => response.json())
        .then((response) => {
            resolve({...response});
        })
    })
}

export const GET_USER = 'GET_USER';
export function getUser(userName) {
    return {
        type: GET_USER,
        payload: getUserByName(userName)
    }
}
