import { useState } from "react"
import { Link ,Navigate} from "react-router-dom"
import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';

const Login = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const isLogin = localStorage.getItem('email')
  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e: any) => {
    setPassword(e.target.value)
  }
  const onSubmit = (e: any) => {
    localStorage.setItem('email',email)
    // const member = JSON.parse(localStorage.getItem('registerMember') || "")
    
    // if (email === member?.email && password === member?.password) {
    //   localStorage.setItem(`loginSuccess`, 'true')
    //   console.log("login success");
    // } else {
    //   localStorage.setItem(`loginSuccess`, 'false')
    //   console.log('login fail');
    // }
  }

  if(isLogin){
    return <Navigate to={`/`}/>
  }
  
  return (
    <form onSubmit={onSubmit} className="h-full w-full flex flex-col items-center justify-center font-mono ">
      <div className=" w-[600px] h-[600px] bg-slate-800 rounded-2xl drop-shadow-xl flex flex-col justify-center items-center p-7 mobile:w-[340px] font-semibold">
        <div className="pb-7 flex justify-center">
          <p className=" text-fuchsia-300 font-samibold text-[40px] mobile:text-[36px]">Sign in</p>
        </div>
        <div className=" flex flex-col justify-center text-slate-400 ">
          <label htmlFor="email">Email</label>
          <input type="text" value={email} name="username" placeholder="Your Email" className=" w-[400px] p-2 pl-5 rounded-xl my-2 focus:ring focus:ring-fuchsia-400 focus:outline-none mobile:w-[300px]" onChange={handleChangeEmail} />
          <label htmlFor="password">Password</label>
          <input type="password" value={password} name="password" placeholder="Your Password" className=" w-[400px] p-2 pl-5 rounded-xl my-2 focus:ring focus:ring-fuchsia-400 focus:outline-none mobile:w-[300px] " onChange={handleChangePassword} />

          <div className=' flex mt-2'>
            <Checkbox sx={{
              color: grey[300], '&.Mui-checked':
                { color: grey[200] }
            }} />
            <p className=' flex items-center'>Remember Me</p>
          </div>
        </div>
        <div className=" flex justify-center flex-col items-center mb-5">
          <button type="submit" className=" bg-fuchsia-400 rounded-xl p-3 mt-7 mb-3 text-slate-900 font-semibold w-[150px] text-xl hover:bg-fuchsia-600">SIGN IN</button>
          <p className="text-slate-400">or</p>
          <Link to={`/register`} className="text-slate-400 text-lg pt-2 hover:text-fuchsia-400">Sign up</Link>
        </div>
      </div>
    </form>
  )
}

export default Login