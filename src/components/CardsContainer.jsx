import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 2rem;
  column-gap: 2rem;
`

const CardsContainer = ({ children }) => {
  return (  
    <Container>
      {children}
    </Container>
  );
}
 
export default CardsContainer;