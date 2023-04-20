import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #151515;
  display: block;
  align-content: center;
  justify-content: center;
  color: white;
  row-gap: 1px;
  max-width: 300px;
  transition: transform 0.50s;
  &:hover {
    background-color: #202020;
    transform: scale(1.1);
  }
`

const CharacterCard = ({ children, style = {} }) => {
  return (  
    <CardContainer style={style}>
      {children}
    </CardContainer>
  );
}
 
export default CharacterCard;