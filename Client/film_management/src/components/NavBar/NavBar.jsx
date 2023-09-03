import { Link } from "react-router-dom";
//import SearchBar from "../SearchBar/SearchBar";
import stylesNavBar from "./NavBar.module.css";
import HomeIcon  from "../../assets/images/HomeIcon.png";
// import ActivitiesIcon1 from "../../assets/images/ActivitiesIcon1.png";
// import ActivitiesIcon2 from "../../assets/images/ActivitiesIcon2.png";
// import ActivitiesIcon3 from "../../assets/images/ActivitiesIcon3.png";
// import ActivitiesIcon4 from "../../assets/images/ActivitiesIcon4.png";

const NavBar = () => {
//    const location = useLocation();
    return (
        <div className={stylesNavBar.divNav}>
            <Link to='/home'>
                <button className={stylesNavBar.btn}>
                    <img src={HomeIcon} alt="HomeIcon" className={stylesNavBar.img}/> Home </button>
            </Link>
            {/* {location.pathname === "/home" && <SearchBar />}
            {location.pathname === "/activities" && 
            <Link to="/create"> 
                <button className={stylesNavBar.btn}> Add new Movie</ button>
            </Link>
            }
            <Link to='/activities'>
                <button className={stylesNavBar.btn}>
                    <img src={ActivitiesIcon1} alt="ActivitiesIcon1" className={stylesNavBar.img}/>
                    <img src={ActivitiesIcon2} alt="ActivitiesIcon2" className={stylesNavBar.img}/>
                    Movies
                    <img src={ActivitiesIcon3} alt="ActivitiesIcon3" className={stylesNavBar.img}/>
                    <img src={ActivitiesIcon4} alt="ActivitiesIcon4" className={stylesNavBar.img}/>
                </button>
            </Link> */}
        </div>
    )
};

export default NavBar;