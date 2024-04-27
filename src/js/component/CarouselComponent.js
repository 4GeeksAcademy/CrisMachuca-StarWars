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

    return (
        <div className="container  rounded pt-5 pb-3 mb-5 background-carousel" style={{ position: "relative"}}>
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
                        <div className="d-flex justify-content-around">
                            {windowWidth >= 992 && items[idx + 2] ? (
                                <>
                                    {item}
                                    {items[idx + 1]}
                                    {items[idx + 2]}
                                </>
                            ) : (
                                <div style={{ width: "100%" }}>
                                    {item}
                                </div>
                            )}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Flechas de navegación */}
            <button className="custom-carousel-control-prev" type="button" onClick={() => setIndex((index - 1 + items.length) % items.length)} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", zIndex: "1", background: "transparent", border: "none" }}>
                <span className="visually-hidden">Previous</span>
                <span aria-hidden="true" style={{ fontSize: "2rem", color: "white" }}>&#10094;</span>
            </button>
            <button className="custom-carousel-control-next" type="button" onClick={() => setIndex((index + 1) % items.length)} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", zIndex: "1", background: "transparent", border: "none" }}>
                <span className="visually-hidden">Next</span>
                <span aria-hidden="true" style={{ fontSize: "2rem", color: "white" }}>&#10095;</span>
            </button>
        </div>
    );
};

export default CarouselComponent;
