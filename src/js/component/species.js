import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Species = (props) => {
    const { actions } = useContext(Context);
    const [imageError, setImageError] = useState(false); 
    const [iconColor, setIconColor] = useState("white");

    const handleAddToFavorites = () => {
        actions.addToFavorites(props.name);
        setIconColor("red");
    };
    const handleImageError = () => {
        setImageError(true); 
    };

    return (
        <div className="card" style={{width: "18rem"}}>
{imageError ? ( // Si hay un error al cargar la imagen, mostrar una imagen alternativa
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/el-despertar-de-la-fuerza-1575448990.jpg?crop=1xw:1xh;center,top&resize=980:*"
                    className="card-img-top"
                    alt="Character"
                />
            ) : (
                <img
                    src={`https://starwars-visualguide.com/assets/img/species/${props.uid}.jpg`}
                    className="card-img-top"
                    alt="Character"
                    onError={handleImageError} 
                />
            )}




    
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Species info.</p>
                <div className="buttons display-flex">
                    <Link className="btn btn-warning m-3 rounded-pill" to={"/singlePlanet/" + props.uid}><span className="more">Learn more!</span></Link>
                    <button className="heart btn" onClick={handleAddToFavorites}><i className="fa-solid fa-heart" style={{color:iconColor}}></i></button>
                </div>
            </div>
        </div>
    );
};