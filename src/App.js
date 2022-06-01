import React from 'react';
import './App.css';
import { Statistics } from './components/Statistics/Statistics';
import {FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions';
import {Notification} from './components/Notification/Notification';

class App extends React.Component {
  constructor() {
    super();
   
  this.state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

}

hendleClickGood = () => {
  this.setState(() => ({
    good: this.state.good + 1,
    
  }))
}

hendleClickNeutral = () => {
  this.setState(() => ({
    neutral: this.state.neutral + 1,
    
  }))
}

hendleClickBad = () => {
  this.setState(() => ({
    bad: this.state.bad + 1,
    
  }))
}

countTotalFeedback = () => {
  
  return this.state.good + this.state.neutral +  this.state.bad;
  
}

countPositiveFeedbackPercentage = () => {
  return  Math.ceil((this.state.good  / this.countTotalFeedback()) * 100 )
}

  render() { 
    
  return (
    <div className="App">
       <h1>Please leave feedback</h1>
       <FeedbackOptions hendleClickGood={this.hendleClickGood} 
                        hendleClickNeutral={this.hendleClickNeutral}
                        hendleClickBad={this.hendleClickBad}
       />
        
       <div>
         <h2>Statistics</h2>
         {  (this.state.good || this.state.neutral || this.state.bad) ? 
            <Statistics
             good={this.state.good} 
             neutral={this.state.neutral} 
             bad={this.state.bad} 
               total={ this.countTotalFeedback()}
               positivePercentage={this.countPositiveFeedbackPercentage()}
             />
         
           :  <Notification message="No feedback given"/>}
         
       </div>
    </div>
    
  );
}
}

export default App;
