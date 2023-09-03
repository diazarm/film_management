import stylesDetail from "./Detail.module.css";
import { useParams , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cleanDetail, getFilmById, deleteFilm } from "../../redux/actions";
import noPhoto from "../../assets/images/no_photo.webp"


const Detail = () => {
    const dispatch = useDispatch();
    const nave = useNavigate();
    const { id } = useParams();
    const filmDetail = useSelector((state) => state.filmDetail);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);

    useEffect(() => {
        dispatch(getFilmById(id));
        return () => {
            dispatch(cleanDetail());
        };
    }, [dispatch, id]);
    
    const confirmDelete = () => {
        dispatch(deleteFilm(filmDetail.id));
        //Aqui chat cgpt 
        nave("/home");
      };

    const handleDelete = () => {
        setShowConfirmDialog(true);
    };

      
    

    return (
        <div className={stylesDetail.divDetail}>
            <div className={stylesDetail.divCountry}>
                <div className={stylesDetail.divImgCountry}>
              
                <button className={stylesDetail.deleteButton} onClick={handleDelete}>
                    X
             </button>
             {showConfirmDialog && (<div className={stylesDetail.confirmDialog}>
                <p>¿Estás seguro de que deseas eliminar este elemento?</p>
                <button onClick={confirmDelete}>Sí</button>
                <button onClick={() => setShowConfirmDialog(false)}>No</button>
                </div>
            )}
                {(!filmDetail.image || filmDetail.image === "none") ? <img  src={noPhoto} alt={filmDetail.image}/> : 
            <img  src={`https://image.tmdb.org/t/p/w500${filmDetail.image}`} alt={filmDetail.image}/>}
                    <h2 className={stylesDetail.h2}>ID | {filmDetail.id}</h2>
                    {(filmDetail.name) ? <h2 className={stylesDetail.h2}>TITLE | {filmDetail.name}</h2> : <h2 className={stylesDetail.h2}>TITLE | {filmDetail.title}</h2> }
                    <h2 className={stylesDetail.h2}>YEAR | {filmDetail.year}</h2>
                    <h2 className={stylesDetail.h2}>LANGUAGE | {filmDetail.language}</h2>
                    <h2 className={stylesDetail.h2}>OVERVIEW | {filmDetail.overview}</h2>
                    
                </div>
            </div>
                
        </div>
    );
};

export default Detail;