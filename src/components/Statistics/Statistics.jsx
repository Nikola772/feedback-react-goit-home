export const Statistics = ({good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage}) => {
    countPositiveFeedbackPercentage = () => {
       return  Math.ceil((good  / countTotalFeedback()) * 100 )
     }

     countTotalFeedback = () => {
 
       return good + neutral +  bad;
       
     }
   return (
       <div>           
          <span>Good: {good}</span>
          <span>Neutral: {neutral}</span>
          <span>Bad: {bad}</span>
          <span>Total: { countTotalFeedback() }</span>
          <span>Posivive feedback: {countPositiveFeedbackPercentage()}%</span>
       </div>
   )
}