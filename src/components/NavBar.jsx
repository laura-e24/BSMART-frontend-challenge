import styled from "styled-components";
import { Link } from 'react-router-dom';

const Navigation = styled.nav`
  width: 100%;
  background-color: #202020;
  justify-content: center;
  padding: 16px 25px;
`
const Item = styled.p`
  font-size: 13px;
  font-weight: 400;
  padding-top: 10px;
  &:hover {
    color: #e62429;
  }
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(119, 119, 114, .3);
  border-top-width: 0px;
  width: 100%;
  padding-bottom: 10px;
`

const NavBar = () => {
  return (  
    <Navigation>
      <ImgContainer>
      <Link to="/" style={{ textDecoration: 'none', marginTop:"auto", marginBottom:"auto", textAlign:"center" }}>
        <img src="/marvel.svg" />
      </Link>
      </ImgContainer>
        <Link to="/" style={{ textDecoration: 'none', marginTop:"auto", marginBottom:"auto", textAlign:"center" }}>
          <Item>
            Show all characters
          </Item>
        </Link>
    </Navigation>
  );
}
 
export default NavBar;