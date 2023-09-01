import { Link } from "react-router-dom";
import stylesCard from "./Card.module.css";

const Card = (countries) => {
    return (
        <Link to={`/detail/${countries.id}`} className={stylesCard.link}>
            <div className={stylesCard.div}>
            <img className={stylesCard.img} src={`https://image.tmdb.org/t/p/w500${countries.image}`} alt={countries.image}/>
            <h2 className={stylesCard.h2}>{countries.title}</h2>
            <h3 className={stylesCard.h3}>{countries.language}</h3>
            </div>
        </Link >
    )
};

export default Card;