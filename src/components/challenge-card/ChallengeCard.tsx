import { FormEvent, useState } from 'react'
import { Challenge } from './challenge'
import { HiDesktopComputer } from 'react-icons/hi'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GoGoal } from 'react-icons/go'
import { MdUpload } from 'react-icons/md'
import { PiMathOperationsFill } from 'react-icons/pi'
import { IoFitness } from 'react-icons/io5'

export const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
  const [selectedFile, setSelectedFile] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    console.log(formData.get('file'))
  }

  return (
    <article className="m-8 space-y-2 rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-800">{challenge.name ?? 'Nombre reto'}</h3>

        <div className="flex items-center justify-end">
          {challenge.category == 'Programming' && (
            <HiDesktopComputer className="mr-2" fontSize={28} />
          )}
          {challenge.category == 'Math' && <PiMathOperationsFill className="mr-2" fontSize={28} />}
          {challenge.category == 'Fitness' && <IoFitness className="mr-2" fontSize={28} />}
          <h4 className="font-bold">{challenge.category ?? '-'}</h4>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-300"></hr>

      <div className="grid min-h-24 grid-cols-3">
        <div className="col-span-2">
          <p>{challenge.description ?? 'Descripción reto'}</p>
        </div>

        <div className="col-span-1 flex-col justify-end">
          <div className="flex items-center justify-end">
            <FaPeopleGroup className="mr-2" />
            <span className="mr-2">{challenge.quota ?? '-'}</span>
            <span>{'Participantes'}</span>
          </div>

          <div className="flex items-center justify-end">
            <GoGoal className="mr-2" />
            <span className="mr-2">{challenge.points ?? '-'}</span>
            <span>{'Puntos'}</span>
          </div>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-300"></hr>

      <form method="POST" encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-center justify-between">
          <div>
            <label className="mr-8 inline-flex items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Seleccionar Archivo
              <input
                type="file"
                className="hidden"
                required
                onChange={(e) => {
                  var files = e.currentTarget.files ?? [null]
                  setSelectedFile(files[0]?.name ?? '')
                }}
              />
            </label>
            <span>{selectedFile}</span>
          </div>

          <button
            className="inline-flex items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            disabled
          >
            <MdUpload className="mr-2" />
            Subir
          </button>
        </div>
      </form>
    </article>
  )
}
