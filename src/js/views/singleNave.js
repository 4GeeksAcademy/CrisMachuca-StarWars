import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleNave = props => {
    const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState({});
    const [starshipImage, setStarshipImage] = useState(null); // Inicialmente establecemos la imagen en null
    const [imageError, setImageError] = useState(false); 
    const params = useParams();

    useEffect(() => {
        fetchStarshipData();
    }, []);

    const fetchStarshipData = () => {
        fetch('https://www.swapi.tech/api/starships/' + params.nave_id)
            .then((response) => response.json())
            .then((data) => {
                setStarship(data.result.properties);
                const starshipImage = `https://starwars-visualguide.com/assets/img/starships/${params.nave_id}.jpg`;
                setStarshipImage(starshipImage);
            })
            .catch((error) => {
                console.error("Error loading starship data:", error);
                setImageError(true); 
            });
    };

    return (
        <div className="container bg-light text-center mt-5">
            <div className="jumbotron">
                <h1 className="display-4">{starship.name}</h1>
                <hr className="my-4" />
                <div className="image">
                    {starshipImage && !imageError && ( // Verificamos si hay una imagen real disponible y no hay error
                        <img
                            src={starshipImage}
                            alt={starship.name}
                            onError={() => setImageError(true)} // Si hay un error al cargar la imagen real, establecemos el estado de error
                        />
                    )}
                    {imageError && ( // Mostrar la imagen alternativa solo si hay un error al cargar la imagen real
                        <img
                            src="https://i.blogs.es/e8942b/millennium-falcon/450_1000.jpg"
                            alt={starship.name}
                        />
                    )}
                </div>
                <div>
                    <h2>Name: {starship.name}</h2>
                    <p>Model: {starship.model}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Passengers: {starship.passengers}</p>
                </div>
                <Link to="/">
                    <span className="btn btn-primary btn-lg mb-5" href="#" role="button">
                        Back home
                    </span>
                </Link>
            </div>
        </div>
    );
};

SingleNave.propTypes = {
    match: PropTypes.object
};
