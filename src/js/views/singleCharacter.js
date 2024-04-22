import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
    const { store, actions } = useContext(Context);
    const [people, setPeople] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch('https://www.swapi.tech/api/people/' + params.character_id)
            .then((response) => response.json())
            .then((data) => setPeople(data.result.properties))
            
           
    }, []);
console.log(params)
    return (
        <div className="jumbotron">
            <h1 className="display-4">{people.name}</h1>
            <hr className="my-4" />
           
            <div>
                <h2>Name: {people.name}</h2>
                <p>Model: {people.model}</p>
				<p>Manufacturer: {people.manufacturer}</p>
				<p>Passengers: {people.passengers}</p>
			
               
            </div>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

SingleCharacter.propTypes = {
    match: PropTypes.object
};
