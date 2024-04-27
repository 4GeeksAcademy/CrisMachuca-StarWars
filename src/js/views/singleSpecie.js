import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleSpecie = props => {
    const { store, actions } = useContext(Context);
    const [specie, setSpecie] = useState({});
    const [specieImage, setSpecieImage] = useState("");
    const params = useParams();

    useEffect(() => {
        fetchSpecieData();
    }, []);

    const fetchSpecieData = () => {
        fetch(`https://www.swapi.tech/api/species/${params.specie_id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log("Specie:", data.result.properties);
                setSpecie(data.result.properties);
                const specieImage = `https://starwars-visualguide.com/assets/img/species/${params.specie_id}.jpg`;
                setSpecieImage(specieImage);
            })
            .catch((error) => {
                console.error('Error fetching character:', error);
                // No hacemos nada si hay un error al cargar la imagen real
            });
    };

    return (
        <div className="container bg-light text-center mt-5">
            <div className="jumbotron">
                <h1 className="display-4">{specie.name}</h1>
                <hr className="my-4" />
                <div className="image">
                    {specieImage && ( // Verificamos si hay una imagen real cargada
                        <img
                            src={specieImage}
                            alt={specie.name}
                        />
                    )}
                </div>
                <div>
                    <h2>Name: {specie.name}</h2>
                    <p>Classification: {specie.classification}</p>
                    <p>Language: {specie.language}</p>
                    <p>Designation: {specie.designation}</p>
                    <p>Average Lifespan: {specie.average_lifespan}</p>
                    <p>Average Height: {specie.average_height}</p>
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

SingleSpecie.propTypes = {
    match: PropTypes.object
};
