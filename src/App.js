import React from 'react';
import './App.css';
import Section from './components/Section/Section';
import  Statistics  from './components/Statistics/Statistics';
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

 

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  
  return good + neutral +  bad;
  
}

countPositiveFeedbackPercentage = () => {
  const res = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / res;
		return Math.round(percentage);
};

onLeaveFeedback = (e) => {
  const value = e.target.value;
  this.setState((prevState) => ({
    [value]: prevState[value] + 1
  }));
};

  render() { 
    const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

    const objKey = Object.keys(this.state);
  return (
    <div className="App">
       <Section title="Будь ласка, залиште відгук">
					<FeedbackOptions  options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>

				{total === 0 ? (
					<Notification message="немає відгуків" />
				) : (
					<Section title="Статистика">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
    </div>
    
  );
}
}

export default App;
