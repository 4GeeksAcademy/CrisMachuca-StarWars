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
        <div className="container text-center text-white mt-5 mb-5 p-1 single-card">
            <div className="jumbotron">
                <h1 className="display-4">{planet.name}</h1>
                <hr className="my-4" />
                <div className="d-flex justify-content-evenly pb-3 flex-column flex-md-row">
                <div className="image image ps-3">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/planets/${params.planet_id}.jpg`}
                        alt={planet.name}
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://cdna.artstation.com/p/assets/images/images/017/390/192/large/brian-hagan-pla-ossus-final.jpg?1555781865"; }}
                        style={{width:"300px"}}
                    />
                </div>
                
                <div>
                <div className="properties ps-3 mt-2">
                    <p>Diameter: {planet.diameter}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Population: {planet.population}</p>
                </div>
                </div>
                <Link to="/">
                    <span className="btn btn-warning btn-lg mt-5 mb-5" href="#" role="button">
                        Back home
                    </span>
                </Link>
            </div>
            </div>
        </div>
    );
};

SinglePlanet.propTypes = {
    match: PropTypes.object
};
