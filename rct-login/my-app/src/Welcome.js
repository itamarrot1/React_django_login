import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export const Welcome = () => {
    return (
        <div>

       
             <Link to={'/'}>Home</Link>| {' '}
            <Link to={'/log-in'}>Login</Link> | {' '}
            <Link to={'/register'}>register</Link>
            <Outlet></Outlet>
        </div>
    )
}
