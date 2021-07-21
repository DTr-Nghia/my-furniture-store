import React from 'react'
import styled from 'styled-components'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
    return <Wrapper>
        <h5>&copy;{new Date().getFullYear()}
            <span> Nghia's house</span>
        </h5>
            <h5>All rights reserved</h5>
        <div className="contact">
            Contact me:  <a href="https://www.facebook.com/nghia.trung.37819"><AiOutlineFacebook/></a>
            <a href="https://www.instagram.com/nghiado072/"><AiOutlineInstagram/></a>
            <a href="https://github.com/DTr-Nghia"><AiOutlineGithub/></a>
        </div>
    </Wrapper>
}
const Wrapper = styled.div`
    height: 6rem;
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: var(--clr-primary-6);
    h5{
        margin-left:2rem;
        span {
            color: black;
        }        
    }
    .contact {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right:2rem;
        svg {
                height: 1.5rem;
                width: 1.5rem;
                color: var(--clr-black);
                margin-left: 0.75rem
            }
    }
    @media (max-width: 776px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .contact {
            margin-right: 0;
        }
  }
`
export default Footer