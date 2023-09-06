import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyFilm } from "../../redux/actions";
import stylesForm from "./ModifyForm.module.css";
import PropTypes from 'prop-types';

const ModifyForm = ({ id }) => {
  const [form, setForm] = useState({
    title: "",
    year: "",
    language: "",
    overview: "",
    image: "",
  });
  
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("aqui desde handler", form);
    dispatch(modifyFilm(id, form));
    window.location.reload()
    alert("Your movie has been modified");
  };
  
  ModifyForm.propTypes = {
    id: PropTypes.string.isRequired,
  }
  
  return (
    <div className={stylesForm.div}>
      <div className={stylesForm.divForm}>
        <p className={stylesForm.title}>Modify movie from database</p>
        <p className={stylesForm.id}>ID: {id}</p>
        <form onSubmit={handleSubmit} className={stylesForm.form}>
          <div className={stylesForm.divAct}>
            <label htmlFor="title" className={stylesForm.labelAct}>Title</label>
            <input type="text" name="title" className={stylesForm.inputAct} placeholder="put the title here..." value={form.title} onChange={handleChange} />
          </div>
          <div className={stylesForm.divAct}>
            <label htmlFor="year" className={stylesForm.labelAct}>Year</label>
            <input type="text" name="year" className={stylesForm.inputAct} placeholder="here the year..." value={form.year} onChange={handleChange} />
          </div>
          <div className={stylesForm.divAct}>
            <label htmlFor="language" className={stylesForm.labelAct}>Language</label>
            <input type="text" name="language" className={stylesForm.inputAct} placeholder="language.." value={form.language} onChange={handleChange} />
          </div>
          <div className={stylesForm.divAct}>
            <label htmlFor="overview" className={stylesForm.labelAct}>Overview</label>
            <input type="text" name="overview" className={stylesForm.inputAct} placeholder="overview..." value={form.overview} onChange={handleChange} />
          </div>
          <div className={stylesForm.divAct}>
            <label htmlFor="image" className={stylesForm.labelAct}>Image</label>
            <input type="text" name="image" className={stylesForm.inputAct} placeholder="image url..." value={form.image} onChange={handleChange} />
          </div>
          <button className={stylesForm.btnSubmit} type="submit">Modify movie in database</button>
        </form>
      </div>
      
    </div>
  );
};


export default ModifyForm;


