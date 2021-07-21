import React from 'react'
import styled from 'styled-components';
import { Login,Signup,UpdatePassword } from '../components';
import imgBackground from "../assets/bcg-login.jpg"
import {useAuth} from '../context/auth_context'
const LoginPage = () => {
    const {toLogin,toSignUp,toRecover,changetoLogin,changetoSignup,changetoRecover} = useAuth()
    return(
        <main>
            <Wrapper className="section section-center">
            <div className="card_big">
                <div className="card_left">
                    <button type="button" className="active-btn" onClick={()=>changetoLogin()}>Login</button>
                    <button type="button" className="active-btn" onClick={()=>changetoSignup()}>Sign up</button>
                    <button type="button" className="active-btn" onClick={()=>changetoRecover()}>Password Recovery</button>
                </div>
                <div className="card_right">
                    <Login ></Login>
                    <Signup></Signup>
                    <UpdatePassword></UpdatePassword>
                    { !toSignUp ? <button type="button" className="show-btn" onClick={()=>changetoSignup()}>Sign up</button>:null}
                    {!toRecover && !toSignUp ?<button type="button" className="show-btn" onClick={()=>changetoRecover()}>Forgot your password ?</button>:null}
                    { !toLogin ? <button type="button" className="show-btn" onClick={()=>changetoLogin()}>Back to Login</button>: null}
                </div>
            </div>
            </Wrapper>
        </main>

    ) 
}
const Wrapper = styled.div`
height: 90vh;
padding: 2rem 0;
.card_big {
    display: flex;
    justify-content:center;
    align-items: center;
    width:100%;
    height: 80vh;
    box-shadow: 0 0 10px 5px #bebebe;
}
.card_left {
    width: 60%;
    height:100%;
    background: url(${imgBackground}) ;
    background-size: cover;
    color:var(--black);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    transform: translateX(0);
    :before{
        content:'';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
        background: #ffffff;
    }
}
.card_right {
    width: 40%;
    height:100%;
    background: #ffffff;
}
.active-btn{
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--black);
    font-size: 3rem;
    font-family:"Playlist Script";
    letter-spacing:0.2rem;
    transition: var(--transition);
    z-index: 3;
    :hover{
        color: var(--clr-primary-5);
        letter-spacing: 0.4rem;
    }
}
.show-btn{
    display:none;
}
@media (max-width: 768px) {
    .show-btn{
        display:block;
        margin-bottom: 10px;
        background-color: transparent;
        border: transparent;
        cursor: pointer;
        font-weight: 600;
        color: var(--clr-primary-5);
    }
    .card_right{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .card_left{
        display:none;
    }
}
`
export default LoginPage