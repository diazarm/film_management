import { useState } from 'react';
import './login.css'; 
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ingreso } from "../../redux/actions";

const Login = () => {

  const dispatch = useDispatch();

  
  const [formData, setFormData] = useState({
    user: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch (ingreso(formData))

    console.log('Datos de inicio de sesión enviados:', formData);
  };

  return (
    <div className="login-container">
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <NavLink to="/checkin">
      <button>Register</button>
      </NavLink>
    </div>
  );
};

export default Login;
