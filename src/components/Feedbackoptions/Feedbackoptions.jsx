import s from './Feedbackoptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({onLeaveFeedback}) => {
    const incrementFeedBack = onLeaveFeedback;
    return(
        <>
                <div className={s.buttons}>
                    <button className={s.item} onClick={()=>incrementFeedBack("good")}>Good</button>
                    <button className={s.item} onClick={()=>incrementFeedBack("neutral")}>Neutral</button>
                    <button className={s.item} onClick={()=>incrementFeedBack("bad")}>Bad</button>
                    <button className={s.item} onClick={()=>incrementFeedBack("reset")}>Reset</button>
                    
                </div>
        </>
    )
};

FeedbackOptions.propTypes = {
    onLeaveFeedback:PropTypes.func.isRequired
};

export default FeedbackOptions;