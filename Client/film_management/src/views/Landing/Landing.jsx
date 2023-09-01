import { NavLink } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={style.div}>
            <h1 className={style.welcome}>WELCOME!</h1>
            <NavLink to="/home">
              <button className={style.home}>Please Push Here!</button>
          </NavLink>
        </div>
    );
};

export default Landing;