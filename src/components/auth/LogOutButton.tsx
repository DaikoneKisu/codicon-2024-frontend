import { useNavigate } from 'react-router-dom'

export const LogOutButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

    navigate('/')
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Cerrar sesión
    </button>
  )
}
