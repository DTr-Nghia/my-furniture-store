import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
const ListView = ({products}) => {
    return <Wrapper>
        {products.map((product) =>{
            const {id,image,name,price,description} = product;
            return <article key={id}>
                <div className="img-box">
                    <img src={image} alt={name} />
                </div>
                <div>
                    <h4>{name}</h4>
                    <h5 className="price">{formatPrice(price)}</h5>
                    <p>{description.substring(0,150)}...</p>
                    <Link to={`/products/${id}`} className="btn">Details</Link>
                </div>
            </article>
        })}
    </Wrapper>
}
const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    .img-box{
        width: 300px;
        img {
            width: 100%;
            display: block;
            height: 200px;
            object-fit: cover;
            border-radius: var(--radius);
            margin-bottom: 1rem;
        }
    }
    h4 {
    margin-bottom: 0.5rem;
    }
    .price {
        color: var(--clr-primary-6);
        margin-bottom: 0.75rem;
    }
    p {
        max-width: 45em;
        margin-bottom: 1rem;
    }
    .btn {
        font-size: 1rem;
        padding: 0.25rem 0.5rem;
    }
    @media (min-width: 992px) {
        article {
            display: flex;
            gap: 2rem;
            align-items: flex-start;
        }
        
    }
`
export default ListView