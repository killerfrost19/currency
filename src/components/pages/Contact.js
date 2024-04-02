import React, { useState } from 'react'
import './Contact.css'

export const Contact = () => {
     const [email, setEmail]=useState(null);
     const [mess, setMess] =useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setEmail("");
        setMess("");
    }

const emailhandleClick=(e)=>{
       setEmail(e.target.value)
}

const messageClick=(e)=>{
    setMess(e.target.value);
}

  return (
    <div className='entire'>
        <p className='heading'>CONTACT US</p>
        <form onSubmit={handleSubmit} className='form'>
            <label>Email :</label>
            <input type='email' onChange={emailhandleClick} value={email}/>
            <label>Message :</label>
            <input type='text' onChange={messageClick} value={mess}/>
            <button type='submit'>Submit</button>
        </form>
        </div>
  )
}

