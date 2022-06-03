// export const FeedbackOptions = ({hendleClickGood, hendleClickNeutral, hendleClickBad}) => {
//     return (
        
//         <div>
//             <button type="button" onClick={hendleClickGood} >Good</button>
//             <button type="button" onClick={hendleClickNeutral}>Neutral</button>
//             <button type="button" onClick={hendleClickBad}>Bad</button>
//         </div>
//     )
// }
import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
				<button key={shortid.generate()} type="button" value={option} onClick={onLeaveFeedback}>
					{option}
				</button>
			))}
		</>
	);
};
FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

 