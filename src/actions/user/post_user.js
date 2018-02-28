
import { SEVER_URL } from '../../modules/server_setting'

export const postUserByName = (name, email, phone_number, SSN) => {

    const data = {
        "logins": [
            {
                "email": `${email}`,
                "password":"test1234",
                "scope":"READ_AND_WRITE"
            }
            ],
            "phone_numbers": [
                `${phone_number}`
            ],
            "legal_names": [
            "Test User"
            ],
            "documents":[{
                "email":"test@test.com",
                "phone_number":"901-942-8167",
                "ip":"12134323",
                "name":`${name}`,
                "alias":"Woof Woof",
                "entity_type":"M",
                "entity_scope":"Arts & Entertainment",
                "day":2,
                "month":5,
                "year":1989,
                "address_street":"170 St Germain Ave",
                "address_city":"SF",
                "address_subdivision":"CA",
                "address_postal_code":"94114",
                "address_country_code":"US",
                "virtual_docs":[{
                    "document_value":`${SSN}`,
                    "document_type":"SSN"
                }],
                "physical_docs":[{
                    "document_value": "data:image/gif;base64,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",
                    "document_type": "GOVT_ID"
                }],
                "social_docs":[{
                    "document_value":"https://www.facebook.com/sankaet",
                    "document_type":"FACEBOOK"
                }]
            }],
            "extra": {
            "note": "Interesting user",
            "supp_id": "122eddfgbeafrfvbbb",
            "cip_tag":1,
            "is_business": false,
            "extra_security": false
            }
        }
    return new Promise((resolve, reject) => {
            
        fetch(`${SEVER_URL}/v3.1/users`, {
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
            resolve({response});
        })
    })
}

export const POST_USER = 'POST_USER';
export function postUser(userName) {
    return {
        type: POST_USER,
        payload: postUserByName(userName)
    }
}
