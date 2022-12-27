import { SectionStyle } from './components/Section';
import { StyledDisplay } from './components/buttons/display';
import React from 'react';
import {BtnStyled} from './components/buttons/btnwithmap';
const Title = (props) => {
  return (
    <div className="calculator-title">
      <h1>{props.value} </h1>
    </div>
  );
};
export const Display = (props) => {
  return (
    <input
      value={props.value}
      type="text"
      className="screen"
      placeholder="0"
      readOnly
    ></input>
  );
};
const ButtonValue = (props) => {
  return (
    <div>
      <input type="button" value={props.BtnValue} onClick={props.handleClick} />
    </div>
  );
};
class CalculatorApp extends React.Component {
  constructor() {
    super();
    this.state = {
      typing: '',
      result: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    //console.log('The link has been  clicked.');
    var Typing = this.state.typing;
    const value = event.target.value;
    console.log(event.target.value);
    switch (value) {
      case '=': {
        if (Typing !== '') {
          var finalResult = '';
          try {
            finalResult = eval(Typing);
            console.log(finalResult);
          } catch (error) {
            this.setState({ result: 'Syntax Error' });
            console.log('Error');
          }
          if (finalResult === undefined)
            this.setState({ result: 'Syntax Error' });
          else this.setState({ result: finalResult, typing: finalResult });
          break;
        }
      }
      case 'Clear': {
        this.setState({ result: '', typing: '' });

        break;
      }
      case 'Del': {
        var str = Typing;
        str = str.slice(0, -1);
        this.setState({ typing: str });
        break;
      }
      default: {
        this.setState({ typing: (Typing += value) });
        break;
      }
    }
  }
  render() {
    var Typings = this.state.typing;
    let row = [
      'Clear',
      'Del',
      '%',
      '/',
      '7',
      '8',
      '9',
      '*',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];

    return (
      <SectionStyle>
        <Title value="My calculator"></Title>
        <div className="calculator-container">
          <StyledDisplay>
            <Display value={Typings}></Display>
            {/* <Display value = {this.state.result}></Display> */}
          </StyledDisplay>
          {/* Button iteration added by CSS */}
          {/* <div className="button-container">
            <div class="new-btn">
              {row.map((value) => {
                return (
                  <ButtonValue
                    handleClick={this.handleClick}
                    BtnValue={value}
                  />
                );
              })}
            </div>
          </div> */}
{/* componet using for the iteration */}
          <div className="button-container">
            <BtnStyled>
            <div class="new-btn">
              {row.map((value) => {
                return (
                  <ButtonValue
                    handleClick={this.handleClick}
                    BtnValue={value}
                  />
                );
              })}
            </div>
            </BtnStyled>
          </div>





        </div>
      </SectionStyle>
    );
  }
}

export default CalculatorApp;
