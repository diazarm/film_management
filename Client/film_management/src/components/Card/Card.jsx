import { Link } from "react-router-dom";
import stylesCard from "./Card.module.css";
import noPhoto from "../../assets/images/no_photo.webp"


const Card = (film) => {
 
    return (
        <Link to={`/detail/${film.id}`} className={stylesCard.link}>
            <div className={stylesCard.div}>
                {(!film.image || film.image === "none") ? <img className={stylesCard.img} src={noPhoto} alt={film.image}/> : 
            <img className={stylesCard.img} src={`https://image.tmdb.org/t/p/w500${film.image}`} alt={film.image}/>}
            <h3 className={stylesCard.h3}>ID | {film.id}</h3>
            <h2 className={stylesCard.h2}>{film.title}</h2>
            <h3 className={stylesCard.h3}>
          {film.created ? "available in database" : "available in Api"}
        </h3>
           
        </div>
        </Link >
    )
};

export default Card;