import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({title,product}) => {
    return <Wrapper>
        <h3>
            <div >
                <Link to='/'>Home</Link>{product && <Link to="/products">/ Products</Link>} / {title}
            </div>
        </h3>
    </Wrapper>
}
const Wrapper = styled.section`
  background: var(--clr-primary-6);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  .section-center {
      margin-left: 5rem;
  }

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  `
export default PageHero