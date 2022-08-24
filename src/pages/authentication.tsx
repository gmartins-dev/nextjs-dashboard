import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Authentication(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'logged' | 'register'>('logged')

  function handleSubmit() {
    if(status === 'logged'){
      console.log("loginnn")
    } else{
      console.log("registerrrr")
    }
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="w-1/2">
        <h1 className="text-xl font-bold mb-5">
          {status === 'logged' ? "Please login to enter" : "Please register your account"}
        </h1>
        <AuthInput
          label="Email"
          type="email"
          value={email}
          newValue={setEmail}
          required={true}
        />
          <AuthInput
          label="Password"
          type="password"
          value={password}
          required={true}
          newValue={setPassword}
        />

        <button onClick={handleSubmit} className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6'>
          {status === 'logged' ? "Enter" : "Register"}
        </button>
        <hr className="my-6 border-gray-300 w-full"/>
        <button onClick={handleSubmit} className='w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3'>
          {status === 'logged' ? "Enter with Google" : "Register with Google"}
        </button>
      </div>
    </div>
  )
}