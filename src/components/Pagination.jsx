import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 32px 0;
  row-gap: 10px;
  margin-top: 64px;
  border-top: 1px solid rgba(119, 119, 114, .3);
`

const Pagination = ({ length, total, setOffset }) => {
  return (  
    <Container>
      <span style={{ width: "100%", textAlign: "center", fontSize: 14 }}>
        {length} / {total} characters
      </span>
      <Button onClick={() => setOffset(offset => offset + 20)}>
        Show more
      </Button>
    </Container>
  );
}
 
export default Pagination;