import styled from "styled-components";

const ButtonComponent = styled.button`
  padding: 8px 12px;
  background: #e62429;
  border: none;
  outline: inherit;
  cursor: pointer;
  color: rgba(237, 236, 236, 1);
  font-family: inherit;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.025em;
  &:hover {
    background: #8b0001;
  }
`

const Button = ({ children, onClick = undefined }) => {
  return (  
    <ButtonComponent onClick={onClick} type="button">
      {children}
    </ButtonComponent>
  );
}
 
export default Button;