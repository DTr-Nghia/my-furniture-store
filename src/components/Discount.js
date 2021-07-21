import React from 'react'
import styled from 'styled-components'

const Discount = () => {
    return <Wrapper>
      <div className="title">
        <h3>Discount</h3>
        <div className="underline"></div>
      </div>
    <div className="section-center">
      <h4>Join our newsletter and get 20% off</h4>
      <div className="content">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam corporis neque perspiciatis, laborum dolorem dolores? Dicta numquam id ea.
        </p>
        <form  
                className="contact-form" 
                action="https://formspree.io/f/xjvjwzvl"
                method="POST">
          <input type="email" className="form-input" placeholder="enter email" name="_replyto"/>
          <button className="submit-btn" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
height: 500px;
padding: 5rem 0;
  .title {
    margin-bottom: 5rem;
  }
  h3 {
    text-transform: none;
    color: var(--clr-primary-1);
    font-family: 'Playlist Script';
    letter-spacing: var(--spacing);
    font-size: 2.5rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-primary-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-background-1);
  }
  .submit-btn:hover {
    color: var(--clr-black);
    background: var(--clr-primary-8);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 10rem 0;
  }
`
export default Discount