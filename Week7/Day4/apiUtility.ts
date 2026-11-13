import { APIRequestContext } from "@playwright/test";


let acc_token: any
let inst_Url: any
let token_Type: any

let leadId: any

export async function generateToken(request:APIRequestContext) {//This local variable request is
    //userdefined is holding the request fixture value
 let tokenResponse = await request.post('https://orgfarm-d716fa5b16-dev-ed.develop.my.salesforce.com/services/oauth2/token',
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "client_credentials",
                "client_id": "3MVG9dAEux2v1sLsRvdqMCBNvwP6WkblcP70V_xpRK5jeueAyURhV5.EcbUmH8rTcnkf0q2Ko.bpsQDul4vOG",
                "client_secret": "926CE4EE9D6F27F1C1853ACCCAEE9A2902BC98C4848C7B6CEB2B1D936D48A5DD"
            }
            //ALt+shift+F => format document
        }
    )
    const responseBody = await tokenResponse.json()
    console.log(responseBody);

    acc_token = responseBody.access_token

    inst_Url = responseBody.instance_url

    token_Type = responseBody.token_type   
}

export async function createLead(request:APIRequestContext) {
    const leadResponse = await request.post(`${inst_Url}/services/data/v65.0/sobjects/Lead`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token_Type} ${acc_token}`
            },
            data: {
                "Salutation": "mr",
                "FirstName": "Ram",
                "LastName": "Balaji",
                "Company": "Wipro"
            }
        }
    )

    const leadResponseBody = await leadResponse.json()
    console.log(leadResponseBody);

     leadId = leadResponseBody.id
}

export async function fetchLead(request:APIRequestContext):Promise<string> {
    const fetchResponse = await request.get(`${inst_Url}/services/data/v65.0/sobjects/Lead/${leadId}`,
        {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `${token_Type} ${acc_token}`
            }
        }
    )

    const fetchResponseBody = await fetchResponse.json()
    console.log(fetchResponseBody);

    return fetchResponseBody.LastName
}
