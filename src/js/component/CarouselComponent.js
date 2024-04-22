// CarouselComponent.js
import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';

const CarouselComponent = ({ items }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(items.length - 1);
        }
    };

    const handleNext = () => {
        if (index < items.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{ marginBottom: "50px" }}>
            {items.map((item, idx) => (
                <Carousel.Item key={idx}>
                    {item}
                </Carousel.Item>
            ))}
            
            {/* Flecha izquierda */}
            <button className="carousel-control-prev" type="button" onClick={handlePrev} style={{ color: "red", position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)" }}>
                <span aria-hidden="true"><i className="fa-solid fa-chevron-left"></i></span>
                <span className="visually-hidden">Previous</span>
            </button>
            
            {/* Flecha derecha */}
            <button className="carousel-control-next" type="button" onClick={handleNext} style={{ color: "red", position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)" }}>
                <span  aria-hidden="true"><i className="fa-solid fa-chevron-right"></i></span>
                <span className="visually-hidden">Next</span>
            </button>
        </Carousel>
    );
};

export default CarouselComponent;
