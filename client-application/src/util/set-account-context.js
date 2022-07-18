import axios from "axios"
import FIREBASEURL from "../firebase-url"

export default function setAccountContext(successUrl) {
    console.log("start function")
    const data = {}
    const config =  {
        headers: {
            Authorization: localStorage.FBIdToken,
        }
    }
    axios.post(FIREBASEURL + "/getUserInformation", data, config)
    .then(res => {
        window.localStorage.setItem("email", res.data.email)
        window.localStorage.setItem("firstName", res.data.firstName)
        window.localStorage.setItem("lastName", res.data.lastName)
        window.localStorage.setItem("imdbLink", res.data.imdbLink)
        window.localStorage.setItem("accountType", res.data.accountType)
        
    })
    .then(()=>{
        return axios.post("https://us-central1-festiv-fd5c6.cloudfunctions.net/subscriptions/get-subscription-status", data, config)
    })
    .then((subJson) => {
        window.localStorage.setItem("subscriptionStatus", subJson.data.subscriptionStatus)
    })
    .then(()=>{
        if(successUrl){
            window.location.replace(successUrl.toString())
        }
        
    })
    .catch(error => {
        console.log(error.message)
    })
    
}