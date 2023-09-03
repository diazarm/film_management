import stylesHome from "./Home.module.css";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms }  from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    const { countries, numPage, countriesCopy } = useSelector((state) => state);

    useEffect(() => {
        if (!countriesCopy.length) dispatch(getFilms());
    }, [ countriesCopy.length, dispatch]);

    let first = (numPage - 1) * 10;
    let second = numPage * 10;
    let pages = Math.ceil(countries.length / 10);
    let currentCountries = countries.slice(first, second);


    return (
        <div className={stylesHome.divHome}>
            
            <div className={stylesHome.divPag}>
                <Pagination pages={pages}/>
            </div>
            <div className={stylesHome.divCards}>
                <CardsContainer currentCountries={currentCountries}/>
            </div>
        </div>
    )
};

export default Home;