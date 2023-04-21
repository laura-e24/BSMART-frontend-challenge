import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const BackgroundImg = styled.div`
  background: url(${props => props.background});
  background-size: cover;
  height: 100%;
  min-width: 600px;
  display: flex;
  border-right: 5px solid #e62429;
  @media (max-width: 1024px) {
    display: none;
  }
`
const CharImg = styled.img`
  @media (min-width: 1024px) {
    display: none;
  }
  width: 100%;
  border-bottom: 5px solid #e62429;
`

const CardContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
  justify-content: center;
  height: 100%;
`

const TextContainer = styled.div`
  background-color: #151515;
  display: flex;
  color: white;
  max-height: 100%;
  overflow-y: auto;
`
const ListItem = styled.li`
  color: #bebebe;
  font-size: 13;
  letter-spacing: 0.025em;
`

const Character = () => {
  const apiKey = process.env.REACT_APP_API_KEY || "03b0d8ae81fc8954b6f064a264896336";
  const [character, setCharacter] = useState([])
  const params = useParams();
  const { characterId } = params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${apiKey}&limit=100`)
      setCharacter(response.data.data.results[0])
    }
    fetchData()
  }, [characterId])

  return ( 
    <Layout>
      <CardContainer>
        <BackgroundImg background={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}/>
        <CharImg 
          alt={`${character.name}-image`} 
          src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
        />
        <TextContainer>
          <div style={{padding: 16, overflowY: "auto" }}>
            <h1>{character.name}</h1>
            <p style={{marginTop: 8, color: "#bebebe"}}>{character.description || "No description available."}</p>
            <span style={{ display:"block", margin: "16px 0" }}>
              <h4>Comics in which {character.name} appears</h4>
              <ul style={{ marginTop: 6 }}>
                {character?.comics?.available ? (
                  character.comics?.items?.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        {item.name}
                      </ListItem>
                    )
                })
                ) : (
                  <ListItem>
                    {character.name} hasn't appeared in any comic yet.
                  </ListItem>
                )}
              </ul>
            </span>
            <span style={{ display:"block", margin: "16px 0" }}>
              <h4>Events in which {character.name} appears</h4>
              <ul style={{ marginTop: 6 }}>
                {character?.events?.available ? (
                  character.events?.items?.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        {item.name}
                      </ListItem>
                    )
                  })
                ) : (
                  <ListItem>
                    {character.name} hasn't appeared in any event yet.
                  </ListItem>
                )}
              </ul>
            </span>
          </div>
        </TextContainer>
      </CardContainer>
    </Layout>
  );
}
 
export default Character;