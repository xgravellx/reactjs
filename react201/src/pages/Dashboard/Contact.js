import React from 'react'
import { useFormik } from 'formik';

const Contact = () => {

  const {handleSubmit, handleChange, values, isSubmitting} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000))
      console.group(values);
      bag.resetForm();
    },
  });

  return (
    <div>
      <h2>Contact</h2>

      <h1>Sign Up</h1>
          
            <form onSubmit={values.handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input 
                id="firstName" 
                name="firstName" 
                placeholder="Jane"
                value={values.firstName} 
                onChange={values.handleChange('firstName')}  
              />

              <label htmlFor="lastName">Last Name</label>
              <input 
                id="lastName" 
                name="lastName" 
                placeholder="Doe"
                value={values.lastName} 
                onChange={values.handleChange('surname')} />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="jane@acme.com"
                value={values.email}
                onChange={values.handleChange('email')}
              />

              <label htmlFor="mesaj">Mesaj</label>
              <textarea
                id="message"
                name="mesaj"
                placeholder="Mesajınızı yazınız"
                value={values.me}
              />

              <button disabled={isSubmitting} type="submit">Submit</button>
            </form>

    </div>
  )
}

export default Contact