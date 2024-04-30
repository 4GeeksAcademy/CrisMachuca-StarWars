import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Species = (props) => {
    const { store, actions } = useContext(Context);
    const [imageError, setImageError] = useState(false);
    const [iconColor, setIconColor] = useState("white"); // Estado local para el color del icono

    useEffect(() => {
        // Verificar si la especie está en la lista de favoritos y establecer el color del icono en rojo si es así
        if (store.favorites.some(favorite => favorite.uid === props.uid && favorite.type === 'singleSpecie')) {
            setIconColor("red");
        } else {
            setIconColor("white"); // Establecer el color del icono en blanco si la especie no está en la lista de favoritos
        }
    }, [store.favorites, props.uid]);

    const handleAddToFavorites = () => {
        actions.addToFavorites({ ...props, type: 'singleSpecie' });
        setIconColor("red"); // Actualizar el color del icono localmente al hacer clic en el corazón
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            {imageError ? ( // Si hay un error al cargar la imagen, mostrar una imagen alternativa
                <img
                    src="https://hips.hearstapps.com/hmg-prod/images/el-despertar-de-la-fuerza-1575448990.jpg?crop=1xw:1xh;center,top&resize=980:*"
                    className="card-img-top"
                    alt="Specie"
                />
            ) : (
                <img
                    src={`https://starwars-visualguide.com/assets/img/species/${props.uid}.jpg`}
                    className="card-img-top"
                    alt="Specie"
                    onError={handleImageError}
                />
            )}
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="buttons display-flex">
                    <Link className="btn btn-warning m-3 rounded-pill" to={"/singleSpecie/" + props.uid}><span className="more">Learn more!</span></Link>
                    <button className="heart btn" onClick={handleAddToFavorites}><i className="fa-solid fa-heart" style={{ color: iconColor }}></i></button>
                </div>
            </div>
        </div>
    );
};
