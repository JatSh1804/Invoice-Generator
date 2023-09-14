import { auth } from "../firebase"
import { useState } from "react"

//------- By Jatin for authentication Check-------------
export function user() {
    const [isAuthenticated, setisAuthenticated] = useState({ authenticated: false, AuthenticatedUserInfo: {} })
    useEffect(() => {
        const authstate = auth.onAuthStateChanged((user) => {
            user ? setisAuthenticated({ authenticated: true, AuthenticatedUserInfo: user }) : setisAuthenticated({ authenticated: false, AuthenticatedUserInfo: user })
            console.log(isAuthenticated.authenticated)
            console.log(isAuthenticated.AuthenticatedUserInfo)
            console.log(isAuthenticated.AuthenticatedUserInfo)
        })
    }, [])
    return  isAuthenticated ;

}




