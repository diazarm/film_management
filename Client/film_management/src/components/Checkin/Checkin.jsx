import { useState } from 'react';
import './login.css'; 
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {register} from "../../redux/actions"

const Checkin = () => {
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
    dispatch(register(formData));
    alert("Successful registration");
    window.location.reload()

  };

  return (
    <div className="login-container">
      <h2>Check-in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">New user:</label>
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
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <NavLink to="/">Return to main page</NavLink>
    </div>
  );
};

export default Checkin;
