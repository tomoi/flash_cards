interface CreatedDateProps {
    date: number
    displayType: string
}

export default function CreatedDate({ date, displayType }: CreatedDateProps) {
    const dateObject = new Date(date)
    const monthArrayShort = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
    ]

    if (displayType === 'short') {
        return (
            <>
                {monthArrayShort[dateObject.getMonth()]} {dateObject.getDate()},{' '}
                {dateObject.getFullYear()}
            </>
        )
    }
}
