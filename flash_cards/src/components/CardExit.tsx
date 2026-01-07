import type { CardExitProps } from '../interfaces'

export default function CardExit({ toggleShowCard }: CardExitProps) {
    return (
        <button
            onClick={() => {
                toggleShowCard(false)
            }}
        >
            Exit
        </button>
    )
}
