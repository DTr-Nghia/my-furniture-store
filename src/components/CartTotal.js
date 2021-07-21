import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useAuth } from '../context/auth_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
    const {total_amount, shipping_fee} = useCartContext()
    const {currentUser} = useAuth()
    return <Wrapper>
            <div>
                <article>
                    <h5>subtotal: <span>{formatPrice(total_amount)}</span></h5>
                    <p>
                        shipping fee: <span>{formatPrice(shipping_fee)}</span>
                    </p>
                <hr />
                    <h4>
                        order total: {formatPrice(total_amount + shipping_fee)}
                    </h4>
                </article>
                    {currentUser ?
                        <Link to="/checkout" className="checkout-btn">checkout</Link>:
                        <Link to="/login" className="checkout-btn">checkout</Link>
                }
                </div>
            </Wrapper>
}
const Wrapper = styled.section`
    margin-top: 3rem;
    display:flex;
    justify-content:flex-end;
    article {
        border: 1px solid var(--clr-grey-8);
        border-radius: 6px;
        padding: 1.5rem 3rem;
    }
    h4,h5,p {
        display: flex;
        justify-content: space-between;
        text-transform: capitalize;
    }
    hr {
        margin-bottom: 2rem;
    }
    .checkout-btn {
        width: 100%;
        margin-top: 1rem;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        background: var(--clr-primary-5);
        color: var( --clr-main);
        padding: 0.375rem 0.75rem;
        letter-spacing: var(--spacing);
        display: inline-block;
        font-weight: 600;
        transition: var(--transition);
        font-size: 1rem;
        cursor: pointer;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        border-radius: var(--radius);
        border-color: transparent;
        :hover {
            transform: scale(1.1);
        }
    }
    @media (max-width: 576px) {
        justify-content: center;
    }
`
export default CartTotals