import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { useCartContext } from '../context/cart_context'

const CartItems = ({id,color,image,name,price,amount}) => {
    const {removeItem,toggleAmount} = useCartContext()
    const increase = () => {
        toggleAmount(id,'increase')
    }
    const decrease = () => {
        toggleAmount(id,'decrease')
    }
    return <Wrapper>
        <div className="title">
            <img src={image} alt={name} />
            <div>
                <h5 className="name">{name}</h5>
                <p className="color">
                  color: <span style={{background:color}}></span>
                </p>
                <h5 className="price-small">{formatPrice(price)}</h5>
            </div>   
        </div>
        <h5 className="price">{formatPrice(price)}</h5>
        <AmountButtons amount={amount} increase={increase} decrease={decrease}></AmountButtons>
        <h5 className="subtotal">{formatPrice(price * amount)}</h5>
        <button className="remove-btn" type="button" onClick={() => removeItem(id)}>
          <MdRemoveShoppingCart/>
        </button>
    </Wrapper>
}
const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 700;
    span {
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      margin-left: 0.5rem;
      border-radius: 50%;
    }
  }
  .name {
      font-size: 0.85rem;
      font-family: 'Poppins';
      letter-spacing: var(--spacing);
      color: var(--clr-primary-5)
    }
  .price-small {
    color: var(--clr-primary-5);
    font-size: 1rem;
  }
  .amount-btns {
    margin-top: 1.5rem;
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  .remove-btn {
    color: var(--clr-primary-5);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 1.6rem;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: var(--transition);
    :hover {
      transform: scale(1.2);
    }
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      color: var(--clr-primary-5);
      font-weight: 600;
      font-size: 1.5rem;
      margin-bottom: 1rem;

    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1.5rem;
      color: var(--clr-primary-5);
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .name {
      font-size: 1rem;
      font-family: 'Poppins';
      letter-spacing: var(--spacing);
      color: var(--clr-primary-5)
    }
    .color {
      font-size: 0.85rem;
      font-weight: 600;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        width: 1rem;
        height: 1rem;
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      h2 {
        font-size: 2rem;
      }
    }
  }
`
export default CartItems