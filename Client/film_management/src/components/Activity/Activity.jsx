import { useDispatch } from "react-redux";
import { deleteActivity } from "../../redux/actions";
import stylesActivity from "./Activity.module.css";

const Activity = (activities) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (confirm("Are you sure want to delete the activity?")) {
            dispatch(deleteActivity(activities.id));
            alert("The activity has been successfully deleted");
            }
    };
    const countryNames = activities.Countries.map((country) => country.name)
    return (
        <div className={stylesActivity.div}>
            <div className={stylesActivity.divbtn}>
                <button onClick={handleDelete}>X</button>
            </div>
            <div className={stylesActivity.divAct}>
                <h2>{activities.name}</h2>
                <h4>Difficulty: {activities.difficulty}/5</h4>
                <h4>Duration: {activities.duration} hs</h4>
                <h4>Season: {activities.season }</h4>
                <h4>Countries: {countryNames}</h4>
            </div>
        </div>
    );
};

export default Activity;