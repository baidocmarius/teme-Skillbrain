import './App.css';
import PauseIcon from '@mui/icons-material/Pause';
import CasinoIcon from '@mui/icons-material/Casino';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteAdvicesModal from './components/FavoriteAdvicesModal/FavoriteAdvicesModal';
import { useState, useEffect } from 'react';
import { getCurrentDateFormatted } from './utils/getCurrentDateFormatted';

const App = () => {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const favoriteAdvicesFromLocalStorage = JSON.parse(
    localStorage.getItem('favoritedAdvicesLS'),
  );

  const [favoriteAdvices, setFavoriteAdvices] = useState(
    favoriteAdvicesFromLocalStorage === null
      ? []
      : favoriteAdvicesFromLocalStorage,
  );

  const getInitialAdvice = async () => {
    const serverResponse = await fetch('https://api.adviceslip.com/advice');
    const data = await serverResponse.json();

    setAdvice({
      id: data.slip.id,
      content: data.slip.advice,
    });
  };

  useEffect(() => {
    getInitialAdvice();
  }, []);

  const handleGenerateAdvice = async () => {
    setIsLoading(true);

    const serverResponse = await fetch('https://api.adviceslip.com/advice');
    const data = await serverResponse.json();

    setIsLoading(false);

    const newAdvice = {
      id: data.slip.id,
      content: data.slip.advice,
    };

    setAdvice(newAdvice);
  };

  const getAdviceIndex = () => {
    const adviceIndex = favoriteAdvices.findIndex(
      favoriteAdvice => favoriteAdvice.id === advice?.id,
    );

    return adviceIndex;
  };

  const handleAddAdviceToFavorites = () => {
    const adviceIndex = getAdviceIndex();

    if (adviceIndex >= 0) {
      // elimina advice
      const newFavoriteAdvices = [...favoriteAdvices];
      newFavoriteAdvices.splice(adviceIndex, 1);

      setFavoriteAdvices(newFavoriteAdvices);
      localStorage.setItem(
        'favoritedAdvicesLS',
        JSON.stringify(newFavoriteAdvices),
      );
    } else {
      // adauga advice
      const newFavoriteAdvices = [
        ...favoriteAdvices,
        {
          id: advice.id,
          content: advice.content,
          addedAt: getCurrentDateFormatted(),
        },
      ];

      setFavoriteAdvices(newFavoriteAdvices);
      localStorage.setItem(
        'favoritedAdvicesLS',
        JSON.stringify(newFavoriteAdvices),
      );
    }
  };

  const removeAdviceFromFavorites = adviceId => {
    // gaseste index-ul advice-ului al carui id il primim ca parametru
    const adviceIndexInsideFavorites = favoriteAdvices.findIndex(
      favoriteAdvice => favoriteAdvice.id === adviceId,
    );

    const newFavoriteAdvices = [...favoriteAdvices];

    newFavoriteAdvices.splice(adviceIndexInsideFavorites, 1);

    setFavoriteAdvices(newFavoriteAdvices);
  };

  const handleModalOpening = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="app-container">
      <button onClick={handleModalOpening} className="show-favorites">
        Show favorites
      </button>

      {isOpen ? (
        <FavoriteAdvicesModal
          advices={favoriteAdvices}
          setIsOpen={closeModal}
          removeAdvice={removeAdviceFromFavorites}
        />
      ) : null}

      <div className="advice-slip-container">
        <button
          onClick={handleAddAdviceToFavorites}
          className="toggle-favorite-button"
        >
          {getAdviceIndex() === -1 ? (
            <FavoriteBorderIcon style={{ color: '#52ffa8' }} />
          ) : (
            <FavoriteIcon style={{ color: '#52ffa8' }} />
          )}
        </button>
        {advice !== null ? (
          <>
            <p className="advice-id"> ADVICE #{advice.id} </p>
            <p className="advice-content"> "{advice.content}" </p>
          </>
        ) : (
          <p className="advice-content advice-content-spinner"> Loading... </p>
        )}
        <div className="separator-container">
          <hr />
          <PauseIcon style={{ color: '#cee3e9' }} />
          <hr />
        </div>
        <button
          onClick={handleGenerateAdvice}
          className="advice-button"
          disabled={isLoading === true ? true : false}
        >
          {isLoading === true ? (
            <div className="spinner"></div>
          ) : (
            <CasinoIcon fontSize={'large'} />
          )}
        </button>
      </div>
    </section>
  );
};

export default App;
