import React, {useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useProductsContext} from '../context/products_context'
import {single_product_url as url} from '../utils/constants'
import {formatPrice} from '../utils/helpers'
import {
    Loading,
    Error,
    ProductImages,
    AddToCart,
    Stars,
    PageHero,
} from '../components'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SingleProductPage = () => {
    const {id} = useParams();
    const {single_product_loading:loading, 
        single_product_error:error,
        single_product:product,
        getSingleProduct,
    } = useProductsContext()
    const history = useHistory();

    useEffect(() => {
        getSingleProduct(`${url}${id}`)
        // eslint-disable-next-line
    },[id])

    useEffect(() => {
        if(error){
            setTimeout(() =>{
                history.push('/products')
            },3000)
        }
        // eslint-disable-next-line
    },[error])

    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }
    const {name,price,stock,images,id:sku,description,company,stars, reviews} = product
    console.log(images)
    return <Wrapper>
            <PageHero title={name} product></PageHero>
            <div className="section section-center">
                <Link to='/products' className="btn">Go to products</Link>
                <div className="product-center">
                    <ProductImages images={images}></ProductImages>
                    <section className="content">
                        <h2>{name}</h2>
                        <Stars stars={stars} reviews={reviews}/>
                        <h5 className="price">
                            <span>Price:</span> {formatPrice(price)}
                        </h5>
                        <p className="desc">{description}</p>
                        <p className="info">
                            <span>SKU:</span>
                            {sku}
                        </p>
                        <p className="info">
                            <span>Available:</span>
                            {stock > 0 ? 'In stock':'Out of stock' }
                        </p>
                        <p className="info">
                            <span>Brand:</span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart product={product}/>}
                    </section>
                </div>
            </div>
    </Wrapper>
}
const Wrapper = styled.main`
    .product-center {
        display: grid;
        gap: 4rem;
        margin-top: 2rem;
    }
    .price {
        color: var(--clr-primary-5);
        margin-top: 1rem;
        font-size: 1.25rem;
        span {
            color: var(--clr-black);
        }
    }
    .desc {
        line-height: 2;
        max-width: 45em;
    }
    .info {
        text-transform: capitalize;
        width: 300px;
        display: flex;
        justify-content: space-between;
        align-items:center;
        span {
        font-weight: 700;
        }
    }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 2.5rem;
      span{
          font-size: 1.25rem;
      }
    }
  }
`
export default SingleProductPage