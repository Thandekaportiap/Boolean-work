import React from 'react'

import { useForm, ValidationError } from '@formspree/react';

const contact = () => {
    const [state, handleSubmit] = useForm("mdoqydzj");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
    <>
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
