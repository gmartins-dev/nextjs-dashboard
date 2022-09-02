import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarning } from "../components/icons/index";

export default function Authentication(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'logged' | 'register'>('logged')
  const [error, setError] = useState(null)

  function handleSubmit() {
    if(status === 'logged'){
      console.log("loginnn")
      showError("Login errorrrr")
    } else{
      console.log("registerrrr")
      showError("Register errorrrr")
    }
  }

  function showError(errorMessage, time = 5000){
    setError(errorMessage)
    setTimeout(() => setError(null), time)
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="md:w-1/2 hidden md:block lg:w-2/3">
        <img 
        src="https://source.unsplash.com/random" 
        alt="Imagem tela auth"
        className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-2/3">
        <h1 className="mb-5 text-3xl font-bold">
          {status === 'logged' ? "Please login to enter" : "Please register your account"}
        </h1>
      {error ? ( 
      <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
        {IconWarning()}
        <span className="ml-3 text-sm">{error}</span>
      </div>
      ):false}
     
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

        <button onClick={handleSubmit} className='w-full px-4 py-3 mt-6 text-white bg-indigo-500 rounded-lg hover:bg-indigo-400'>
          {status === 'logged' ? "Enter" : "Register"}
        </button>
        <hr className="w-full my-6 border-gray-300"/>
        <button onClick={handleSubmit} className='w-full px-4 py-3 text-white bg-red-500 rounded-lg hover:bg-red-400'>
          {status === 'logged' ? "Enter with Google" : "Register with Google"}
        </button>
        {status === "logged" ? (
          <p className="mt-8">
            New here? create a new account.
            <a onClick={() => setStatus('register')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
            &nbsp;Register
            </a>
          </p>
        ):(
          <p className="mt-8">
          Already have a account?
          <a onClick={() => setStatus('logged')} className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
          &nbsp;Login
          </a>
        </p>
        )}
      </div>
    </div>
  )
}