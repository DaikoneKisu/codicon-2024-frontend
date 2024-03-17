export const ChallengeSmallCard = ({
  challenge
}: {
  challenge: { name: string; category: string }
}) => {
  return (
    <article>
      <h3>{challenge.name ?? 'Nombre reto'}</h3>
      <p>{challenge.category ?? 'Categoria reto'}</p>
    </article>
  )
}
