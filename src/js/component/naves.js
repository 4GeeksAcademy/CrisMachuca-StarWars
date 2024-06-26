import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Naves = (props) => {
    const { store, actions } = useContext(Context);
    const [imageError, setImageError] = useState(false);
    const [iconColor, setIconColor] = useState("white");
    
    useEffect(() => {
        // Verificar si la nave está en la lista de favoritos y establecer el color del icono en rojo si es así
        if (store.favorites.some(favorite => favorite.uid === props.uid && favorite.type === 'singleNave')) {
            setIconColor("red");
        } else {
            setIconColor("white"); // Establecer el color del icono en blanco si la nave no está en la lista de favoritos
        }
    }, [store.favorites, props.uid]);
    
    const handleAddToFavorites = () => {
        actions.addToFavorites({...props, type: 'singleNave' });
    };
    
    
    const handleImageError = () => {
        setImageError(true);
    };
    
    return (
        <div className="card" style={{ width: "18rem" }}>
            {imageError ? ( // Si hay un error al cargar la imagen, mostrar una imagen alternativa
                <img
                    src="https://i.blogs.es/e8942b/millennium-falcon/450_1000.jpg"
                    className="card-img-top"
                    alt="Character"
                />
            ) : (
                <img
                    src={`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`}
                    className="card-img-top"
                    alt="Character"
                    onError={handleImageError}
                />
            )}
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="buttons display-flex">
                    <Link className="btn btn-warning m-3 rounded-pill" to={"/singleNave/" + props.uid}><span className="more">Learn more!</span></Link>
                    <button className="heart btn" onClick={handleAddToFavorites}><i className="fa-solid fa-heart" style={{ color: iconColor }}></i></button>
                </div>
            </div>
        </div>
    );
};
