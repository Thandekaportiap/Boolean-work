import React from 'react'


import { useForm, ValidationError } from '@formspree/react';

const contact = () => {
    const [state, handleSubmit] = useForm("mdoqydzj");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
    <>
     <div style={{backgroundImage: `url(${require("../assets/Contact.jpg")})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100%",height:"300px"}}>
      
      <div style={{position:"absolute", top:"30%", left:"40%"}}><h1 style={{fontWeight:"bold", fontSize:"800"}}>Contact-Me</h1></div>
    </div>
    <div style={{display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
     <form onSubmit={handleSubmit} style={{display:"flex",
        flexDirection:"column",
        width:"40%",
        padding:"26px"
     }}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea placeholder='your message here'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    </>
  )
}

export default contact
