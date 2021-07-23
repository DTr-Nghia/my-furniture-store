import React,{useRef,useState} from 'react'
import styled from 'styled-components'
import { useAuth } from '../context/auth_context';
export default function Updatepassword() {
    const emailRef = useRef();
    const {resetEmail,toRecover} = useAuth();
    const [error,setError] = useState('')
    const [success,setSuccess] =useState('')
    const [loading,setLoading]= useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setError('')
            setSuccess('Check your email')
            setLoading(true)
            await resetEmail(emailRef.current.value)
        }catch{
            setError('failed to create an account')
        }
        setLoading(false)
    }
    return (
        <Wrapper style={toRecover ? {display:"flex"}:{display:"none"}}>
            <h1>Recover Password</h1>
            {error && <div className="danger"><p>{error}</p></div>}
            {success && <div className="notify"><p>{success}</p></div>}
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="recover-form_group" id="reset-password">
                    <label htmlFor="email" className="recover-form_label">Email</label>
                    <input type="email" className="recover-form_input"  ref={emailRef} required></input>
                </div>
            <button disabled={loading} type="submit" className="btn">Reset password</button>
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
        margin-left: 1rem;
        width: 100%;
    }
    .recover-form_input {
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
    .recover-form_label {
        display: inline;
        margin-left:2.5rem;
    }
    .btn {
        font-size: 1.25rem;
        border-radius: 25px;
        text-transform: none;
        width:80%;
        margin-left: 2.5rem;
        margin-top:1.5rem;
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
    .notify{
        display:flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height:3rem;
        background:#edf7ed;
        color:#1e4620;
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
            margin-bottom: 1rem;
        }
        .btn {
            margin-bottom: 1rem;

        }
    }
`
