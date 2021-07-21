import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItems'
import CartTotal from './CartTotal'


const CartContent = () => {
    const {cart,clearCart} = useCartContext()
    return <Wrapper className="section section-center">
        <CartColumns/>
        {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
        })}
        <hr />
        <div className="link-container">
            <Link className="link-btn" to="/products">
                continue shopping
            </Link>
            <button className="link-btn clear-btn" type="button" onClick={clearCart}>
                clear all
            </button>
        </div>
        <CartTotal/>
    </Wrapper>
}
const Wrapper = styled.section`
    .link-container{
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
    }
    .link-btn{
        background: var(--clr-primary-5);
        border:transparent;
        text-transform: capitalize;
        cursor: pointer;
        padding: 0.25rem 0.5rem;
        color: var(--clr-background-1);
        border-radius: 7px;
        font-weight: 400;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        :hover {
            transform: scale(1.1);      
        }
    }
`
export default CartContent