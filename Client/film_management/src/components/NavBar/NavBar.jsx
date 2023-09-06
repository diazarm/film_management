import { Link, useNavigate } from "react-router-dom";
import stylesNavBar from "./NavBar.module.css";
import HomeIcon  from "../../assets/images/cartoon.gif";


const NavBar = () => {
    const navigate = useNavigate()

    const handleHomeClick = () => {
        navigate('/home')
        window.location.reload()
    };

    return (
        <div className={stylesNavBar.divNav}>
            <Link to='/home'>
                <button className={stylesNavBar.btn} onClick={handleHomeClick}>
                    <img src={HomeIcon} alt="HomeIcon" className={stylesNavBar.img}/> Back to home </button>
            </Link>
        </div>
    )
};

export default NavBar;