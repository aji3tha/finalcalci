
import { Display } from "./calculator";
import CalculatorApp from "./calculator";
const DisplyCal = (props) => {
    return (
      <div> <Display value = {props.typing}> </Display>
        <Display value = {props.result}></Display>
        </div>
    )
  }
  export default DisplyCal;