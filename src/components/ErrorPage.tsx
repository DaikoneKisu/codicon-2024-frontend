import { useRouteError, Link } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError() as { status: number }

  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 to-blue-200">
        <div className="m-auto flex min-h-screen w-9/12 items-center justify-center py-16">
          <div className="overflow-hidden bg-white pb-8 shadow sm:rounded-lg">
            <div className="border-t border-gray-200 pt-8 text-center">
              <h1 className="text-[5.75rem] font-bold text-purple-400 md:text-9xl">
                {error.status}
              </h1>
              <h2 className="p-4 text-[1.75rem] font-medium md:px-12 md:py-8 md:text-6xl">
                Ha ocurrido un error.
              </h2>
              <Link
                to={'/'}
                className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 px-[1.2rem] py-3 font-semibold text-white hover:from-pink-500 hover:to-orange-500 md:px-6"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
