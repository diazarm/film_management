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
                    <h2 className={stylesDetail.h2}>TITLE | {filmDetail.name}</h2>
                    <h2 className={stylesDetail.h2}>YEAR | {filmDetail.year}</h2>
                    <h2 className={stylesDetail.h2}>LANGUAGE | {filmDetail.language}</h2>
                    <h2 className={stylesDetail.h2}>OVERVIEW | {filmDetail.overview}</h2>
                    
                </div>
            </div>
                
        </div>
    );
};

export default Detail;