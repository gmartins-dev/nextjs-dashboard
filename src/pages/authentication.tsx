import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Authentication(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'logged' | 'register'>('logged')

  return (
    <div>
      <h1>authhhh</h1>
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
    </div>
  )
}