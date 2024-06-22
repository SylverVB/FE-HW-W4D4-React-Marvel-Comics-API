import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CharacterDetail.module.css';

function CharacterDetail({ characterId, onBack }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacterDetail() {
      try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=407a92805c8fb6b3544e73f8c2585d93&hash=89019e5db68931ebb546b2d6fef4ec02`);
        setCharacter(response.data.data.results[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCharacterDetail();
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.characterDetail}>
      <button className={styles.button} onClick={onBack}>Back to list</button>
      <h3 className={styles.h3}>{character.name}</h3>
      <img className={styles.img} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`${character.name}`} />
      <p className={styles.p}>{character.description || 'No description available'}</p>
      <h4 className={styles.h3}>Comics:</h4>
      <ul className={styles.ul}>
        {character.comics.items.map((comic, index) => (
          <li key={index} className={styles.li}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetail;
