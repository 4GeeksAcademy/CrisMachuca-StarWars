import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Naves = (props) => {
	const { store, actions } = useContext(Context);

	return (
        
		<div className="card" style={{width: "18rem",}}>
  		<img src={`https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`} className="card-img-top" alt="..."/>
  	  <div className="card-body">
    		<h5 className="card-title">{props.title}</h5>
    		<p className="card-text">Nave info.</p>
			<div className="buttons display-flex">
                <Link className="more btn btn-primary m-3" to={"/singleNave/" + props.uid}><span>Learn more!</span></Link>
                <button className="heart btn btn-warning"><i className="fa-regular fa-heart"></i></button>
            </div>
			
    		
  	  </div>
      </div>
      
	);
}

