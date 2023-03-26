import { Component } from "react";
import FeedbackOptions from './Feedbackoptions/Feedbackoptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from "./Notification/Notification";

class App extends Component {
  initState ={
    good: 0,
    neutral: 0,
    bad: 0
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  countTotalFeedback(){
return (this.state.good + this.state.neutral + this.state.bad);
  };

  countPositiveFeedbackPercentage(good,total){
    if (total) return Math.floor((good/total)*100)
    return;
  };

  incrementFeedBack(option){
    switch(option){
      case "good":
        this.setState((prev)=>({good:prev.good+1}));
        break;
        case "neutral":
          this.setState((prev)=>({neutral:prev.neutral+1}));
          break;
          case "bad":
            this.setState((prev)=>({bad:prev.bad+1}));
            break;
            case "reset":
            this.setState(()=>(this.initState));
            break;
        default:
          break
    }
    
  }

  render(){
  return (
    <>
    <h1 style={{visibility:"hidden"}}>Feedback statistics</h1>
    <Section title={"Please leave feedback"} >
        <FeedbackOptions onLeaveFeedback={this.incrementFeedBack.bind(this)} />
    </Section>
    <Section title={"Statistics"}>
        {(this.countTotalFeedback())?(<Statistics result={this.state} total={this.countTotalFeedback.bind(this)} percent={this.countPositiveFeedbackPercentage.bind(this)}/>):
        <Notification />}
    </Section>
  </>
  );}
};

export default App;
