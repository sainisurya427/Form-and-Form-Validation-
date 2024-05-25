import React, { useState, useEffect } from 'react'

export default function Apps() {
    const initialValues = {username :"",email:" ", password : "",  };
    const [ formValues, setFormValues] = useState({initialValues});
    const [ formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) =>{
        const { name, value}=e.target;
        setFormValues({...formValues,[name]:value});
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors( validate (formValues));
        setIsSubmit(true);
    };
    useEffect(()=>{
        console.log(formValues);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])

    const validate = (values) =>{
        const errors ={};
        const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
        if(!values.username){
            errors.username = "Username is required";
        }
        if(!values.email){
            errors.email = "Email is required";
        } else if(!regex.test(values.email)){
            errors.email = " write right email here";
        }
        if(!values.password){
            errors. password = "password is required";
        }
        else if( values.password.length < 6){
            errors.email = "password must be more than  6 characters";
        }
        else if( values.password.length > 8){
            errors.email = "password is not more than  8 characters";
        }
        return errors;
    }
  return (
    <div className='container'>
        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='ui massage success'>Signed successfully</div>)
        :(
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider">
            <div className="ui form">
                <div className="filed">
                    <label htmlFor="username">Username</label>
                    <input type="text" 
                    name="username" 
                    placeholder='Username' 
                    id='username' 
                    value={formValues.username} 
                    onChange={handleChange}/>
                </div>
                <p>{formErrors.username}</p>
                <div className="filed">
                    <label htmlFor="Email">Email</label>
                    <input type="email"
                    name="email"
                    placeholder='Email'
                    id='Email'  
                    value={formValues.email}
                    onChange={handleChange} />
                </div>
                <p>{formErrors.email}</p>
                <div className="filed">
                    <label htmlFor="pass">Password</label>
                    <input type="password" name="password" 
                    placeholder='Password'
                    id='pass'
                    value={formValues.password} 
                    onChange={handleChange}/>
                </div>
                <p>{formErrors.password}</p>
                <button className='fluid ui button blue'>Submit</button>
            </div>
        </div>
      </form>
    </div>
  );
}
 
