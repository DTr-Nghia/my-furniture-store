import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo2.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useAuth } from '../context/auth_context'


const Navbar = () => {
    const {openSidebar} = useProductsContext();
    const {currentUser} = useAuth()
    return (
    <NavContainer>
        <div className="nav-center">
            <div className="nav-header">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <button type="button" className="nav-toggle" onClick={openSidebar}>
                    <FaBars/>
                </button>
            </div>
        <ul className="nav-links">
            {links.map((link) => {
                const {id,text,url} = link;
                return <li key={id}>
                    <Link to={url}>{text}</Link>
                </li>
            })}
            <li>
                {currentUser ?<Link to='/checkout'>check out</Link>: <Link to='/login'>check out</Link>}
            </li>
        </ul>
        <CartButtons/>
        </div>
    </NavContainer>
    );
}
const NavContainer = styled.nav`
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    .nav-center {
        width: 90vw;
        margin:0 auto;
        max-width: var(--max-width);
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 250px;
            margin: -15px;
        }
    }
    .nav-toggle {
        background-color: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        transition: var(--transition);
        svg {
            font-size: 2rem;
        }
        &:hover {
            transform: scale(1.2);
            color: var(--clr-tertiary);
        }
    }
    .nav-links {
        display: none;
    }
    .cart-btn-wrapper {
        display: none;
    }
    @media screen and (min-width: 1280px) {
        .nav-toggle {
            display: none;
        }
        .nav-center {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .nav-header {
            img {
                margin: -15px -15px -15px -95px;
            }
        }
        .nav-links {
            display:flex;
            justify-content: center;
            li {
                margin: 0 2rem;
            }
            a {
                color: var(--clr-headline-primary);
                font-size: 1.5rem;
                text-transform: capitalize;
                font-family: 'Playlist Script';
                letter-spacing: var(--spacing);
                padding: 0.5rem;
                position: relative;
                transition: all 0.2s linear;
                &::before {
                    content: '';
                    position: absolute;
                    width: 0;
                    background-color: var(--clr-headline-primary);
                    height: 3px;
                    left: 8px;
                    bottom: 20%;
                    transform: translateY(50%);
                    border-radius: 10px 10px;
                    transition: all 0.2s linear;
                }
                &:hover:before {
                    width:80%;
                    background-color: var(--clr-primary-5);
                }
                &:hover {
                    color: var(--clr-primary-5);
                }
            }
        }
        .cart-btn-wrapper {
            display: flex;
    }
    }
`
export default Navbar