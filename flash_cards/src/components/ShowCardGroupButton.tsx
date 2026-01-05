import type { ShowCardGroupButtonProps } from '../interfaces'

export default function ShowCardGroupButton({
    toggleShowCard,
    selectedCardGroup,
    setSelectedCardGroup,
    setCardDisplayType,
    propCardType,
}: ShowCardGroupButtonProps) {
    function handleClick() {
        toggleShowCard(true)
        setSelectedCardGroup(selectedCardGroup)
        setCardDisplayType(propCardType)
    }
    let message

    switch (propCardType) {
        case 'editCard':
            message = 'Edit Cards'
            break
        case 'addCard':
            message = 'Add Cards'
            break
        case 'default':
            message = 'Run Test'
    }

    return <button onClick={handleClick}>{message}</button>
}
