import React, {useEffect, useState} from "react";
import "./Header.css";
import {Carousel, CarouselCaption, CarouselIndicators, CarouselItem} from "reactstrap";

const Header = () => {
    const [ sliderItems, setSliderItems ] = useState([]);
    useEffect(() => {
        fetch(
            `https://voda-react-assessment.herokuapp.com/slider`,
        )
            .then(res => res.json())
            .then(response => {
                setSliderItems(response)
            })
            .catch(error => console.log(error));
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === sliderItems.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? sliderItems.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const setIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = sliderItems.map((item, index) => {
        return (
            <CarouselItem
                key={index}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                className="carousel-item"
            >
                <img src={item.image} alt={item.title} className="carousel-image" />
                <div className="carousel-captions">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                </div>
            </CarouselItem>
        );
    });

    return (
            <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            ride={"carousel"}
            className="carousel"
            >
                {slides}
                <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={setIndex} />
            </Carousel>
    )
};

export default Header;
