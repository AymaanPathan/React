/* eslint-disable react/no-unescaped-entities */
import {useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const [formData,setFormData] = useState({email:'',password:''});
  

const onChange = (e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
} 

const login = async () => {
  console.log('Login Executed', formData);
  let responseData;
  await fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      Accept: 'application/json', // Corrected header value
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: formData.email, password: formData.password }),
  })
    .then((response) => response.json())
    .then((data) => (responseData = data));
  if (responseData.success) {
    localStorage.setItem('Secret_Token', responseData.Token);
    window.location.replace('/');
  } else {
    alert(responseData.errors);
  }
};


  return  (
    <div className='flex justify-center h-screen'>
      <div className='mt-12 grid min-w-[40%] h-96 rounded-md bg-[#EEEEEE] border shadow-2xl border-[#edd7c0] '>
        <div className='flex items-center justify-center'>
          <div className='flex flex-col mt-6 gap-6'>
            <h1 className='text-center text-4xl text-gray-600 mb-7'>Login To Your Account</h1>
            <div className='email gap-4 flex'>
              <label htmlFor=''>Email:</label>
              <input
                onChange={onChange}
                value={formData.email}
                name='email'
                type='email'
                placeholder='james@gmail.com'
                className='outline-none bg-[#EEEEEE]'
              />
            </div>
            <div className='passowrd gap-4 flex'>
              <label htmlFor=''>Password:</label>
              <input
                onChange={onChange}
                value={formData.password}
                name='password'
                type='password'
                className='outline-none bg-[#EEEEEE]'
                placeholder='Your Password....'
              />
            </div>
            <div>
              <p className='mt-8 text-gray-600'>
                Don't Have an Account?
                <Link className='text-red-500 m-1' to={'/register'}>
                  Register
                </Link>
              </p>
              <button
                onClick={login}
                className='hover:bg-red-400 duration-500 bg-[#F9CB9C] w-full rounded-md mt-6 text-white py-2'
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login