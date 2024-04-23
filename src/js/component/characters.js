import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (props) => {
    const { store, actions } = useContext(Context);
    const handleAddToFavorites = () => {
        actions.addToFavorites(props.name); // Agrega el nombre del personaje a la lista de favoritos
    };
    return (

        <div className="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5> 
                <p className="card-text">Character info.</p>
                <div className="buttons display-flex">
                    <Link className="more btn btn-primary m-3" to={"/singleCharacter/" + props.uid}><span>Learn more!</span></Link>
                    <button className="heart btn btn-warning" onClick={handleAddToFavorites}><i className="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    );
};