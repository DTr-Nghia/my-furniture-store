import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import herobcg2 from '../assets/herobcg2.jpg'
import herobcg1 from '../assets/herobcg1.jpg'
import herobcg3 from '../assets/hero-bcg3.jpeg'
const Hero = () => {
    return <Wrapper className="section-center">
        <article className="content">
        <h1>
            design your <br/>
            own zone
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quaerat temporibus architecto quos! Totam maxime sed quos. Sequi, aperiam sed.</p>
        <Link to="/products" className="btn banner-btn">
            shop now
        </Link>
        </article>
        <article className="img-container">
            <img src={herobcg1} alt="main-img" className="main-img" />
            <img src={herobcg2} alt="second-img" className="second-img" />
            <img src={herobcg3} alt="third-img" className="third-img" />
        </article>
    </Wrapper>
}
const Wrapper = styled.section`
        height: calc(100vh - 7rem);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20rem;
        .content {
            margin-bottom: 6rem;
        }
        h1 {
            margin-bottom: 2rem;
            font-family: "Playlist Script";
            color: var(--clr-primary-1);
            letter-spacing: 0.3rem;
        }
        p{
            font-size: 1.2rem;
            font-family: "Poppins";
            font-weight: 400;
        }
        .banner-btn {
            border-radius: 10px;
            padding: 1rem 1.25rem;
            border: 1px solid var(--clr-primary-1);
            &:hover {
                background: transparent;
            }
        }
        .img-container{
            display: block;
            position: relative;
        }
       .main-img {
           width: 100%;
           height: 600px;
           border-radius: var(--radius);
           display: block;
           object-fit: cover;
        }
        .second-img {
            width: 250px;
            height: 150px;
            position: absolute;
            object-fit: cover;
            opacity: 0.7;
            bottom: 0;
            left: 5px;
            z-index: -5;
            transform: translateX(-200%);
        }
        .third-img {
            width: 250px;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            z-index: -5;
            opacity: 0.;
       }
       @media (max-width:1200px){
           height: 60vh;
       }    
       @media (max-width:992px){
            min-height: 60vh;
            .img-container {
                display: none;
            }
            p {
                line-height: 1.5rem;
                max-width: 80rem;
                margin-bottom: 2rem;
                font-size: 1rem;
                color: var(--clr-primary-1);
            }
}
`
export default Hero