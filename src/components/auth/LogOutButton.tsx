import { useNavigate } from 'react-router-dom'

export const LogOutButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

    navigate('/')
    location.reload()
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="w-full justify-center rounded-md px-2 py-2 text-center text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-blue-500 hover:text-base hover:text-white"
    >
      Cerrar sesión
    </button>
  )
}
