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

    const handleDeleteFavorite = (index) => {
        actions.deleteFavorite(index); 
    };

    return (
        <div>
            <div className="social d-flex gap-3 p-3">
                        <a href="https://github.com/CrisMachuca"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/cristina-machuca-mart%C3%ADnez-5636b2274/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        <nav className="navbar">
          <Link to="/">
            <div className="navbar-brand text-center d-flex flex-column  me-sm-0  gap-1" href="#">
                <h1 className="logo">STAR</h1>
                <h1 className="logo">WARS</h1>
            </div>  
          </Link>  
            <div className="pb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
                <span className="navbar-toggler-icon" style={{color:"white"}}></span>
            </button>
            <div className="collapse navbar-collapse d-flex flex-column" id="opciones">
                <div className="navsuperior container-fluid d-flex gap-3 align-items-center justify-content-between mb-2">
                    
                    
                <div className="search-form d-flex bg-outline-warning bg-warning p-2 rounded-pill">
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
                    
                </form>
                <i className="fa-solid fa-magnifying-glass" style={{color: "black"}}></i>
            </div>

                    <div className="dropdown dropdown-center">
                        <Link to="/" type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <i className="fa-solid fa-heart"></i> <span className="ms-1 d-none d-sm-inline">Favorites {store.favorites.length}</span>
                        </Link>
                        <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-dark ${store.favorites.length > 0 ? 'show' : ''}`} style={{ minWidth: "fit-content" }} aria-labelledby="navbarDropdown" >
                            {store.favorites.map((favorite, index) => (
                                <li key={index} className="dropdown-item d-flex align-items-center justify-content-between">
                                    <Link className="dropdown-item" to={"/singleCharacter/" + index}>{favorite}</Link>
                                    <button className="btn btn-link" onClick={() => handleDeleteFavorite(index)}><i className="fas fa-trash"></i></button>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <ul className="navbar-nav d-flex flex-row gap-3">
                    
                    
                    <li className="nav-item">
                        <ScrollLink to="planets" smooth={true} className="nav-link">
                            <i className="fa-solid fa-earth-americas"></i> <span className="ms-1 d-none d-sm-inline item-glow">Planets</span>
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="starships" smooth={true} className="nav-link">
                            <i className="fa-solid fa-shuttle-space"></i> <span className="ms-1 d-none d-sm-inline item-glow">Starships</span>
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="characters" smooth={true} className="nav-link">
                            <i className="fa-solid fa-user-astronaut"></i> <span className="ms-1 d-none d-sm-inline item-glow">Characters</span>
                        </ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink to="species" smooth={true} className="nav-link">
                        <i className="fa-solid fa-spaghetti-monster-flying"></i><span className="ms-1 d-none d-sm-inline item-glow">Species</span>
                        </ScrollLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </div>
    );
};
