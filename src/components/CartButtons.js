import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useAuth } from '../context/auth_context'

const CartButtons = () => {
    const {total_items,clearCart} = useCartContext()
    const {closeSidebar} = useProductsContext()
    const {currentUser,logout} = useAuth();
    const handleLogout = async () => {
        try {
            await logout()
            await clearCart()
        } catch(error) {
            console.log(error)
        }
    }
    return <Wrapper className="cart-btn-wrapper">
        <Link to="/cart" className="cart-button" onClick={closeSidebar}>
            Cart
            <span className="cart-container">
                <FaShoppingCart/>
                <span className="cart-value">{total_items}</span>   
            </span>
        </Link>
        {currentUser ? <button type="button" onClick={handleLogout} className="auth-btn">Logout <FaUserMinus/></button>:
        <Link to="/login" className="auth-btn">
                Login <FaUserPlus/>
        </Link>}
    </Wrapper>
}
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    
    .cart-button {
        color: var(--clr-black);
        font-size: 1.2rem;
        font-family: 'Poppins',sans-serif;
        letter-spacing: var(--spacing);
        display: flex;
        align-items: center;
        transition: var(--transition);
        margin-right: 2rem ;
        &:hover {
            color: var(--clr-primary-5);
        }
    }
    .cart-container {
    display: flex;
    align-items: center;
    position: relative;
        svg {
        height: 1.6rem;
        margin-left: 5px;
        }
    }
    .cart-value {
        position: absolute;
        font-size: 1rem;
        font-family: 'Poppins',sans-serif;
        top: -8px;
        right: -11px;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color:var(--clr-primary-5);
        color: #fffffe;
        border-radius: 50% ;
        padding: 10px;
    }
    .auth-btn {
        display: flex;
        align-items: center;
        background: transparent;
        border-color: transparent;
        color: var(--clr-black);
        font-size: 1.2rem;
        font-family: 'Poppins',sans-serif;
        letter-spacing: var(--spacing);
        cursor: pointer;
        transition: var(--transition);
        &:hover {
            color: var(--clr-primary-5);
        }
        svg {
            margin-left: 5px;
            font-size: 1.6rem;
        }
    }
`
export default CartButtons