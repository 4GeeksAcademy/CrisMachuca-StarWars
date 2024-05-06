import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState({});
    const [characterImage, setCharacterImage] = useState("");
    const params = useParams();

    useEffect(() => {
        fetchCharacterData();
    }, []);

    const fetchCharacterData = () => {
        fetch(`https://www.swapi.tech/api/people/${params.character_id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log("Character:", data.result.properties);
                setCharacter(data.result.properties);
                const characterImage = `https://starwars-visualguide.com/assets/img/characters/${params.character_id}.jpg`;
                setCharacterImage(characterImage);
            })
            .catch((error) => {
                console.error('Error fetching character:', error);
            });
    };

    return (
        <div className="container text-center text-white mt-5 mb-5 p-1 single-card">
            <div className="jumbotron">
                <h1 className="display-4">{character.name}</h1>
                <hr className="my-4" />
                <div className="d-flex justify-content-evenly pb-3 flex-column flex-md-row">
                <div className="image ps-3">
                    {characterImage && ( // Verificamos si hay una imagen real cargada
                        <img
                            src={characterImage}
                            alt={character.name}
                            style={{width:"300px"}}
                        />
                    )}
                </div>
                <div>
                    <div className="properties ps-3 mt-2">
                    <p>Height: {character.height}</p>
                    <p>Hair color: {character.hair_color}</p>
                    <p>Eyes color: {character.eye_color}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Birthday: {character.birth_year}</p>
                    </div>
                    <Link to="/">
                    <span className="btn btn-warning btn-lg mt-5 mb-5" href="#" role="button">
                        Back home
                    </span>
                    </Link>
                </div>
                </div>
                
            </div>
        </div>
    );
};

SingleCharacter.propTypes = {
    match: PropTypes.object
};
