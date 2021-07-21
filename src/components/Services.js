import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
    return <Wrapper>
        <div className="service-container">
            <div className="title">
                <h3>Our Services</h3>
                <div className="underline"></div>
            </div>
        </div>
        <div className="services-center">
            {services.map((service) => {
               const {id,text,icon,title} = service;
               return <article key={id} className="service-content">
                    <span className="icon">{icon}</span>
                    <h4>{title}</h4>
                    <p>{text}</p>
               </article>
            })}
        </div>
    </Wrapper>
}
const Wrapper = styled.section`
    .service-container {
        display: flex;
        justify-content: center;
        align-items: center;
        h3 {
            font-family: 'Playlist Script';
            font-size: 2.5rem;
            color: var(--clr-primary-1);
            letter-spacing: var(--spacing);
        }
    }
    .services-center {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 5rem;
        .service-content {
            margin-top: 4rem;
            width: 20%;
            height: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            border-radius: 10px;
            padding: 2rem;
            border-radius: 50px;
            background: var(--clr-background-1);
            color: var(--clr-primary-5);
            box-shadow:  -11px 11px 22px #a4a4a4,
                        11px -11px 22px #ffffff;
            transition: var(--transition);
            overflow: hidden;
            .icon {
                font-size: 2rem;
            }
            :hover {
                transform: translateY(-10%);
                background: var(--clr-primary-5);
                color: var(--clr-background-1)
            }
        }
    }
    @media (max-width: 1240px) {
        .services-center {
            margin: 0 1rem;
            align-items: center;
            gap: 2rem;
            .service-content {
                width: 30%;
                height: 250px;
                justify-content:center;
                p {
                    display: none;
                }
            }
        }
    }
    @media (max-width: 480px){
        display: none;
    }
`
export default Services