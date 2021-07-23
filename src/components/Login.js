import React, {useRef,useState} from 'react'
import styled from 'styled-components'
import {useAuth} from "../context/auth_context"
import { useHistory } from 'react-router-dom';
export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login,toLogin} = useAuth();
    const [error,setError] = useState('')
    const [loading,setLoading]= useState(false)
    const history = useHistory();
    
    const handleSubmit =(e) => {
        e.preventDefault();
        try{
            setError('')
            setLoading(true)
            login(emailRef.current.value,passwordRef.current.value)
            history.push('/')
        }catch{
            setError('failed to sign in')
        }
        setLoading(false)
    }
    return (
        <Wrapper style={toLogin ? {display:"flex"}:{display:"none"}}>
            <h1>Login</h1>
            {error && <div className="danger"><p>{error}</p></div>}
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="login-form_group" id="login-email">
                    <label htmlFor="email" className="login-form_label">Email:test@abc.com</label>
                    <input type="email" className="login-form_input" ref={emailRef} required></input>
                </div>
                <div className="login-form_group" id="login-password">
                    <label htmlFor="password" className="login-form_label">Password:123456</label>
                    <input type="password" className="login-form_input" ref={passwordRef} required></input>
                </div>
                <button disabled={loading} type="submit" className="btn">Login</button>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-size: 4rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
        font-family: "Playlist Script";
        text-transform: capitalize;
        color: var(--clr-primary-5);
        font-weight:400;
    }
    .form-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;
        margin-left: 1rem;
        width: 100%;
    }
    .login-form_input {
        width: 80%;
        height: 2.5rem;
        margin: 0.5rem 0 1.5rem 2.5rem;
        display: block;
        padding: 1rem 1rem;
        border-radius: 20px;
        border-color:#bebebe;
        transition: all 0.3s ease-in;
        :focus {
            outline: none;
            transform: scale(1.02);
            border-color: var(--clr-primary-5);
        }
    }
    .login-form_label {
        display: inline;
        margin-left:2.5rem;
    }
    .btn {
        font-size: 1.25rem;
        border-radius: 25px;
        text-transform: none;
        width:80%;
        margin-left: 2.5rem;
        margin-top: 1rem;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }
    .danger {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height:3rem;
        background:#f8d7da;
        color:#842029;
        border-radius: 10px;
        font-size: 1rem;
        text-transform: capitalize;
    }
    @media(max-width:1023px){
        .form-container {
            margin-left: 3.5rem;
        }
    }
    @media(max-width: 767px){
        h1 {
            font-size:3rem;
            margin-top: 1.5rem;
            margin-bottom: 2rem;
        }
        .form-container {
            margin-bottom: 1.5rem;
        }
        .btn {
            margin-bottom: 1rem;

        }
    }
`
