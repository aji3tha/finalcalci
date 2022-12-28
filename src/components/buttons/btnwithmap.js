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
& input {
  width: 80px;
  height: 43px;
  margin: 5px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  background-color: #000;
  cursor: pointer;
  color: #fff;
&:hover{opacity :0.5;}}
& [value='='] {
  width: 170px;
}
& [value='+'],
& [value='-'],
& [value='-'],
& [value='*'],
& [value='/'],
& [value='Clear'],
& [value='Del'],& [value='%'],& [value='='] {
  background-color: #ee187f;
&:hover{opacity:0.8 }}`;

export default BtnStyled;
