import React,{useRef,useState} from 'react'
import styled from 'styled-components'
import {useAuth} from "../context/auth_context"
import {useHistory} from "react-router-dom"
export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup,toSignUp} = useAuth();
    const [error,setError] = useState('')
    const [loading,setLoading]= useState(false)
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value ){
            return setError("Password do not match")
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value,passwordConfirmRef.current.value)
            history.push('/')
        }catch{
            setError('failed to create an account')
        }
        setLoading(false)
    }
    return (
                <Wrapper style={toSignUp ? {display:"flex"}:{display:"none"}}>
                    <h1>Sign Up</h1>
                    {error && <div className="danger"><p>{error}</p></div>}
                    <form className="form-container" onSubmit={handleSubmit}>
                        <div className="signup-form_group" id="email">
                            <label htmlFor="email" className="signup-form_label">Email</label>
                            <input type="email" className="signup-form_input" ref={emailRef} required></input>
                        </div>
                        <div className="signup-form_group" id="password">
                            <label htmlFor="password" className="signup-form_label">Password</label>
                            <input type="password" className="signup-form_input" ref={passwordRef} required></input>
                        </div>
                        <div className="signup-form_group" id="password-confirma">
                            <label htmlFor="password" className="signup-form_label">Password confirmation</label>
                            <input type="password" className="signup-form_input" ref={passwordConfirmRef} required></input>
                        </div>
                        <button disabled={loading} type="submit" className="btn" >Sign up</button>
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
        margin-bottom: 2rem;
        width: 100%;
    }
    .signup-form_input {
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
    .signup-form_label {
        display: inline;
        margin-left:2.5rem;
    }
    .btn {
        font-size: 1.25rem;
        border-radius: 25px;
        text-transform: none;
        width:80%;
        margin-top: 0.5rem;
        margin-left: 2.5rem;
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
    @media(max-width: 768px){
        h1 {
            font-size:3rem;
            margin-top: 1.5rem;
            margin-bottom: 2rem;
        }
        .form-container {
            margin-bottom: 1rem;
            margin-left: 1.5rem;
        }
        .btn {
            margin-bottom: 1rem;
        }
    }
`

