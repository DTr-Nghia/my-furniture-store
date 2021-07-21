import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useAuth} from '../context/auth_context'
export default function PrivateRoute({children,...rest}) {
    const {currentUser} = useAuth()
    return (
        <Route {...rest} render={()=>{
            return currentUser ? children : <Redirect to="/"/>
        }}>
        </Route>
    )
}
