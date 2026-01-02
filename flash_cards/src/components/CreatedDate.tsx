interface CreatedDateProps {
    date: number
    displayType: string
}

export default function CreatedDate({ date, displayType }: CreatedDateProps) {
    let dateObject = new Date(date)
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
            <p>
                Created {monthArrayShort[dateObject.getMonth()]}{' '}
                {dateObject.getDay()}, {dateObject.getFullYear()}
            </p>
        )
    }
}
