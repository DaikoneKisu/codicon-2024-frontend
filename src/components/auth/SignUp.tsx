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
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="max-w-md rounded-lg bg-white px-8 py-6 shadow-md">
          <h1 className="mb-4 text-center text-2xl font-bold">Create an Account</h1>
          <form onSubmit={handleSubmit} action="#">
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="username"
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <a
                href="#"
                className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Log In{' '}
              </a>
            </div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
