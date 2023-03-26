import PropTypes from 'prop-types'
import st from './Statistics.module.css';

const Statistics = ({result,total,percent}) =>{
    const {good,neutral,bad} = result;
const allfeeds = total();
const percentGood = percent(good,allfeeds)
    return(
        <>
                <ul className={st.list}>
                    <li className={st.item}>Good:{good}</li>
                    <li className={st.item}>Neutral:{neutral}</li>
                    <li className={st.item}>Bad:{bad}</li>
                    <li className={st.item}>Total:{allfeeds}</li>
                    <li className={st.item}>Positive feedback is:{percentGood} %</li>
                </ul>
        </>
    )
}

Statistics.propTyped = {
    result:PropTypes.number.isRequired,
    total:PropTypes.func,
    percent:PropTypes.func
}


export default Statistics;