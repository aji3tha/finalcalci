import StyledButton from "./components/buttons/operator";
import ButtonDiv from "./components/buttons/BtnDiv"
import { SectionStyle } from "./components/Section";
import { StyledDisplay } from "./components/buttons/display";
import React from "react";
 const Title = (props) => {
  return (
    <div className="calculator-title">
      <h1>{props.value} </h1>
    </div>
  )
}
 export const Display = (props) => {
  return (
    <input value ={props.value} type="text" className='screen' placeholder='0' readOnly ></input>
  )
}
 const ButtonValue = (props) => {
  return (
    <div><input type="button" value={props.BtnValue} onClick = {props.handleClick}/>
    </div>
  )
}
class CalculatorApp extends React.Component {
  constructor() {
    super();
    this.state = {
      typing: '',
      result: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    //console.log('The link has been  clicked.');
    const value = event.target.value;
    console.log(event.target.value);
    switch (value) {
      case '=': {
        if (this.state.typing !== '') {
          var finalResult = '';
          try {
            finalResult = eval(this.state.typing);
            console.log(finalResult);
          } catch (error) {
            this.setState({ result: "Syntax Error"});
            console.log("Error");
          }
          if (finalResult === undefined) 
            this.setState({ result: "Syntax Error" });
          else
          this.setState({result: finalResult, typing: finalResult});
          break;
        }
        
      }
      case 'Clear':{
        this.setState({result:'' ,typing: ''});

        break;
      }
      case 'Del':{
        var str = this.state.typing;
        str = str.slice(0,-1);
        this.setState({typing: str});
        break;
      }
      default:{
        this.setState({typing: this.state.typing += value});
        break;
      }
    }
  }
  render() {
    return (
      <SectionStyle>
        <Title value="My calculator"></Title>
        <div className="calculator-container">
          <StyledDisplay>
          <Display value = { this.state.typing}></Display>
      {/* <Display value = {this.state.result}></Display> */}
          </StyledDisplay>
          <div className='button-container'>
            <ButtonDiv>
              <StyledButton variant="operator"><ButtonValue handleClick = {this.handleClick} BtnValue={'Clear'}></ButtonValue></StyledButton>
              <StyledButton variant="operator"><ButtonValue handleClick = {this.handleClick} BtnValue={'Del'}></ButtonValue></StyledButton>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'%'}></ButtonValue></StyledButton>
              <StyledButton className="button-bg" variant="operator"><ButtonValue handleClick = {this.handleClick} BtnValue={'/'}></ButtonValue></StyledButton>
            </ButtonDiv>
            <ButtonDiv>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'7'}></ButtonValue></StyledButton>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'8'}></ButtonValue></StyledButton>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'9'}></ButtonValue></StyledButton>
              <StyledButton className="button-bg" variant="operator"><ButtonValue handleClick = {this.handleClick} BtnValue={'*'}></ButtonValue></StyledButton>
            </ButtonDiv>
            <ButtonDiv>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'4'}></ButtonValue></StyledButton>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'5'}></ButtonValue></StyledButton>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'6'}></ButtonValue></StyledButton>
              <StyledButton className="button-bg" variant="operator"><ButtonValue handleClick = {this.handleClick} BtnValue={'-'}></ButtonValue></StyledButton>
            </ButtonDiv>
            <ButtonDiv>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'1'}></ButtonValue></StyledButton>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'2'}></ButtonValue></StyledButton>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'3'}></ButtonValue></StyledButton>
              <StyledButton className="button-bg" variant="operator"><ButtonValue handleClick = {this.handleClick} BtnValue={'+'}></ButtonValue></StyledButton>
            </ButtonDiv>
            <ButtonDiv>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'0'}></ButtonValue></StyledButton>
              <StyledButton ><ButtonValue handleClick = {this.handleClick} BtnValue={'.'}></ButtonValue></StyledButton>
              <StyledButton className="equal" variant="operator"><ButtonValue handleClick = {this.handleClick} BtnValue={'='}></ButtonValue></StyledButton>
            </ButtonDiv>
          </div>
        </div>
      </SectionStyle>
    );
  }
}

export default CalculatorApp;