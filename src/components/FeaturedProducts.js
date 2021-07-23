import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
    const {featured_products:featured,products_loading:loading,products_error:error} = useProductsContext()

    
    const settings = {
            dots:false,
            slidesToShow:3,
            slidesToScroll:3,
            autoplay:true,
            infinite:true,
            autoplaySpeed:3000,
            arrows:false,
            responsive: [
                {
                    breakpoint: 480,
                    settings: "unslick"
            }
            ],
    }
    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }
    return <Wrapper className="section">
        <div className="title">
            <h2>featured products</h2>
            <div className="underline"></div>
        </div>
        
        <div className="section-center featured">   
            <Slider {...settings}> 
                {featured.map((product) => {
                    return <Product key={product.id} {...product}></Product>
                })}
             </Slider>
        </div>
        <Link to="/product" className="btn">
            All products
        </Link>
    </Wrapper>
}
const Wrapper = styled.section`
    h2{
        font-family: "Poppins", sans-serif;
        letter-spacing: 0.2rem;
        color: var(--clr-primary-1);
        font-size: 2.5rem;
    }
    .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
        img {
            height: 225px;
        }
    }
    .slick-slide {
        img {
            width: 100%;
            margin: 0 1rem;
        }
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
@media (min-width: 480px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
`
export default FeaturedProducts