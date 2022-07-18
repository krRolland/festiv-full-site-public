import React from "react"
import {Route, Redirect} from "react-router-dom"

const AuthRouteWithFaliure = ({component: Component, authenticated, faliurePath, ...rest}) => {
    return(
    <Route
        {...rest}
        render = {(props) => authenticated === true ? <Component {...props}/> : <Redirect to ={faliurePath} />}
    />
    )
}
export default AuthRouteWithFaliure 