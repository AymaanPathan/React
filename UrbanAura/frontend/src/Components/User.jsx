import { Link } from "react-router-dom"
import { useState } from "react"
function User() {
      const [menu,setMenu] = useState('shop')
  return (
    <div className="user flex gap-4">
             <Link className="login-btn" onClick={()=>setMenu('login')} to={'/login'}><button> {menu==='login'?<hr className='hr' /> :""} Login</button></Link>
           <Link className="reg-btn" onClick={()=>setMenu('register')} to={'/register'}><button> {menu==='register'?<hr className='hr' /> :""} Register</button></Link>
    </div>
  )
}

export default User