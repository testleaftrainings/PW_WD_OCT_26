import test, { expect } from "@playwright/test";

let acc_token: any
let inst_Url: any
let token_Type: any

let leadId: any


test.describe.serial('Run in serial mode',()=>{


test('Generate access token', async ({ request }) => {
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
})

test('create lead using playwright with API', async ({ request }) => {
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

    console.log(leadResponse.status());
    console.log(leadResponse.statusText());

    expect(leadResponse.status()).toBe(201)
    expect(leadResponse.statusText()).toBe('Created')

    leadId = leadResponseBody.id
    
})

test('Fetch lead using playwright with API',async({request})=>{

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
    
    console.log(fetchResponse.status());
    console.log(fetchResponse.statusText());

    expect(fetchResponse.status()).toBe(200)
    expect(fetchResponse.statusText()).toBe('OK')    
    
})

test('Update lead using playwright with API',async({request})=>{

    const updateResponse = await request.patch(`${inst_Url}/services/data/v65.0/sobjects/Lead/${leadId}`,
        {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `${token_Type} ${acc_token}`
            },
            data:{
                "Company": "Qeagle"
            }
        }
    )

    // const updateResponseBody = await updateResponse.json()
    // console.log(updateResponseBody);
    
    console.log(updateResponse.status());
    console.log(updateResponse.statusText());

    expect(updateResponse.status()).toBe(204)
    expect(updateResponse.statusText()).toBe('No Content')    
    
})

test('Delete lead using playwright with API',async({request})=>{

    const deleteResponse = await request.delete(`${inst_Url}/services/data/v65.0/sobjects/Lead/${leadId}`,
        {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `${token_Type} ${acc_token}`
            }
        }
    )

    //const deleteResponseBody = await deleteResponse.json()
    //console.log(deleteResponseBody);
    
    console.log(deleteResponse.status());
    console.log(deleteResponse.statusText());

    expect(deleteResponse.status()).toBe(204)
    expect(deleteResponse.statusText()).toBe('No Content')    
    
})

})