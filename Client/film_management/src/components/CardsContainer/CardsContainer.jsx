/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import stylesCardsContainer from "./CardsContainer.module.css";

const CardsContainer = ({currentCountries}) => {
  return (
    <div className={stylesCardsContainer.div}>
      {currentCountries?.map(country => {
        return (
          <Card
            key={country.id}
            id={country.id}
            created={country.created}
            image={country.image}
            title={country.title}
            language={country.language}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;