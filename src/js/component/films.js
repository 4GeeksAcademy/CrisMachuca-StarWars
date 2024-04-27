import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Films = (props) => {
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
                    src="https://cdna.artstation.com/p/assets/images/images/017/390/192/large/brian-hagan-pla-ossus-final.jpg?1555781865"
                    className="card-img-top"
                    alt="Character"
                />
            ) : (
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`}
                    className="card-img-top"
                    alt="Character"
                    onError={handleImageError} 
                />
            )}




    
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Planet info.</p>
                <div className="buttons display-flex">
                    <Link className="btn btn-warning m-3 rounded-pill" to={"/singlePlanet/" + props.uid}><span className="more">Learn more!</span></Link>
                    <button className="heart btn" onClick={handleAddToFavorites}><i className="fa-solid fa-heart" style={{color:iconColor}}></i></button>
                </div>
            </div>
        </div>
    );
};