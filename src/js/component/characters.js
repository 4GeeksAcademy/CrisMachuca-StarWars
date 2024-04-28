import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = (props) => {
    const {  actions } = useContext(Context);
    const [iconColor, setIconColor] = useState("white");
    const handleAddToFavorites = () => {
        actions.addToFavorites(props.name); 
        setIconColor("red");
    };
    return (

        <div className="card" style={{width: "18rem"}}>
            
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} className="card-img-top" alt="..." />
            
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5> 
                <p className="card-text">Character info.</p>
                <div className="buttons display-flex">
                    <Link className="btn btn-warning m-3 rounded-pill" to={"/singleCharacter/" + props.uid}><span className="more">Learn more!</span></Link>
                    <button className="heart btn" onClick={handleAddToFavorites}><i className="fa-solid fa-heart" style={{color:iconColor}}></i></button>
                </div>
            </div>
        </div>
    );
};