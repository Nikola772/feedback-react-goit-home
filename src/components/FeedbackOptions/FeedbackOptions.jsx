export const FeedbackOptions = ({hendleClickGood, hendleClickNeutral, hendleClickBad}) => {
    return (
        
        <div>
            <button type="button" onClick={hendleClickGood} >Good</button>
            <button type="button" onClick={hendleClickNeutral}>Neutral</button>
            <button type="button" onClick={hendleClickBad}>Bad</button>
        </div>
    )
}