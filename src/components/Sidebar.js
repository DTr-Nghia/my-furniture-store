import React from 'react'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import logo from '../assets/logo2.svg'
import {useAuth} from "../context/auth_context"

const Sidebar = () => {
    const {isSidebarOpen,closeSidebar} = useProductsContext();
    const {currentUser} = useAuth()
    return (
        <SidebarWrapper>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className="sidebar-header">
                    <img src={logo} alt="nghia house" className="logo"/>
                    <button className="close-btn" type="button" onClick={closeSidebar}>
                          <FaTimes/>
                    </button>
                </div>
                <ul className="links">
                    {links.map((link) => {
                       const {id,url,text} = link;
                       return <li key={id}>
                           <Link to={url} onClick={closeSidebar}>{text}</Link>
                       </li>
                    })}
                     <li>
                         {currentUser?<Link to='/checkout' onClick={closeSidebar}>checkout</Link>
                         :<Link to='/login' onClick={closeSidebar}>checkout</Link>}
                    </li> 
                </ul>
                <CartButtons/>
            </aside>
        </SidebarWrapper>
    )
}
const SidebarWrapper = styled.div`
    text-align: center;
    .sidebar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.5rem;
    }
    .sidebar {
        position:fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: var(--clr-background-2);
        transition: var(--transition);
        transform: translateX(-100%);
        z-index:-1;
    }
    .logo {
        justify-self:center;
        height: 45px;
    }
    .close-btn {
        font-size: 2rem;
        background: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        transition: var(--transition);
        margin-top: 0.2rem;
    }
    .close-btn:hover {
        transform: scale(1.2);
        color: var(--clr-tertiary);
    }
    .links {
        margin-left: 1rem;
    }
    .links a {
        display: block;
        text-align: center;
        text-transform: capitalize;
        font-size: 2rem;
        padding: 1.5rem;
        font-family: 'Poppins',sans-serif;
        color: var(--clr-black);
        letter-spacing: var(--spacing);
        transition: var(--transition);
    }
    .links a:hover {
        transform: translateY(-10%);
        color: var(--clr-tertiary);
    }
    .cart-btn-wrapper {
        position: absolute;
        bottom:3rem;
        left: 50%;
        transform: translateX(-60%); ;
    }
    .show-sidebar {
        transform: translateX(0);
        z-index: 999;
    }
    @media screen and (min-width:1280px) {
        .sidebar{
            display: none;
        }
    }
`
export default Sidebar