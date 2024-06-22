import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterDetail from '../CharacterDetail/CharacterDetail';
import styles from './CharacterList.module.css';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=407a92805c8fb6b3544e73f8c2585d93&hash=89019e5db68931ebb546b2d6fef4ec02");
        setCharacters(response.data.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCharacters();
  }, []);

  if (selectedCharacterId) {
    return <CharacterDetail characterId={selectedCharacterId} onBack={() => setSelectedCharacterId(null)} />;
  }

  return (
    <div className={styles.characterList}>
      <h3>Marvel Characters</h3>
      <ul className={styles.lists}>
        {characters.map((character) => (
          <div key={character.id} className={styles.card} onClick={() => setSelectedCharacterId(character.id)}>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{character.name.toUpperCase()}</h5>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`${character.name}`} className={styles.cardImg} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
