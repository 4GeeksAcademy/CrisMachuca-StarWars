import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleNave = props => {
    const { store, actions } = useContext(Context);
    const [starship, setStarship] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch('https://www.swapi.tech/api/starships/' + params.nave_id)
            .then((response) => response.json())
            .then((data) => setStarship(data.result.properties))
            
           
    }, []);
console.log(params)
    return (
        <div className="jumbotron">
            <h1 className="display-4">{starship.name}</h1>
            <hr className="my-4" />
           
            <div>
                <h2>Name: {starship.name}</h2>
                <p>Model: {starship.model}</p>
				<p>Manufacturer: {starship.manufacturer}</p>
				<p>Passengers: {starship.passengers}</p>
			
               
            </div>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

SingleNave.propTypes = {
    match: PropTypes.object
};
