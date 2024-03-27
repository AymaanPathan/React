import  {  useState } from 'react'
import { Link } from 'react-router-dom'
function Register() {
  const [formData,setFormData] = useState({email:'',passWord:''});



  const changeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const register = async () => {
      console.log('Register Function Executed', formData);
      let responseData;
    await fetch('http://localhost:3000/register',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({email:formData.email,password:formData.passWord}),
     }).then((response)=>response.json()).then((data)=>responseData=data);
     if(responseData.success) {
      localStorage.setItem('Secret_Token',responseData.Token);
      window.location.replace('/')
     } else {
      alert(responseData.errors)
     }
  }    
  


  return (
    <div className='flex justify-center h-screen'>
    <div className='mt-12 grid min-w-[40%] h-96 rounded-md bg-[#EEEEEE] border shadow-2xl border-[#F9CB9C] '>
        <div className='flex items-center justify-center'>
            <div className='flex flex-col mt-6 gap-6' >
                <h1 className='text-center text-4xl text-gray-600 mb-7'>Register to Your Account</h1>
                <div className='email gap-4 flex'>
                <label htmlFor="">Email:</label>
                <input type="email" onChange={changeHandler} name='email' value={formData.email} placeholder='james@gmail.com' className='outline-none bg-[#EEEEEE]' />
                </div> 
                <div className='passowrd gap-4 flex'>
                <label htmlFor="">Password:</label>
                <input type="password" onChange={changeHandler} name='passWord' value={formData.passWord} className='outline-none bg-[#EEEEEE]' placeholder='Your Password....' />
                </div>
                <div>

                <p className='mt-8 text-gray-600'>Already Have an Account?<Link className='text-red-500 m-1' to={'/login'}>
                 Login
                  </Link></p>
              
                <button onClick={register} className='hover:bg-red-400 duration-500 bg-[#F9CB9C] w-full rounded-md mt-6 text-white py-2 ' >Register</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register