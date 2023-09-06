import stylesDetail from "./Detail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cleanDetail, getFilmById, deleteFilm } from "../../redux/actions";
import noPhoto from "../../assets/images/no_photo.webp";
import Form from "../Form/Form";
import ModifyForm from "../ModifyForm/ModifyForm";
import Loading from "../../components/LoadingAnimation/LoadingAnimation";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const filmDetail = useSelector((state) => state.filmDetail);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isModifying, setIsModifying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Oculta el componente de carga después de un tiempo
    }, 2000)
    dispatch(getFilmById(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);
  
  const confirmDelete = () => {
    dispatch(deleteFilm(filmDetail.id));
    dispatch(cleanDetail());
    alert("Delete movie")
    navigate("/home");
  };

  const handleDelete = () => {
    setShowConfirmDialog(true);
  };

  const handleCreateForm = () => {
    setIsCreating(true);
    setIsModifying(false);
  };

  const handleModifyForm = () => {
    setIsCreating(false);
    setIsModifying(true);
  };

  return (
      <div className={stylesDetail.divDetail}>
        {isLoading ? <Loading/> :
      <div className={stylesDetail.divCountry}>
        <div className={stylesDetail.divImgCountry}>
        <div>
          <button className={stylesDetail.deleteButton} onClick={handleDelete}>
            X
          </button>
          {showConfirmDialog && (
            <div className={stylesDetail.confirmDialog}>
              {isNaN(id) ? (
                <>
                  <p>Are you sure you want to delete this card??</p>
                  <button onClick={confirmDelete}>Yes</button>
                  <button onClick={() => setShowConfirmDialog(false)}>No</button>
                </>
              ) : (
                <>
                  <p>Sorry, they can only be deleted in the database</p>
                  <button onClick={() => setShowConfirmDialog(false)}>Close</button>
                </>
              )}
            </div>
          )}
          {!filmDetail.image || filmDetail.image === "none" ? (
            <img src={noPhoto} alt={filmDetail.image} />
          ) : (
            <img src={`https://image.tmdb.org/t/p/w500${filmDetail.image}`} alt={filmDetail.image} />
          )}
          <h2 className={stylesDetail.h2}>ID | {filmDetail.id}</h2>
          {filmDetail.name ? (
            <h2 className={stylesDetail.h2}>TITLE | {filmDetail.name}</h2>
          ) : (
            <h2 className={stylesDetail.h2}>TITLE | {filmDetail.title}</h2>
          )}
          <h2 className={stylesDetail.h2}>YEAR | {filmDetail.year}</h2>
          <h2 className={stylesDetail.h2}>LANGUAGE | {filmDetail.language}</h2>
          <h2 className={stylesDetail.h2}>OVERVIEW | {filmDetail.overview}</h2>
        </div>
        <div className={stylesDetail.formButtons}>
          <button onClick={handleCreateForm}>Create movie</button>
        </div>
          <div className={stylesDetail.formButtons}>
          <button onClick={handleModifyForm}>Modify movie</button>
        </div>
      </div>
        {isCreating && <Form />}
        {isModifying && <ModifyForm id={id} />}
    </div>}
    </div>
  );
};

export default Detail;
