import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleDeleteFavorite = (index) => {
        actions.deleteFavorite(index); // Llama a la función para eliminar el favorito
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand text-center" href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" height="180px" alt="" className="logo"/>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#opciones">
                <span className="navbar-toggler-icon" style={{color:"white"}}></span>
            </button>
            <div className="collapse navbar-collapse d-flex flex-column" id="opciones">
                <div className="navsuperior container-fluid d-flex align-items-center justify-content-between">
                    <div className="social d-flex">
                        <a><i className="fa-brands fa-github"></i></a>
                        <a><i className="fa-brands fa-linkedin"></i></a>
                        <a><i className="fa-brands fa-github"></i></a>
                    </div>
                    
                    <div className="search-form">
                        <form className="d-flex">
                            <input className="form-control me-2 text-black" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                    </div>
					<div className="favorites-dropdown">
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link" aria-haspopup="true" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-heart"></i> <span className="ms-1 d-none d-sm-inline">Favorites</span>
                            </Link>
                            <ul className={`dropdown-menu bg-dark ${store.favorites.length > 0 ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                {store.favorites.map((favorite, index) => (
                                    <li key={index} className="d-flex align-items-center justify-content-between">
                                        <Link className="dropdown-item" to={"/favorite/" + index}>{favorite}</Link>
                                        <button className="btn btn-link" onClick={() => handleDeleteFavorite(index)}><i className="fas fa-trash"></i></button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </div>
                </div>
                <ul className="navbar-nav d-flex flex-row gap-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fa-solid fa-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link> 
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fa-solid fa-earth-americas"></i> <span className="ms-1 d-none d-sm-inline">Planets</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fa-solid fa-shuttle-space"></i> <span className="ms-1 d-none d-sm-inline">Vehicles</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fa-solid fa-user-astronaut"></i> <span className="ms-1 d-none d-sm-inline">Characters</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
};
