import Checkbox from '@mui/material/Checkbox';
import { grey } from '@mui/material/colors';
import { useState, useEffect } from 'react';

type formType = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const [form, setForm] = useState<formType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: any) => {
    // console.log(e);
    setForm((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const onSummit = () => {
    localStorage.setItem('registerMember', JSON.stringify(form))
  }

  useEffect(() => {
    console.log(form);
  }, [form])
  return (
    <div className="h-full w-full flex flex-col items-center justify-center font-mono ">
      <div className=" w-[800px] h-[700px] bg-slate-800 rounded-2xl drop-shadow-xl flex flex-col justify-center items-center p-7 mobile:w-[340px] font-semibold">
        <div className="pb-7 flex justify-center">
          <p className=" text-fuchsia-300 font-normal text-[40px] mobile:text-[36px]">Sign Up</p>
        </div>
        <form onSubmit={onSummit} className=" text-slate-400 flex flex-col w-[430px] mobile:w-[300px]">
          <div className=" flex justify-between mb-2 mobile:flex-col">
            <div className=" flex flex-col w-[48%] mobile:w-[100%]">
              <label htmlFor="first name" className="">First Name</label>
              <input name='firstName' type="text" placeholder="First Name" className="p-3 rounded-lg focus:outline-none" onChange={handleChange} />
            </div>

            <div className=" flex flex-col w-[48%] mobile:w-[100%]">
              <label htmlFor="last name">Last Name</label>
              <input name='lastName' type="text" placeholder="Last Name" className="p-3 rounded-lg focus:outline-none" onChange={handleChange} />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input name='email' type="text" placeholder="Email" className="p-3 rounded-lg mb-2 focus:outline-none" onChange={handleChange} />

          <label htmlFor="password">Password</label>
          <input name='password' type="password" placeholder="Password" className="p-3 rounded-lg mb-2 focus:outline-none" onChange={handleChange} />

          <label htmlFor="password">Confirm Password</label>
          <input name='confirmPassword' type="password" placeholder="Confirm Password" className="p-3 rounded-lg focus:outline-none" onChange={handleChange} />

          <div className=' flex mt-2'>
            <Checkbox defaultChecked sx={{
              color: grey[300], '&.Mui-checked':
                { color: grey[200] }
            }} />
            <p className=' flex items-center'>Accept Terms and Conditions</p>
          </div>

          <div className="flex justify-center flex-col items-center">
            <button className=" bg-fuchsia-400 rounded-xl p-3 mt-10 mb-5 text-slate-900 font-semibold w-[150px] text-xl hover:bg-fuchsia-600">SIGN UP</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register