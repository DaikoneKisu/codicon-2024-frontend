import { Participant } from './type'

export const Participants = ({ avatar, resource }: Participant) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <img
        className="aspect-square h-[120px] w-[120px] rounded-full object-cover"
        src={`${avatar}`}
        alt="profile"
      />
      <div className="flex h-16 w-full items-center justify-center rounded-lg border border-dashed border-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-5 w-5"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
        <span className="text-xs font-semibold text-gray-500">{resource}</span>
      </div>
    </div>
  )
}
