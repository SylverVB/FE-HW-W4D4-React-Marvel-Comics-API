import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/characters');
    };

    return (
        <div className={styles.home}>
            <div className={styles.marvelUniverse} onClick={handleClick}></div>
        </div>
    );
}

export default HomePage;
