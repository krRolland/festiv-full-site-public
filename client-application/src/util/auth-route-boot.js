// import React from "react"
// import {Route, Redirect} from "react-router-dom"

// const AuthRouteBoot = ({component: Component, authenticated, faliurePath, validPayment}) => {
//     console.log("checking auth route")
//     if (authenticated === false) {
//         return ( <Route render = {<Redirect to = {faliurePath} />} /> )
//     }
//     else {

//         // if (validPayment === true) {
//         //     return ( <Route render = {<Component/>} /> )
//         // } 
//         // else { return (<Route render = {<Redirect to = "https://subscriptions.festivmedia.com/update-payment" />} />) } 
//     } 
//     // return (
//     // <Route
//     //     render = {(props) => authenticated === false ? <Redirect to ={faliurePath} /> : <Component {...props}/>}
//     // />
//     // )
// }
// export default AuthRouteBoot



import React from "react"
import {Route, Redirect} from "react-router-dom"

const AuthRouteBoot = ({component: Component, authenticated, faliurePath, validPayment, ...rest}) => {
    console.log("checking auth route")
    return (
    <Route
        {...rest}
        render = {(props) => {
            if (authenticated === false) { 
                return(<Redirect to ={faliurePath} />) 
            } 
            else {
                if(validPayment === false) {
                    alert("Please Update Your Payment Information")
                    return (<Redirect to ="/update-payment-info" />)
                } 
                else {return(<Component {...props}/>)} 
            }
        }}
    />
    )
}
export default AuthRouteBoot