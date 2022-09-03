import { createContext, useState } from 'react'
import firebase from '../../firebase/config.js'
import User from '../../model/User.js'

interface AuthContextProps {
  user?: User
  loginGoogle?: () => Promise<void>

}

const AuthContext = createContext<AuthContextProps>({})

// async function userFormatted(userFireebase: firebase.User): Promise<User> {
//   const token = await userFireebase.getIdToken()
//   return {
//     uid: userFireebase.uid,
//     name: userFireebase.displayName,
//     email: userFireebase.email,
//     token,
//     provider: userFireebase.providerData[0].providerId,
//     imgUrl: userFireebase.photoURL
//   }
// }



export function AuthProvider(props) {

  const [user, setUser] = useState<User>(null)

  async function loginGoogle() {
    console.log("testeee loginnn gooogllllee")
  }

  return(
    <AuthContext.Provider value={{
      user,
      loginGoogle
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext