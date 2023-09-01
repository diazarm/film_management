import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActivities } from "../../redux/actions";
import ActivitiesContainer from "../../components/ActivitiesContainer/ActivitiesContainer";
import stylesActivities from "./Activities.module.css";

const Activities = () => {
    
    const dispatch = useDispatch();
    const { activities } = useSelector((state) => state);
    
    useEffect(() => {
        if (!activities.length) dispatch(getActivities());
    }, [activities.length, dispatch])

    return (
        <div className={stylesActivities.div}>
            <div className={stylesActivities.divActs}>
                <ActivitiesContainer activities={activities}/>
            </div>
            {!activities.length && <div className={stylesActivities.divNoActivities}><h2>There are not activities</h2></div>}
        </div>
    );
};

export default Activities;
