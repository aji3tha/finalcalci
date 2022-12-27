import styled from 'styled-components';
export const BtnStyled = styled.div`
.new-btn {
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 360px;
}
.new-btn input {
  width: 80px;
  height: 43px;
  margin: 5px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  background-color: #000;
  cursor: pointer;
  color: #fff;
}
.new-btn input[value='='] {
  width: 170px;
  background-color: #ee187f;
}
.new-btn input[value='+'],
.new-btn input[value='-'],
.new-btn input[value='-'],
.new-btn input[value='*'],
.new-btn input[value='/'],
.new-btn input[value='Clear'],
.new-btn input[value='Del'] {
  background-color: #ee187f;
}`

export default BtnStyled;
