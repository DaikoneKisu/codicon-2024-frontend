import { ChangeEvent, FormEvent, useState } from 'react'
// import { Link } from "react-router-dom" this import will be used for the navigation
import '../../index.css'

/** Represents user credentials. */
interface NewAccountInfo {
  /** The username for the new account*/
  username: string

  /** The email used for the new account*/
  email: string

  /** The password used for the new account*/
  password: string
}

/** Represents a login component. */
export const SignUp = () => {
  // Initialize state for credentials
  const [newAccountInfo, setNewAccountInfo] = useState<NewAccountInfo>({
    username: '',
    email: '',
    password: ''
  })

  /**
   * Handles changes in the input fields.
   * @param e - The event object representing the change.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewAccountInfo({
      ...newAccountInfo,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Handles a submition of the input fields.
   * @param e - The event object representing the form submition
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('signed up succesfully')
  }

  return (
    <main className="m-5 flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex w-fit flex-col items-center border border-black p-5">
          <h1>Sign Up</h1>
          <fieldset className="my-4 rounded border border-black p-3">
            <legend>Username</legend>
            <input
              className="border-b border-black"
              type="text"
              name="username"
              placeholder="username"
              value={newAccountInfo.username}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </fieldset>
          <fieldset className="my-4 rounded border border-black p-3">
            <legend>Email</legend>
            <input
              className="border-b border-black"
              type="text"
              name="email"
              placeholder="johndoe@mail.com"
              value={newAccountInfo.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </fieldset>
          <fieldset className="my-4 rounded border border-black p-3">
            <legend>Password</legend>
            <input
              className="border-b border-black"
              type="password"
              name="password"
              placeholder="Type your password"
              value={newAccountInfo.password}
              minLength={8}
              maxLength={32}
              onChange={handleChange}
              required
            />
          </fieldset>
          <span className="my-3 flex gap-5">
            <button type="submit">Sign Up</button>
          </span>
        </div>
      </form>
    </main>
  )
}
