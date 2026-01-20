import type { CardExitProps } from '../../interfaces'

export default function CardExit({ toggleShowCard }: CardExitProps) {
    return (
        <button
            className="exitButton"
            onClick={() => {
                toggleShowCard(false)
            }}
        >
            <img src="assets\close_24dp_6D0037_FILL0_wght400_GRAD0_opsz24.svg" />
        </button>
    )
}
