import React from "react"
import {Route, Redirect} from "react-router-dom"

const AuthRoute = ({component: Component, authenticated, successPath, ...rest}) => {
    return(
    <Route
        {...rest}
        render = {(props) => authenticated === true ? <Redirect to ={successPath} /> : <Component {...props}/>}
    />
    )
}
export default AuthRoute 