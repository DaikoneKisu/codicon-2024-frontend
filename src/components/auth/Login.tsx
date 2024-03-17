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

  return (
    <main className="m-5 flex justify-center bg-backgroundColor">
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="w-96 rounded-lg bg-white px-8 py-6 shadow-md">
          <h1 className="mb-4 text-center text-2xl font-bold">Inicia Sesion</h1>

          <form onSubmit={handleSubmit} action="#">
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
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
