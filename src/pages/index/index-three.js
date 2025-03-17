import React, { useState } from "react";
import { Link } from "react-router-dom";

import hero from "../../assect/images/hero.jpg"
import image1 from "../../assect/images/1.jpg"
import dots from "../../assect/images/svg/dots.svg"
import bg4 from "../../assect/images/bg/04.jpg"
import bg5 from "../../assect/images/bg/05.jpg"
import bg3 from "../../assect/images/bg/03.jpg"

import Navbar from "../../components/navbar";
import AboutUs from "../../components/about";
import FeaturedProperties from '../../components/featuredProperties'
import Broker from "../../components/broker";
import GetInTuch from "../../components/getInTuch";
import FooterTopImage from "../../components/FoterTopImage";

import CountUp from 'react-countup';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css"
import Footer from "../../components/footer";


export default function IndexThree(){
    const [isOpen, setOpen] = useState(false)
    return(
        <>
        <Navbar navClass="defaultscroll sticky" logolight={true} menuClass = "navigation-menu nav-left nav-light"/>
        <section className="swiper-slider-hero position-relative d-block vh-100" id="home">
            <Carousel infiniteLoop={true} className="vh-100" autoPlay={true} showThumbs={false} showStatus={false}>
                <div className="slide-inner slide-bg-image d-flex align-items-center vh-100" style={{backgroundImage:`url(${bg3})`}}>
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-heading text-start">
                                    <h1 className="heading fw-bold text-white title-dark mb-3">10765 Hillshire Ave, <br/> Baton Rouge, LA 70810, USA</h1>
                                    <p className="para-desc text-white-50 title-dark mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                                    
                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-pills btn-primary">View Details <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-inner slide-bg-image d-flex align-items-center vh-100" style={{backgroundImage:`url(${bg4})`}}>
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-heading text-start">
                                    <h1 className="heading fw-bold text-white title-dark mb-3">10765 Hillshire Ave, <br/> Baton Rouge, LA 70810, USA</h1>
                                    <p className="para-desc text-white-50 title-dark mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                                    
                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-pills btn-primary">View Details <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-inner slide-bg-image d-flex align-items-center vh-100" style={{backgroundImage:`url(${bg5})`}}>
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-heading text-start">
                                    <h1 className="heading fw-bold text-white title-dark mb-3">10765 Hillshire Ave, <br/> Baton Rouge, LA 70810, USA</h1>
                                    <p className="para-desc text-white-50 title-dark mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                                    
                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-pills btn-primary">View Details <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </Carousel>
        </section>
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="about-left">
                            <div className="position-relative shadow p-2 rounded-top-pill rounded-5 bg-white img-one">
                                <img src={hero} className="img-fluid rounded-top-pill rounded-5" alt=""/>
    
                                <div className="cta-video">
                                    <Link to="#!" onClick={() => setOpen(true)} className="avatar avatar-md-md rounded-pill shadow card d-flex justify-content-center align-items-center lightbox">
                                        <i className="mdi mdi-play mdi-24px text-primary"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="yba7hPeTSjk"
                                    onClose={() => setOpen(false)} 
                                />

                                <div className="position-absolute top-0 start-0 z-n1">
                                    <img src={dots} className="avatar avatar-xl-large" alt=""/>
                                </div>
                            </div>

                            <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-white">
                                <img src={image1} className="img-fluid rounded-3" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-medium mb-2">Our story: Towntor</h6>
                            <h4 className="title mb-3">Efficiency. <br/> Transparency. Control.</h4>
                            <p className="text-muted para-desc mb-0">Towntor developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Towntor is Real Estate Redefined.</p>
                        
                            <div className="mt-4">
                                <Link to="/aboutus" className="btn btn-pills btn-primary">Read More <i className="mdi mdi-arrow-right align-middle"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <AboutUs/>
            </div>

            <div className="container mt-100 mt-60">
                <FeaturedProperties/>
            </div>

            <div className="container-fluid mt-100 mt-60">
                <div className="position-relative overflow-hidden rounded-3 shadow py-5" style={{backgroundImage:`url(${bg5})`,backgroundPosition:'center' ,backgroundAttachment:'fixed'}}>
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 py-3">
                                <div className="counter-box text-center">
                                    <h1 className="mb-0 text-white fw-bold"><CountUp start={0} end={1548}  className="counter-value"/>+</h1>
                                    <h6 className="counter-head text-white fs-5 fw-semibold mb-0">Investment</h6>
                                </div>
                            </div>
        
                            <div className="col-4 py-3">
                                <div className="counter-box text-center">
                                    <h1 className="mb-0 text-white fw-bold"><CountUp start={0} end={25}  className="counter-value"/>+</h1>
                                    <h6 className="counter-head text-white fs-5 fw-semibold mb-0">Awards</h6>
                                </div>
                            </div>
        
                            <div className="col-4 py-3">
                                <div className="counter-box text-center">
                                    <h1 className="mb-0 text-white fw-bold"><CountUp start={0} end={9}  className="counter-value"/>+</h1>
                                    <h6 className="counter-head text-white fs-5 fw-semibold mb-0">Profitability</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
               <Broker/>
            </div>

            <div className="container mt-100 mt-60">
                <GetInTuch/>
            </div>
        </section>
        <FooterTopImage/>
        <Footer/>
        </>
    )
}
