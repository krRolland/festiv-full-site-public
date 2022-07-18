import React, {createContext, useState} from 'react'
import { Account } from './pages'
const AccountContext = createContext()

function AccountContextProvider(props) {
    const [userEmail, setEmail] = useState("")
    const [userAccountType, setAccountType] = useState("")
    const [userFirstName, setFirstName] = useState("Loading...")
    const [userLastName, setLastName] = useState("")
    const [userImdbLink, setImdbLink] = useState("")

    return(
        <AccountContext.Provider value = {
            {email: userEmail, setEmail: setEmail, accountType: userAccountType, 
        setAccountType: setAccountType, firstName: userFirstName, setFirstName: setFirstName, 
        lastName: userLastName, setLastName: setLastName, imdbLink: userImdbLink, setImdbLink: setImdbLink}
        }>
            {props.children}
        </AccountContext.Provider>
    )
}

export {AccountContextProvider, AccountContext}