import React from 'react'
import styled from 'styled-components'
import {PageHero} from '../components'
import aboutImg from '../assets/herobcg1.jpg'

const AboutPage = () => {
    return <main>
        <PageHero title="about" ></PageHero>
        <Wrapper className="page section section-center">
            <img src={aboutImg} alt="big room" />
            <article>
                <div className="title">
                    <h2>our story</h2>
                    <div className="underline"></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aliquam et necessitatibus harum architecto itaque iste quisquam corporis eaque similique nam, enim ipsam cupiditate molestias ut tempore laboriosam dolore? Sequi labore quas ratione vero numquam quo eius, quia ad officia, accusamus maiores ipsum neque illo vel explicabo molestias dicta? Ipsam.
        </p>
            </article>
        </Wrapper>
    </main>
}
const Wrapper = styled.section`
    display: grid;
    gap: 4rem;
    img {
        width: 100%;
        display: block;
        border-radius: var(--radius);
        height: 500px;
        object-fit: cover;
    }
    p {
        line-height: 2;
        max-width: 45em;
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--clr-primary-5);
        font-size: 1rem;
    }
    .title {
        text-align: left;
        font-family: "Playlist Script";
    }
    .underline {
        margin-left: 0;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`
export default AboutPage