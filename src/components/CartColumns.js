import React from 'react'
import styled from 'styled-components'

const CartColumns = () => {
    return <Wrapper>
        <div className="content">
            <h5>items</h5>
            <h5>price</h5>
            <h5>quantity</h5>
            <h5>Subtotal</h5>
            <span></span>
        </div>
        <hr />
    </Wrapper>
}
const Wrapper = styled.div`
    display:none;
    @media (min-width: 776px){
        display:block;
        .content {
            display: grid;
            grid-template-columns: 322px 1fr 1fr 1fr auto;
            justify-items: center;
            column-gap: 1rem;
            h5 {
                color:var(--clr-primary-5);
                font-weight: 600;
                font-family: "Poppins",sans-serif;
                font-size: 1.2rem;
                letter-spacing: 0.2rem;
            }
        }
        span {
            width: 2rem;
            height: 2rem;
        }
        hr {
            margin-top: 1rem;
            margin-bottom: 3rem;
        }
    }
`
export default CartColumns