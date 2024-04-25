import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
    const { store, actions } = useContext(Context);
    const [planet, setPlanet] = useState({});
    const params = useParams();

    useEffect(() => {
        fetchPlanetData();
    }, []);

    const fetchPlanetData = () => {
        fetch('https://www.swapi.tech/api/planets/' + params.planet_id)
            .then((response) => response.json())
            .then((data) => {
                setPlanet(data.result.properties);
            })
            .catch((error) => {
                console.error("Error loading planet data:", error);
            });
    };

    return (
        <div className="container bg-light text-center mt-5">
            <div className="jumbotron">
                <h1 className="display-4">{planet.name}</h1>
                <hr className="my-4" />
                <div className="image">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${params.planet_id}.jpg`}
                        alt={planet.name}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://cdna.artstation.com/p/assets/images/images/017/390/192/large/brian-hagan-pla-ossus-final.jpg?1555781865"; }}
                    />
                </div>
                <div>
                    <h2>Name: {planet.name}</h2>
                    <p>Diameter: {planet.diameter}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Population: {planet.population}</p>
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

SinglePlanet.propTypes = {
    match: PropTypes.object
};
