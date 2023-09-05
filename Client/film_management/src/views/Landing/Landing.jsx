import style from "./Landing.module.css";
import Login from "../../components/Login/Login";

const Landing = () => {
    return (
        <div className={style.div}>
            <h1 className={style.welcome}>WELCOME!</h1>
            <Login/>
        </div>
    );
};

export default Landing;