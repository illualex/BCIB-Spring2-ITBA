import carousel1 from '../assets/images/carousel/1.jpg';
import carousel2 from '../assets/images/carousel/2.jpg';
import carousel3 from '../assets/images/carousel/3.jpg';
import carousel4 from '../assets/images/carousel/4.jpg';
import carousel5 from '../assets/images/carousel/5.jpg';
import card1 from '../assets/images/cards/1.png'
import card2 from '../assets/images/cards/2.png'
import card3 from '../assets/images/cards/3.png'
import card4 from '../assets/images/cards/4.png'
import card5 from '../assets/images/cards/5.png'
import card6 from '../assets/images/cards/6.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState } from "react";

const imageData = [
    {
        alt: "image1",
        url: carousel1
    },
    {
        alt: "image2",
        url: carousel2
    },
    {
        alt: "image3",
        url: carousel3
    },
    {
        alt: "image4",
        url: carousel4
    },
    {
        alt: "image5",
        url: carousel5
    }
];

const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
));

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState();

    function handleChange(index) {
        setCurrentIndex(index);
    }

    return (
        <>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                showThumbs={false}
                className="carousel-container"
            >
                {renderSlides}
            </Carousel>
            <div className="container-card">
                <div className="card">
                    <img src={card1} className="img-card" alt="Persona dando la mano a un mecanico"/>
                </div>
                <div className="card">
                    <img src={card2} className="img-card" alt="Persona trabajando en una cafeteria"/>
                </div>
                <div className="card">
                    <img src={card3} className="img-card" alt="Telefono con graficos de inversiones"/>
                </div>
                <div className="card">
                    <img src={card4} className="img-card" alt="Aplicacion de Mercado libre en celular"/>
                </div>
                <div className="card">
                    <img src={card5} className="img-card" alt="Tienda de ropa"/>
                </div>
                <div className="card">
                    <img src={card6} className="img-card" alt="Lugar de CineMark"/>
                </div>
            </div>
        </>
    )
}
