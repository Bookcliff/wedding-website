import { Carousel } from 'antd';
import React from 'react';
import jan2015 from '../pictures/jan2015.jpeg';
import oct2015 from '../pictures/oct2015.jpeg';
import feb2016 from '../pictures/feb2016.jpeg';
import aug2016 from '../pictures/aug2016.jpeg';
import dec2017 from '../pictures/dec2017.jpeg';
import apr2018 from '../pictures/apr2018.jpeg';
import june2018 from '../pictures/june2018.jpeg';
import june2019 from '../pictures/june2019.jpeg';
import feb2020 from '../pictures/feb2020.jpeg';
import mar2020 from '../pictures/mar2020.jpeg';
import sept2020 from '../pictures/sept2020.jpeg';
import dec2020 from '../pictures/dec2020.jpeg';
import aug2021 from '../pictures/aug2021.jpg';
import sept2021 from '../pictures/sept2021.jpg';
import jan2022 from '../pictures/jan2022.jpeg';
import apr2022 from '../pictures/apr2022.jpg';


const contentStyle = {
    height: '50vh',
    color: '#fff',
    background: 'rgb(234,224,220)',
};

export default function PhotoCarousel() {
    // const onChange = (currentSlide) => {
    //     console.log(currentSlide);
    // };

    return (
        <Carousel autoplay effect="fade" style={contentStyle}>
            <div className="container">
                <h3 className='bottom-center' >January 2015</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={jan2015} alt="jan2015" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center' >October 2015</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={oct2015} alt="oct2015" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center' >February 2016</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={feb2016} alt="feb2016" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center' >August 2016</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={aug2016} alt="aug2016" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>December 2017</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={dec2017} alt="dec2017" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>April 2018</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={apr2018} alt="apr2018" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>June 2018</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={june2018} alt="june2018" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>June 2019</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={june2019} alt="june2019" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>February 2020</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={feb2020} alt="feb2020" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>March 2020</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={mar2020} alt="mar2020" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>September 2020</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={sept2020} alt="sept2020" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>December 2020</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={dec2020} alt="dec2020" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>August 2021</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={aug2021} alt="aug2021" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>September 2021</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={sept2021} alt="sept2021" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>January 2022</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={jan2022} alt="jan2022" />
                </div>
            </div>
            <div className="container">
                <h3 className='bottom-center'>April 2022</h3>
                <div className='imgDiv'>
                    <img className='carouselImg' src={apr2022} alt="apr2022" />
                </div>
            </div>
        </Carousel >

    );
};

