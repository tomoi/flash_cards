import { useState } from 'react'
import type { CardControllerProps, cardDisplayTypes } from '../../interfaces'
import EditFlashCard from '../EditFlashCard/EditFlashCard'
import AddFlashCard from '../AddFlashCard/AddFlashCard'
import FlashCardFlip from '../FlashCardFlip/FlashCardFlip'
import FlashCardGrid from '../FlashCardGridView/FlashCardGridView'
import CardExit from '../CardExit/CardExit'
import CreatedDate from '../CreatedDate/CreatedDate'

//Component to control how the cards are displayed, to keep the homepage as clean as possible.

export default function CardController({
    cardIndex,
    setCardIndex,
    subjectData,
    updateSubjectData,
    toggleShowCard,
}: CardControllerProps) {
    //index of selected card, uses three numbers to determine the subject index, the cardGroup index, and the card index. i.e [3, 1, 5]

    //chooses which component is used to display the card.
    const [cardDisplayType, setCardDisplayType] =
        useState<cardDisplayTypes['propCardType']>('default')

    if (cardDisplayType === 'default') {
        return (
            <div className="controllerWrapper">
                <div className="cardController controllerDefault">
                    <div className="cardHeader">
                        <h2>
                            {
                                subjectData[cardIndex[0]].cardGroups[
                                    cardIndex[1]
                                ].title
                            }
                        </h2>
                        <p>
                            Created{' '}
                            <CreatedDate
                                date={
                                    subjectData[cardIndex[0]].cardGroups[
                                        cardIndex[1]
                                    ].dateCreated
                                }
                                displayType="short"
                            />
                        </p>
                        <p>
                            Edited{' '}
                            <CreatedDate
                                date={
                                    subjectData[cardIndex[0]].cardGroups[
                                        cardIndex[1]
                                    ].dateEdited
                                }
                                displayType="short"
                            />
                        </p>
                    </div>
                    <div className="cardButtonGroup">
                        <button
                            onClick={() => {
                                setCardDisplayType('editCard')
                            }}
                            //Disable button if there is no cards to edit in the group
                            disabled={
                                subjectData[cardIndex[0]].cardGroups[
                                    cardIndex[1]
                                ].cards.length === 0
                            }
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => {
                                setCardDisplayType('addCard')
                            }}
                        >
                            Add Cards
                        </button>
                        <button
                            onClick={() => {
                                setCardDisplayType('flip')
                            }}
                            //Disable button if there is no cards to edit in the group
                            disabled={
                                subjectData[cardIndex[0]].cardGroups[
                                    cardIndex[1]
                                ].cards.length === 0
                            }
                        >
                            Flip Cards
                        </button>
                    </div>
                    <FlashCardGrid
                        cardArray={
                            subjectData[cardIndex[0]].cardGroups[cardIndex[1]]
                                .cards
                        }
                        setCardIndex={setCardIndex}
                        providedCardIndex={cardIndex}
                    />
                    <CardExit toggleShowCard={toggleShowCard} />
                </div>
            </div>
        )
    } else if (cardDisplayType === 'editCard') {
        return (
            <div className="controllerWrapper">
                <div className="cardController controllerEdit">
                    <EditFlashCard
                        subjectData={subjectData}
                        updateSubjectData={updateSubjectData}
                        cardIndex={cardIndex}
                        setCardIndex={setCardIndex}
                        setCardDisplayType={setCardDisplayType}
                    />
                    <button
                        className="returnButton"
                        onClick={() => setCardDisplayType('default')}
                    >
                        Return
                    </button>
                    <FlashCardGrid
                        cardArray={
                            subjectData[cardIndex[0]].cardGroups[cardIndex[1]]
                                .cards
                        }
                        setCardIndex={setCardIndex}
                        providedCardIndex={cardIndex}
                    />
                    <CardExit toggleShowCard={toggleShowCard} />
                </div>
            </div>
        )
    } else if (cardDisplayType === 'addCard') {
        return (
            <div className="controllerWrapper">
                <div className="cardController controllerAdd">
                    <AddFlashCard
                        subjectData={subjectData}
                        updateSubjectData={updateSubjectData}
                        cardIndex={cardIndex}
                        setCardIndex={setCardIndex}
                        setCardDisplayType={setCardDisplayType}
                    />
                    <button
                        onClick={() => setCardDisplayType('default')}
                        className="returnButton"
                    >
                        Return
                    </button>

                    <CardExit toggleShowCard={toggleShowCard} />
                </div>
            </div>
        )
    } else if (cardDisplayType === 'flip') {
        return (
            <div className="controllerWrapper">
                <div className="cardController controllerFlip">
                    <FlashCardFlip
                        subjectData={subjectData}
                        updateSubjectData={updateSubjectData}
                        cardIndex={cardIndex}
                        setCardIndex={setCardIndex}
                        setCardDisplayType={setCardDisplayType}
                    />
                    <button
                        className="returnButton"
                        onClick={() => setCardDisplayType('default')}
                    >
                        Return
                    </button>
                    <FlashCardGrid
                        cardArray={
                            subjectData[cardIndex[0]].cardGroups[cardIndex[1]]
                                .cards
                        }
                        setCardIndex={setCardIndex}
                        providedCardIndex={cardIndex}
                    />
                    <CardExit toggleShowCard={toggleShowCard} />
                </div>
            </div>
        )
    }
}
