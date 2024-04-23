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
        <div style={{ position: "relative" }}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{ marginBottom: "50px", background: "black" }}  className="custom-carousel" >
            {items.map((item, idx) => (
                <Carousel.Item key={idx}>
                    {item}
                </Carousel.Item>
            ))}
            <button className="custom-carousel-control-prev" type="button" onClick={handlePrev} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", zIndex: "1", background: "transparent", border: "none" }}>
            <span className="visually-hidden">Previous</span>
            <span aria-hidden="true" style={{ fontSize: "2rem", color: "white" }}>&#10094;</span>
        </button>

        {/* Flecha derecha */}
        <button className="custom-carousel-control-next" type="button" onClick={handleNext} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", zIndex: "1", background: "transparent", border: "none" }}>
            <span className="visually-hidden">Next</span>
            <span aria-hidden="true" style={{ fontSize: "2rem", color: "white" }}>&#10095;</span>
        </button>
        </Carousel>

        {/* Flecha izquierda */}
        
    </div>
    );
};

export default CarouselComponent;