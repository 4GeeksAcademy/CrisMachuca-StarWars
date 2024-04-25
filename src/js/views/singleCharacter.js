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
                // No hacemos nada si hay un error al cargar la imagen real
            });
    };

    return (
        <div className="container bg-light text-center mt-5">
            <div className="jumbotron">
                <h1 className="display-4">{character.name}</h1>
                <hr className="my-4" />
                <div className="image">
                    {characterImage && ( // Verificamos si hay una imagen real cargada
                        <img
                            src={characterImage}
                            alt={character.name}
                        />
                    )}
                </div>
                <div>
                    <h2>Name: {character.name}</h2>
                    <p>Height: {character.height}</p>
                    <p>Hair color: {character.hair_color}</p>
                    <p>Eyes color: {character.eye_color}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Birthday: {character.birth_year}</p>
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

SingleCharacter.propTypes = {
    match: PropTypes.object
};
