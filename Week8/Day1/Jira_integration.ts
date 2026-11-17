import axios from "axios";

let endpoint ='https://testleaf-team-qhgf7v1c.atlassian.net/rest/api/2/issue'
let username = 'yuvarani.sekar@testleaf.com'
let token = 'ATATT3xFfGF0s3YuSqiydTkGOaaejgPxD_ZJKtlz6utpymQ3ICHRL85t9r_sKfgRPugrX-ja2uRR8lZz3Sts49JJjlKL7Qtj7HVptque7eIOtJShhcpCXYjB-2bxvrXxIeKiPOaivVpeuquW3xaGt0XQwG57sfIBGyBs6WgrRoEKirgzCRBu_EM=5CA86B43'
let keyId = 'PWO2'

export async function createIssue(summary:string, description:string) {
    //These values come dynamically from failed test

    const issueRequest =
    {
  "fields": {

"project": {
      "key": keyId
    },
    "issuetype": {
      "name": "Bug"
    },
    "summary":summary,
    "description":description
  }
  }

  axios.post(endpoint,issueRequest,  //axios.post(url,data,config)
{
    auth:{
        username:username,
        password:token
    },
    headers:{
        "Content-Type":"application/json"
    }
}
  )
}