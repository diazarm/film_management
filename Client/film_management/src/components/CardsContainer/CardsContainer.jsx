/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import stylesCardsContainer from "./CardsContainer.module.css";

const CardsContainer = ({currentCountries}) => {
  return (
    <div className={stylesCardsContainer.div}>
      {currentCountries?.map(film => {
        return (
          <Card
            key={film.id}
            id={film.id}
            created={film.created}
            image={film.image}
            title={film.title}
            language={film.language}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;