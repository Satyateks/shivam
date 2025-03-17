import React, { useState } from "react";
import { Link } from "react-router-dom";

import background from '../../assect/images/bg.png'
import bg1 from '../../assect/images/bg/01.jpg'
import bg5 from '../../assect/images/bg/05.jpg'

import Navbar from "../../components/navbar";
import AboutUs from "../../components/about";
import Broker from "../../components/broker";
import ClientTwo from "../../components/clientTwo";
import Blog from "../../components/blog";
import PropertyType from "../../components/propertyTypes";
import FooterTopImage from "../../components/FoterTopImage";
import Footer from "../../components/footer";

import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css"

import { propertyData } from "../../data/data";

import Select from 'react-select'
import CountUp from 'react-countup';

import TinySlider from "tiny-slider-react";
import '../../../node_modules/tiny-slider/dist/tiny-slider.css';

import {FiDollarSign, FiHome,FiSearch, FiHeart, FiCamera} from "../../assect/icons/vander"

export default function IndexSeven(){
    const settings = {
        container: '.tiny-slide-three',
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
        gutter: 30,
        responsive: {
            1025: {
                items: 3
            },

            992: {
                items: 2
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };
    const [isOpen, setOpen] = useState(false)
    const categories = [
        { value: '1', label: 'Houses' },
        { value: '2', label: 'Apartment' },
        { value: '3', label: 'Offices' },
        { value: '4', label: 'Townhome' },
    ]
    const price = [
        { value: '1', label: '500' },
        { value: '1', label: '1000' },
        { value: '2', label: '2000' },
        { value: '3', label: '3000' },
        { value: '4', label: '4000' },
        { value: '5', label: '5000' },
        { value: '6', label: '6000' },
        { value: '7', label: '7000' },
    ]
    return(
        <>
        <Navbar navClass="defaultscroll sticky" menuClass = "navigation-menu"/>

        <section className="bg-half-170 d-table w-100 pb-0" style={{backgroundImage:`url(${background})`, backgroundPosition:"bottom"}}>
            <div className="bg-overlay bg-primary-gradient-overlay z-n1"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <div className="title-heading text-center">
                            <h4 className="heading fw-bold title-dark mb-3">Are you ready to find your dream home</h4>
                            <p className="para-desc text-muted title-dark mx-auto mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        
                            <div className="row justify-content-center mt-4 pt-2">
                                <div className="col-lg-10">
                                    <div className="card border-0 bg-white shadow z-1">
                                        <form className="card-body text-start">
                                            <div className="registration-form text-dark text-start">
                                                <div className="row g-lg-0">
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-lg-0 mb-3">
                                                            <div className="filter-search-form position-relative filter-border">
                                                                <FiSearch className="fea icon-ex-md icons"/>
                                                                <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-lg-0 mb-3">
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiHome className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={categories} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-lg-0 mb-3">
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiDollarSign className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiDollarSign className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="" style={{marginTop:'-54px'}}>
                            <div className="position-relative overflow-hidden shadow rounded-3">
                                <img src={bg1} className="img-fluid rounded-3" alt=""/>

                                <div className="position-absolute top-50 start-50 translate-middle">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <AboutUs/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Property Types</h4>
                            <p className="text-muted para-desc mx-auto mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                    </div>
                </div>
               <PropertyType/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Featured Properties</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="tiny-slide-three">
                        <TinySlider settings={settings}>
                            {propertyData.map((item,index) => {
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card property border-0 shadow position-relative overflow-hidden rounded-3">
                                            <div className="property-image position-relative overflow-hidden shadow">
                                                <img src={item.image} className="img-fluid" alt=""/>
                                                <ul className="list-unstyled property-icon">
                                                    <li className=""><Link to="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiHome className="icons"/></Link></li>
                                                    <li className="mt-1"><Link to="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiHeart className="icons"/></Link></li>
                                                    <li className="mt-1"><Link to="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiCamera className="icons"/></Link></li>
                                                </ul>
                                            </div>
                                            <div className="card-body content p-4">
                                                <Link to={`/property-detail/${item.id}`} className="title fs-5 text-dark fw-medium">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</Link>

                                                <ul className="list-unstyled mt-3 py-3 border-top border-bottom d-flex align-items-center justify-content-between">
                                                    <li className="d-flex align-items-center me-3">
                                                        <i className="mdi mdi-arrow-expand-all fs-5 me-2 text-primary"></i>
                                                        <span className="text-muted">8000sqf</span>
                                                    </li>
                    
                                                    <li className="d-flex align-items-center me-3">
                                                        <i className="mdi mdi-bed fs-5 me-2 text-primary"></i>
                                                        <span className="text-muted">4 Beds</span>
                                                    </li>
                    
                                                    <li className="d-flex align-items-center">
                                                        <i className="mdi mdi-shower fs-5 me-2 text-primary"></i>
                                                        <span className="text-muted">4 Baths</span>
                                                    </li>
                                                </ul>
                                                <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                                    <li className="list-inline-item mb-0">
                                                        <span className="text-muted">Price</span>
                                                        <p className="fw-medium mb-0">$5000</p>
                                                    </li>
                                                    <li className="list-inline-item mb-0 text-muted">
                                                        <span className="text-muted">Rating</span>
                                                        <ul className="fw-medium text-warning list-unstyled mb-0">
                                                            <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                            <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                            <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                            <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                            <li className="list-inline-item mb-0"><i className="mdi mdi-star"></i></li>
                                                            <li className="list-inline-item mb-0 text-dark">5.0(30)</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                        </div>
                    </div>

                    <div className="col-12 pt-2">
                        <div className="text-center">
                            <Link to="/grid" className="mt-3 fs-6 text-primary">View More Properties <i className="mdi mdi-arrow-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60">
                <div className="position-relative overflow-hidden rounded-3 shadow py-5" style={{backgroundImage:`url(${bg5})`,backgroundPosition:'center' , backgroundAttachment:'fixed'}}>
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