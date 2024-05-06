import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        // Mostrar el botón cuando el usuario haya hecho scroll más de 400px desde la parte superior
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        // Desplazar suavemente hacia arriba
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            className={`btn btn-warning index-btn ${isVisible ? "visible" : "hidden"}`}
            onClick={scrollToTop}
        >
            Back to top
        </button>
    );
};

export default BackToTopButton;