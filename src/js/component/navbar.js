import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link as ScrollLink } from "react-scroll";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        actions.search(event.target.value);
    };

    const handleDeleteFavorite = (uid, type) => {
        actions.deleteFavorite(uid, type);
    };

    return (
        
        <div>
        <div className="social d-flex gap-3 p-3">
            <a href="https://github.com/CrisMachuca" className="star-wars-link"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/cristina-machuca-mart%C3%ADnez-5636b2274/" className="star-wars-link"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className="d-flex justify-content-around align-items-center">
            <Link to="/">
                <div className="navbar-brand text-center d-flex flex-column gap-1 logo-container" href="#">
                    <h1 className="logo">STAR</h1>
                    <h1 className="logo">WARS</h1>
                </div>
            </Link>
            <div className="d-flex align-items-center">



                <div className="dropdown ms-3 me-3">
                    <Link to="/" className="btn btn-outline-warning dropdown-toggle" type="button" data-bs-toggle="dropdown"  aria-expanded="false">
                        <i className="fa-solid fa-heart"></i> <span className="ms-1 d-none d-sm-inline fav-text">Favorites <h4>{store.favorites.length}</h4></span>
                    </Link>
                    <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-dark ${store.favorites.length > 0 ? 'show' : ''}`} style={{ minWidth: "fit-content" }} >
                        {store.favorites.map((favorite, index) => (
                            <li key={`${favorite.uid}-${favorite.type}`} className="dropdown-item d-flex align-items-center justify-content-between">
                                <Link  to={`/${favorite.type}/${favorite.uid}`} style={{fontFamily: "monospace", fontSize:"1.5em"}}>{favorite.name}</Link>
                                <button className="btn btn-link" onClick={() => handleDeleteFavorite(favorite.uid, favorite.type)}><i className="fas fa-trash"></i></button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-md">
            <div className="pb-3">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#opciones">
                    <span className="navbar-toggler-icon" style={{color:"white"}}></span>
                </button>
                <div className="collapse navbar-collapse" id="opciones">
                    <div className="navsuperior container-fluid d-flex gap-3 align-items-center justify-content-center mb-2">
                        <div className="row">
                            <div className="col-md-12">
                                
                                <ul className="navbar-nav d-flex align-items-center">
                                    
                                    <li className="nav-item">
                                        <ScrollLink to="planets" smooth={false} className="nav-link">
                                            <i className="fa-solid fa-earth-americas"></i> <span className="ms-1 d-md-inline item-glow ">Planets</span>
                                        </ScrollLink>
                                    </li>
                                    <li className="nav-item">
                                        <ScrollLink to="starships" smooth={false} className="nav-link">
                                            <i className="fa-solid fa-shuttle-space"></i> <span className="ms-1 d-md-inline item-glow ">Starships</span>
                                        </ScrollLink>
                                    </li>
                                    <li className="nav-item">
                                        <ScrollLink to="characters" smooth={false} className="nav-link">
                                            <i className="fa-solid fa-user-astronaut"></i> <span className="ms-1 d-md-inline item-glow ">Characters</span>
                                        </ScrollLink>
                                    </li>
                                    <li className="nav-item">
                                        <ScrollLink to="species" smooth={false} className="nav-link">
                                            <i className="fa-solid fa-spaghetti-monster-flying"></i><span className="ms-1 d-md-inline item-glow ">Species</span>
                                        </ScrollLink>
                                    </li>
                                    <div className="search-form d-flex bg-outline-warning bg-warning p-1 ms-3 rounded-pill">
                    <form className="d-flex">
                        <input
                            className="form-control me-2 text-black rounded-pill"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleSearch}
                            style={{border: "2px solid black"}}
                        />
                        <i className="fa-solid fa-magnifying-glass" style={{color: "black"}}></i>
                    </form>
                    
                </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>



    );
};
