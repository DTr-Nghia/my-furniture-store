import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {formatPrice} from '../utils/helpers'
const GridView = ({products}) => {
    return <Wrapper>
        <div className="products-container">
            {products.map((product) => {
              const {id,name,image,price} = product
                return <div key={id}>
                    <div className="container">
                        <img src={image} alt={name} />
                    <Link to={`/product/${id}`} className="link">
                        <FaSearch/>
                    </Link>
                    </div>
                    <footer>
                        <h5>{name}</h5>
                        <p>{formatPrice(price)}</p>
                    </footer>
              </div>
            })}
        </div>
    </Wrapper>
}
const Wrapper = styled.section`
  .container {
    position: relative;
    background: var(--clr-background-1);

  }
  img {
      width: 100%;
      height: 175px;
      display: block;
      object-fit: cover;
      border-radius: var(--radius);
      transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
      transition: var(--transition);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
    width: 3.5rem;
    height: 3.5rem;
    svg {
      font-size: 1.5rem;
    }
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
  @media(max-width:480px) {
    footer {
      margin-bottom: 1rem;
    }
    footer h5 {
      margin-left: 0;
    }
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default GridView