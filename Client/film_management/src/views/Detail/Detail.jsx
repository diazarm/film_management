import stylesDetail from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanDetail, getFilmById } from "../../redux/actions";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const filmDetail = useSelector((state) => state.filmDetail);

    useEffect(() => {
        dispatch(getFilmById(id));
        return () => {
            dispatch(cleanDetail());
        };
    }, [dispatch, id]);

    return (
        <div className={stylesDetail.divDetail}>
            <div className={stylesDetail.divCountry}>
                <div className={stylesDetail.divImgCountry}>
                    <img src={filmDetail.image} alt={filmDetail.image}/>
                    <h2 className={stylesDetail.h2}>ID | {filmDetail.id}</h2>
                    <h2 className={stylesDetail.h2}>NAME | {filmDetail.title}</h2>
                    <h2 className={stylesDetail.h2}>CONTINENT | {filmDetail.continent}</h2>
                    <h2 className={stylesDetail.h2}>CAPITAL | {filmDetail.capital}</h2>
                    {filmDetail.subregion && <h2 className={stylesDetail.h2}>SUBREGION | {filmDetail.subregion}</h2>}
                    {filmDetail.area && <h2 className={stylesDetail.h2}>AREA | {filmDetail.area} km2</h2>}
                    <h2 className={stylesDetail.h2}>POPULATION | {filmDetail.population} </h2>
                </div>
            </div>
                
        </div>
    );
};

export default Detail;