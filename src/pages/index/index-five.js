import React, { useState } from "react";
import { Link } from "react-router-dom";

import aboutImg from "../../assect/images/about.jpg"
import dots from "../../assect/images/svg/dots.svg"
import single1 from '../../assect/images/property/single/2.jpg'
import single2 from '../../assect/images/property/single/2.jpg'
import single3 from '../../assect/images/property/single/3.jpg'
import single4 from '../../assect/images/property/single/4.jpg'
import map from "../../assect/images/map.png"


import Navbar from "../../components/navbar";
import Categories from "../../components/categories";
import FeatureProperties from "../../components/featuredProperties"
import Broker from "../../components/broker";
import ClientTwo from "../../components/clientTwo";
import Blog from "../../components/blog";
import FooterTopImage from "../../components/FoterTopImage";
import Footer from "../../components/footer";

import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css"

import TinySlider from "tiny-slider-react";
import '../../../node_modules/tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "../../../node_modules/react-18-image-lightbox/style.css"

import CountUp from 'react-countup';

const settings = {
    container: '.tiny-one-item',
    items: 1,
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
  };

export default function IndexFive(){
    const [video, setModalVideo] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const bannerImg = [single1, single2, single3, single4,]
    const heroImg = [single1, single2, single3, single4, aboutImg]

   const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + heroImg.length - 1) % heroImg.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImg.length);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const currentImage = heroImg[currentImageIndex];

    return(
        <>
        <Navbar navClass="defaultscroll sticky" menuClass = "navigation-menu nav-right"/>
        <section className="bg-half-170 d-table w-100 bg-soft-primary">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="title-heading me-lg-5">
                            <h4 className="heading fw-bold text-dark mb-3">Easy Way to Find <br/> Your <span className="text-primary">Dream Home</span></h4>
                            <p className="para-desc text-muted title-dark">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

                            <div >
                                <ul className="nav nav-pills bg-white shadow border-bottom p-3 flex-row d-md-inline-flex nav-justified mb-0 rounded-top-3 position-relative overflow-hidden">
                                    <li className="nav-item m-1">
                                        <Link className={`${activeIndex === 0 ? 'active' : '' } nav-link py-2 px-4  rounded-3 fw-medium`} to="#" onClick={()=>setActiveIndex(0)} >
                                            Buy
                                        </Link>
                                    </li>
                                    
                                    <li className="nav-item m-1">
                                        <Link className={`${activeIndex === 1 ? 'active' : '' } nav-link py-2 px-4  rounded-3 fw-medium`} to="#" onClick={()=>setActiveIndex(1)}>
                                            Sell
                                        </Link>
                                    </li>

                                    <li className="nav-item m-1">
                                        <Link className={`${activeIndex === 2 ? 'active' : '' } nav-link py-2 px-4  rounded-3 fw-medium`} to="#" onClick={()=>setActiveIndex(2)}>
                                            Rent
                                        </Link>
                                    </li>
                                </ul>
                                
                                <div className="tab-content bg-white rounded-bottom-3 rounded-end-3 sm-rounded-0 shadow">
                                    {activeIndex === 0 ? 
                                        <div className="card border-0 tab-pane fade show active">
                                            <div className="text-center subscribe-form p-4">
                                                <form style={{maxWidth:'800px'}}>
                                                    <div className="mb-0">
                                                        <input type="text" id="help" name="name" className="shadow rounded-3 bg-white" required="" placeholder="City, Address, Zip"/>
                                                        <button type="submit" className="btn btn-primary rounded-3">Search</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>:""
                                    }
                                    {activeIndex === 1 ? 
                                        <div className="card border-0 tab-pane fade show active">
                                            <div className="text-center subscribe-form p-4">
                                                <form style={{maxWidth:'800px'}}>
                                                    <div className="mb-0">
                                                        <input type="text" id="help" name="name" className="shadow rounded-3 bg-white" required="" placeholder="City, Address, Zip"/>
                                                        <button type="submit" className="btn btn-primary rounded-3">Search</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>:""
                                    }
                                    {activeIndex === 2 ? 
                                        <div className="card border-0 tab-pane fade show active">
                                            <div className="text-center subscribe-form p-4">
                                                <form style={{maxWidth:'800px'}}>
                                                    <div className="mb-0">
                                                        <input type="text" id="help" name="name" className="shadow rounded-3 bg-white" required="" placeholder="City, Address, Zip"/>
                                                        <button type="submit" className="btn btn-primary rounded-3">Search</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>:""
                                    }
        
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="about-right">
                            <div className="position-relative shadow p-2 rounded-top-pill rounded-5 bg-white img-one">
                                <Link to="#" onClick={() => handleImageClick(4)} className="lightbox" title="">
                                    <img src={aboutImg} className="img-fluid rounded-top-pill rounded-5" alt=""/>
                                </Link>
    
                                <div className="cta-video">
                                    <Link to="#!" onClick={() => setModalVideo(true)} className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox">
                                        <i className="mdi mdi-play mdi-24px text-primary"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={video}
                                    videoId="yba7hPeTSjk"
                                    onClose={() => setModalVideo(false)} 
                                />

                                <div className="position-absolute top-0 end-0 z-n1">
                                    <img src={dots} className="avatar avatar-xl-large" alt=""/>
                                </div>
                            </div>

                            <div className="img-two">
                                <div className="tiny-one-item">
                                    <TinySlider settings={settings}>
                                        {bannerImg.map((items,index) => {
                                            return(
                                            <div className="tiny-slide" key={index}>
                                                <div className="m-2">
                                                    <div className="shadow rounded-3 overflow-hidden p-2 bg-white">
                                                        <Link to="#" onClick={() => handleImageClick(index)} className="lightbox" title="">
                                                            <img src={items} className="img-fluid rounded-3" alt=""/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })}
                                    </TinySlider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={heroImg[(currentImageIndex + heroImg.length - 1) % heroImg.length]}
                    nextSrc={heroImg[(currentImageIndex + 1) % heroImg.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </section>
        <section className="section">
            <div className="container">
               <Categories/>
            </div>

            <div className="container mt-100 mt-60">
                <FeatureProperties/>
            </div>

            <div className="container-fluid bg-building-pic mt-100 mt-60">
                <div className="position-absolute top-0 left-0 right-0 bottom-0 w-100 h-100 opacity-25" style={{backgroundImage:`url(${map})`, backgroundPosition:"center" }}></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">Trusted by more than 10K users</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 py-3">
                            <div className="counter-box text-center">
                                <h1 className="mb-0 fw-semibold"><CountUp start={0} end={1548}  className="counter-value"/>+</h1>
                                <h6 className="counter-head text-muted fw-normal">Investment</h6>
                            </div>
                        </div>
    
                        <div className="col-4 py-3">
                            <div className="counter-box text-center">
                                <h1 className="mb-0 fw-semibold"><CountUp start={0} end={25}  className="counter-value"/>+</h1>
                                <h6 className="counter-head text-muted fw-normal">Awards</h6>
                            </div>
                        </div>
    
                        <div className="col-4 py-3">
                            <div className="counter-box text-center">
                                <h1 className="mb-0 fw-semibold"><CountUp start={0} end={9}  className="counter-value"/>+</h1>
                                <h6 className="counter-head text-muted fw-normal">Profitability</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <Broker/>
            </div>

            <div className="container mt-100 mt-60">
                <ClientTwo/>
            </div>

            <div className="container mt-100 mt-60">
               <Blog/>
            </div>
        </section>
        <FooterTopImage/>
        <Footer/>
        </>
    )
}
