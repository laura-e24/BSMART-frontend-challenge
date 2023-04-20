import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Layout from "../components/Layout";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";


const CharImg = styled.img`
  border-bottom: 5px solid #e62429;
  width: 100%;
  /* max-height: 400px; */
  &:hover {
    filter: grayscale(50%);
    transition: filter 0.50s;
  }
`

const Character = () => {
  const [character, setCharacter] = useState([])
  const params = useParams();
  const { characterId } = params;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${process.env.REACT_APP_API_KEY}&limit=100`)
      setCharacter(response.data.data.results[0])
    }
    fetchData()
  }, [])
// console.log(character)
  return ( 
    <Layout>
      <CharacterCard>
        <CharImg src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`} />
        <div style={{padding:16}}>
          <span className="block" style={{ marginBottom:16 }}>
            <h3>{character.name}</h3>
            <p style={{marginTop: 8}}>{character.description || "No description available."}</p>
            <p style={{marginTop: 8}}>{character.description || "No description available."}</p>
            <p style={{marginTop: 8}}>{character.description || "No description available."}</p>
            <p style={{marginTop: 8}}>{character.description || "No description available."}</p>
          </span>
        </div>
      </CharacterCard>
    </Layout>
  );
}
 
export default Character;