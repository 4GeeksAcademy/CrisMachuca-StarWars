import React, { useState, useEffect } from "react";
import { Carousel } from 'react-bootstrap';

const CarouselComponent = ({ items }) => {
    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    // Calcular el margen del contenedor del carrusel dependiendo del tamaño de la pantalla
    const carouselMargin = windowWidth >= 768 ? "0 4em" : "0";

    // Estilo del contenedor del carrusel
    const carouselContainerStyle = {
        margin: carouselMargin,
        position: "relative", // Añadir posición relativa para posicionar las flechas
    };

    // Calcular el número de tarjetas a mostrar
    let cardsToShow;
    if (windowWidth >= 1600) {
        cardsToShow = 5;
    } else if (windowWidth >= 1300) {
        cardsToShow = 4;
    } else if (windowWidth >= 930) {
        cardsToShow = 3;
    } else {
        cardsToShow = 1;
    }

    // Estilo para las flechas de navegación
    const arrowStyle = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: "2",
        background: "transparent",
        border: "none",
        fontSize: "2rem",
        color: "white",
    };

    return (
        <div className="rounded pt-5 pb-3 mb-5 background-carousel" style={carouselContainerStyle}>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
                style={{ marginBottom: "50px"}}
                className="custom-carousel"
                indicators={false}
            >
                {/* Mostrar múltiples tarjetas al mismo tiempo en pantallas grandes */}
                {items.map((item, idx) => (
                    <Carousel.Item key={idx}>
                        <div className="d-flex justify-content-around ">
                            {/* Mostrar tarjetas según el número definido */}
                            {Array.from({ length: cardsToShow }).map((_, i) => (
                                <div key={i} style={{ width: `${100 / cardsToShow}%` }}>
                                    {items[idx + i]}
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Flechas de navegación */}
            <button className="custom-carousel-control-prev" type="button" onClick={() => setIndex((index - 1 + items.length) % items.length)} style={{ ...arrowStyle, left: "10px" }}>
                <span className="visually-hidden">Previous</span>
                &#10094;
            </button>
            <button className="custom-carousel-control-next" type="button" onClick={() => setIndex((index + 1) % items.length)} style={{ ...arrowStyle, right: "10px" }}>
                <span className="visually-hidden">Next</span>
                &#10095;
            </button>
        </div>
    );
};

export default CarouselComponent;
