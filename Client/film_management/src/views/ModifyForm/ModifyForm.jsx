import { useState } from "react";
import { useDispatch } from "react-redux";
import { postFilm } from "../../redux/actions";
import validationForm from "../../helpers/Validations/ValidationForm";
import stylesForm from "./ModifyForm.module.css";
import PropTypes from 'prop-types';


const ModifyForm = ({id}) => {
    const [form, setForm] = useState({
        title: "",
        year: "",
        language: "",
        overview: "",
        image: "",
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
        setErrors(validationForm({
            ...form,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe por defecto
        dispatch(postFilm(form));
        alert("Your movie has been modificated");
        // Puedes realizar alguna redirección aquí si es necesario
    };
    
    return (
        <div className={stylesForm.div}>
            {console.log("aquiiiii" , id)}
            <div className={stylesForm.divForm}>
            <p className={stylesForm.title}>Modify movie from database</p>
            <p className={stylesForm.id}>ID: {id}</p>
                <form onSubmit={handleSubmit} className={stylesForm.form}>
                    <div className={stylesForm.divAct}>
                        <label htmlFor="title" className={stylesForm.labelAct}>Title</label>
                        <input type="text" name="title" className={stylesForm.inputAct} placeholder="put the title here..." value={form.title} onChange={handleChange} />
                        {errors.title && <span className={stylesForm.spans}>{errors.title}</span>}
                    </div>
                    <div className={stylesForm.divAct}>
                        <label htmlFor="year" className={stylesForm.labelAct}>Year</label>
                        <input type="text" name="year" className={stylesForm.inputAct} placeholder="here the year..." value={form.year} onChange={handleChange} />
                        {errors.year && <span className={stylesForm.spans}>{errors.year}</span>}
                    </div>
                    <div className={stylesForm.divAct}>
                        <label htmlFor="language" className={stylesForm.labelAct}>Language</label>
                        <input type="text" name="language" className={stylesForm.inputAct} placeholder="language.." value={form.language} onChange={handleChange} />
                        {errors.language && <span className={stylesForm.spans}>{errors.language}</span>}
                    </div>
                    <div className={stylesForm.divAct}>
                        <label htmlFor="overview" className={stylesForm.labelAct}>Overview</label>
                        <input type="text" name="overview" className={stylesForm.inputAct} placeholder="overview..." value={form.overview} onChange={handleChange} />
                        {errors.overview && <span className={stylesForm.spans}>{errors.overview}</span>}
                    </div>
                    <div className={stylesForm.divAct}>
                        <label htmlFor="image" className={stylesForm.labelAct}>Image</label>
                        <input type="text" name="image" className={stylesForm.inputAct} placeholder="image url..." value={form.image} onChange={handleChange} />
                        {errors.image && <span className={stylesForm.spans}>{errors.image}</span>}
                    </div>
                    <button className={stylesForm.btnSubmit} type="submit" disabled={Object.keys(errors).length > 0}>Modify movie in database</button>
                </form>
               
            </div>
        </div>
    );
};

ModifyForm.propTypes = {
    id: PropTypes.string.isRequired, // O el tipo de dato adecuado para tu ID
  };
  
export default ModifyForm;

