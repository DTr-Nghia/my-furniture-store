import React from 'react'
import styled from 'styled-components'
import {FaPlus,FaMinus} from 'react-icons/fa'

const AmountButtons = ({amount,increase,decrease}) => {
    return <Wrapper className="amount-btns">
        <button className="decrease-btn" type="button" onClick={decrease}>
            <FaMinus/>
        </button>
        <h2 className="amount">{amount}</h2>
        <button className="increase-btn" type="button" onClick={increase}>
            <FaPlus/>
        </button>
    </Wrapper>
}
const Wrapper = styled.div`
    display:flex;
    gap: 1.25rem;
    width: 140px;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    button {
        background: transparent;
        border: transparent;
        cursor: pointer;
        width: 2rem;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: var(--transition);
        color: var(--clr-primary-5);
        svg{
            font-size: 1.5rem;
        }
        :hover {
            color: var(--clr-tertiary);
        }
    }
    h2 {
        line-height: 0;
        color: var(--clr-primary-5);
    }
`
export default AmountButtons