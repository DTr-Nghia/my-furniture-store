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
                design your
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
        width: 90%;
        height: calc(100vh - 7rem);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 3rem;
        gap: 20rem;
        .content {
            width: 30%;
            margin-bottom: 6rem;
        }
        h1 {
            width: 20rem;
            margin-bottom: 2rem;
            font-family: "Playlist Script";
            color: var(--clr-primary-1);
            letter-spacing: 0.3rem;
        }
        p{
            width: 20rem;
            font-size: 1.2rem;
            font-family: "Poppins";
            font-weight: 400;
        }
        .banner-btn {
            font-family: 'Poppins',sans-serif;
            font-weight: 600;
            font-size: 1rem;
            border-radius: 10px;
            padding: 1rem 1.25rem;
            border: 1px solid var(--clr-primary-1);
            &:hover {
                background: transparent;
            }
        }
        .img-container{
            display: inline-block;
            width: 70%;
            position: relative;
        }
       .main-img {
           width: 100%;
           height: 600px;
           border-radius: var(--radius);
           display: inline-block;
           object-fit: cover;
        }
        .second-img {
            display: inline-block;
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
            display: inline-block;
            width: 250px;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            z-index: -5;
            opacity: 0.9;
       }
       @media (max-width:1200px){
           height: 60vh;
       }
       @media(max-width:992px){
           .main-img {
               width:400px;
               height: 500px;
               position: absolute;
               bottom: 0;
                left: 0;
                transform: translate(-60%,50%);
                z-index: -5;
                opacity: 0.7;
           }
           h1 {
               width:15rem;
           }
           p{
               width:18rem;
               overflow: hidden;
           }
           .second-img {
               display: none;
           }
           .third-img {
               display: none;
           }
       }
       @media (max-width:767px){
            margin-top: 6rem;
            min-height: 60vh;
            .img-container {
                display: none;
            }
            .content {
                width: 100%;
            }
            p {
                line-height: 1.5rem;
                max-width: 80rem;
                margin-bottom: 2rem;
                font-size: 1rem;
                color: var(--clr-primary-1);
            }
            .banner-btn {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
            }
            h1 {
                width: 100%;
                font-size: 3rem;
                text-align: center;
            }
            p {
                width: 100%;
                text-align: center;
            }
}
`
export default Hero