import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from "react-router-dom" this import will be used for the navigation

/** Represents user credentials. */
interface NewAccountInfo {
  /** The username for the new account*/
  username: string

  /** The email used for the new account*/
  email: string

  /** The password used for the new account*/
  password: string
}

/** Represents a signup component. */
export const SignUp = () => {
  // Initialize state for credentials
  const [newAccountInfo, setNewAccountInfo] = useState<NewAccountInfo>({
    username: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

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

    const register = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newAccountInfo)
        })

        if (response.ok) {
          navigate('/login')
        }
      } catch (error) {
        if (import.meta.env.DEV) console.error(error)
      }
    }

    void register()
  }

  return (
    <main className="flex justify-center bg-backgroundColor">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="w-96 rounded-lg bg-white px-8 py-6 shadow-md">
          <h1 className="mb-4 text-center text-2xl font-bold">Registrate</h1>

          <form onSubmit={handleSubmit} action="#">
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                name="email"
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
                Usuario
              </label>
              <input
                name="username"
                onChange={handleChange}
                type="text"
                id="username"
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="Nombre de Usuario"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                id="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                placeholder="********"
                required
              />
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-primaryColor px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
