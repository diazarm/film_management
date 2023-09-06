import stylesHome from "./Home.module.css";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "../../redux/actions";
import Loading from "../../components/LoadingAnimation/LoadingAnimation";



const Home = () => {

    const dispatch = useDispatch();
    const { countries, numPage, countriesCopy } = useSelector((state) => state);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!countriesCopy.length) {
            dispatch(getFilms());
        }
        setTimeout(() => {
            setIsLoading(false); // Oculta el componente de carga después de un tiempo
          }, 2000)
      
    }, [countriesCopy.length, dispatch]);

    let first = (numPage - 1) * 9;
    let second = numPage * 9;
    let pages = Math.ceil(countries.length / 9);
    let currentCountries = countries.slice(first, second);

    return (
        <div>
        {isLoading ? <Loading/> :
        <div className={stylesHome.divHome}>
            <p className={stylesHome.pageTitle}>Welcome to Pop Corn!</p>

            <div className={stylesHome.divPag}>
                <Pagination pages={pages} />
            </div>
            <div className={stylesHome.divCards}>
                <CardsContainer currentCountries={currentCountries} />
            </div> 
        </div>
        }
    </div>
    )
};

export default Home;
