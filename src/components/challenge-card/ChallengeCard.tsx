import { FormEvent } from 'react'
import { Challenge } from './challenge'

export const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    console.log(formData.get('file'))
  }

  return (
    <article>
      <div>
        <h3>{challenge.name ?? 'Nombre reto'}</h3>
        <p>{challenge.category ?? 'Categoria reto'}</p>
      </div>
      <div>
        <p>{challenge.points ?? 'Puntos'}</p>
        <p>{challenge.quota ?? 'Cupos'}</p>
      </div>
      <p>{challenge.description ?? 'Descripción reto'}</p>
      <form method="POST" encType="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="file">Añadir participación</label>
        <input type="file" name="file" />
        <button>Subir</button>
      </form>
    </article>
  )
}
