/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { setBackgroundAction } from '../../../redux/actions/BackgroundAction';
import styleCarousel from './HomeBackground.module.css'

export default function HomeBackground() {

    const { backgroundList } = useSelector(state => state.BackgroundReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        // fetch background image
        dispatch(setBackgroundAction())
    }, [])

    // carousel settings
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 8000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const renderBackground = () => {
        return backgroundList.map((item, index) => {
            return (
                <div key={index}>
                    <img src={item.image} alt={item.image} />
                </div>
            )
        })
    }

    return (
        <div className='overflow-hidden cursor-grab'>
            <Slider {...settings}>
                {renderBackground()}
            </Slider>
        </div>

    )
}

// set previous and next arrow of carousel
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleCarousel['slick-next']} customResponsive`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleCarousel['slick-prev']} customResponsive`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}