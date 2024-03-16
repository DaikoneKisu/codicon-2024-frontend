import { ChangeEvent, FormEvent, useState } from 'react'
// import { Link } from "react-router-dom" this import will be used for the navigation
import '../../index.css'

export const Login = () => {
  //Credentials type for use state
  interface Credentials {
    username: string
    password: string
    showPassword: boolean
  }

  //initialize navigate function from react-router-dom (const navigate = useNavigate())

  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
    showPassword: false
  })

  //handle change function for input fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //later add the navigate() function from react-router-dom
    // add validation for the credentials
    console.log('auntenticated')
  }

  /* const handleShowPassword = () => {
     setCredentials({
       ...credentials,
       showPassword: !credentials.showPassword
     })    
   } this will be used for better ux/ui
  */

  return (
    <main className="m-5 flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex w-fit flex-col items-center border border-black p-5">
          <h1>Login</h1>
          <fieldset className="my-4 rounded border border-black p-3">
            <legend>Username</legend>
            {/*<span className="material-symbols-outlined float-left">person</span> */}
            <input
              className="border-b border-black"
              type="text"
              name="username"
              placeholder="karthuspentakill"
              value={credentials.username}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </fieldset>
          <fieldset className="flex rounded border border-black p-3">
            <legend>Password</legend>
            {/*<span className="material-symbols-outlined">lock</span>*/}
            <input
              className="border-b border-black"
              type={credentials.showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Type your password"
              value={credentials.password}
              minLength={9}
              maxLength={32}
              onChange={handleChange}
              required
            />
            {/* credentials.showPassword ? 
            <button type="button" className="material-symbols-outlined" onClick={ handleShowPassword } >visibility</button> : 
  <button type="button" className="material-symbols-outlined" onClick={ handleShowPassword } >visibility_off</button> */}
          </fieldset>
          <span className="my-3 flex gap-5">
            <button type="submit">Sign In</button>
            {/* {<Link to="/"> <button >Sign Up</button> </Link>} */}
          </span>
        </div>
      </form>
    </main>
  )
}
