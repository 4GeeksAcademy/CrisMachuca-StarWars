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
        <div className="container text-center mt-5 text-white">

<div className="jumbotron mb-3 d-flex" style={{minWidth: "360px"}}>
  <div className="row g-0">
    <div className="col-md-8">
    {specieImage && ( // Verificamos si hay una imagen real cargada
                        <img
                            src={specieImage}
                            alt={specie.name}
                            className="rounded-start"
                        />
                    )}
    </div>
    <div className="col-md-4">
      <div className="card-body text-back">
      <h2>{specie.name}</h2>
                    <p>Classification: {specie.classification}</p>
                    <p>Language: {specie.language}</p>
                    <p>Designation: {specie.designation}</p>
                    <p>Average Lifespan: {specie.average_lifespan}</p>
                    <p>Average Height: {specie.average_height}</p>
                    <Link to="/">
                    <span className="btn btn-primary btn-lg mb-5" href="#" role="button">
                        Back home
                    </span>
                </Link>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

SingleSpecie.propTypes = {
    match: PropTypes.object
};
