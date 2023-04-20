import { useState } from "react"
import React from 'react'
import { signUp } from "../../utilities/users-service";

// Thank you, Ken
export default function SignUpForm({estUser}) {
  const [formData, setFormData] = useState({
    name: '',  
    email: '',
    phoneNum: '',
    password: '',
    confirm: '',
    error: ''
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const data = {...formData};
      // remove data from submission not needed in user info
      delete data.confirm;
      delete data.error;
      const user = await signUp(data);
      estUser(user);
    } catch {
      setFormData({
        ...formData,
        error: 'One of your entries does not meet our requirements. Please double check your email.'
      });
    }
  }

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  const disable = formData.password !== formData.confirm;

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} required />
          <label>Email</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} required />
          <label>Phone Number</label>
            <input type="number" name='phoneNum' value={formData.phoneNum} onChange={handleChange} required />
          <label>Password</label>
            <input type="password" name='password' value={formData.password} onChange={handleChange} required />
          <label>Confirm Password</label>
            <input type="password" name='confirm' value={formData.confirm} onChange={handleChange} required />
          <button type='submit' disabled={disable}>Sign Up</button>
        </form>
      </div>
      <p className="error">&nbsp;{formData.error}</p>
    </div>
  );
}
