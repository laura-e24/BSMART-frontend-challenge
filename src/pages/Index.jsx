import styled from "styled-components";
import CardsContainer from "../components/CardsContainer";
import CharacterCard from "../components/CharacterCard";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";

const CharImg = styled.img`
  border-bottom: 5px solid #e62429;
  width: 100%;
  &:hover {
    filter: grayscale(50%);
    transition: filter 0.50s;
  }
`

const Index = () => {
  const [characters, setCharacters] = useState([])
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(0)

  const fetchData = async (offset) => {
    const { data: { data } } = await axios(`https://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}&limit=20&offset=${offset}`)
    return data;
  }
  useEffect(() => {
    const fetch = async () => {
      const result = await fetchData(offset)
      console.log(offset)

      console.log(result)
      setCharacters(character => character.concat(result.results))
      setTotal(result.total)
    }
   fetch()
  }, [offset])
console.log(characters)

  return ( 
    <Layout>
      <CardsContainer>
        {characters.map((c, i) => {
          return (
            <CharacterCard key={i}>
              <Link to={`/characters/${c.id}`} style={{ textDecoration: 'none' }}>
                <CharImg src={`${c.thumbnail.path}.${c.thumbnail.extension}`} />
              </Link>
              <div style={{padding:16}}>
                <span className="block" style={{ marginBottom:16 }}>
                  <h3>{c.name}</h3>
                  <p style={{marginTop: 8}}>{c.description || "No description available."}</p>
                </span>
                <Link to={`/characters/${c.id}`} style={{ textDecoration: 'none' }}>
                  <Button>
                    Details
                  </Button>
                </Link>
              </div>
            </CharacterCard>
          )
        })}
      </CardsContainer>
      <Pagination offset={offset} setOffset={setOffset} total={total} length={characters.length} />
    </Layout>
  );
}
 
export default Index;