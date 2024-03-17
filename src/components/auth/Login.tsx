import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/** Represents user credentials. */
interface Credentials {
  /** The username associated with the credentials. */
  username: string

  /** The password associated with the credentials. */
  password: string

  /** Indicates whether the password should be displayed or not. */
  showPassword: boolean
}

/** Represents a login component. */
export const Login = () => {
  // Initialize state for credentials
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
    showPassword: false
  })
  const navigate = useNavigate()

  /**
   * Handles changes in the input fields.
   * @param e - The event object representing the change.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Handles a submition of the input fields.
   * @param e - The event object representing the form submition
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const login = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })

        if (response.ok) {
          const { token } = ((await response.json()) as { tokenData: { token: string } }).tokenData

          document.cookie = `auth=${token}; path=/`

          navigate('/')
        }
      } catch (error) {
        if (import.meta.env.DEV) console.error(error)
      }
    }

    void login()
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
              minLength={8}
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
