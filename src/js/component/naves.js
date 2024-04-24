import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Naves = (props) => {
	const { store, actions } = useContext(Context);
	const [imageError, setImageError] = useState(false); 
	const handleAddToFavorites = () => {
        actions.addToFavorites(props.name); // Agrega el nombre de la nave a la lista de favoritos
    };
	const handleImageError = () => {
        setImageError(true); // Establece el estado de error en verdadero
    };
	return (
        
		<div className="card" style={{width: "18rem",}}>
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
                    onError={handleImageError} // Manejo de error al cargar la imagen
                />
            )}

  	  <div className="card-body">
    		<h5 className="card-title">{props.name}</h5>
    		<p className="card-text">Nave info.</p>
			<div className="buttons display-flex">
                <Link className="more btn btn-primary m-3" to={"/singleNave/" + props.uid}><span>Learn more!</span></Link>
                <button className="heart btn btn-warning" onClick={handleAddToFavorites}><i className="fa-regular fa-heart"></i></button>
            </div>
			
    		
  	  </div>
      </div>
      
	);
}

