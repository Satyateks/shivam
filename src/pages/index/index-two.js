import React, { useState } from "react";
import { Link } from "react-router-dom";

import backgroundImage from "../../assect/images/bg/01.jpg"
import heroImg from "../../assect/images/hero.jpg"

import Navbar from "../../components/navbar";
import PropertyType from "../../components/propertyTypes";
import Featuredproperties from "../../components/featuredProperties"
import AboutUs from "../../components/about";
import Broker from "../../components/broker";
import ClientTwo from "../../components/clientTwo";
import Blog from "../../components/blog";
import FooterTopImage from "../../components/FoterTopImage";

import Select from 'react-select'
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css"

import {FiDollarSign, FiHome,FiSearch} from "../../assect/icons/vander"
import Footer from "../../components/footer";

export default function IndexTwo(){
    const [activeIndex, setActiveIndex] = useState(0)
    const [isOpen, setOpen] = useState(false);

    const categories = [
        { value: '1', label: 'Houses' },
        { value: '2', label: 'Apartment' },
        { value: '3', label: 'Offices' },
        { value: '4', label: 'Townhome' },
    ]
    const price = [
        { value: '1', label: '500' },
        { value: '1', label: '500' },
        { value: '2', label: '1000' },
        { value: '3', label: '2000' },
        { value: '4', label: '3000' },
        { value: '5', label: '4000' },
        { value: '6', label: '5000' },
        { value: '7', label: '5000' },
    ]
    return(
        <>
        <Navbar navClass="defaultscroll sticky" logolight={true} menuClass = "navigation-menu nav-left nav-light"/>
        <section className="bg-half-170 d-table align-items-center w-100" style={{backgroundImage:`url(${backgroundImage})`}}>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12 text-center">
                        <div className="title-heading text-center">
                            <h4 className="heading fw-bold text-white title-dark mb-3">Easy way to find your <br/> dream property</h4>
                            <p className="para-desc text-white-50 title-dark mx-auto mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                        
                        <div className="mt-4">
                            <ul className="nav nav-pills bg-white shadow border-bottom p-3 flex-row d-md-inline-flex nav-justified mb-0 rounded-top-3 position-relative overflow-hidden" id="pills-tab" role="tablist">
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
                            <div className="tab-content bg-white rounded-3 sm-rounded-0 shadow">
                                {activeIndex === 0 ? 
                                    <div className="card border-0 active">
                                        <form className="card-body text-start">
                                            <div className="registration-form text-dark text-start">
                                                <div className="row g-lg-0">
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Search :</label>
                                                            <div className="filter-search-form position-relative filter-border">
                                                                <FiSearch className="fea icon-ex-md icons"/>
                                                                <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Select Categories :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiHome className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={categories} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Min Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiDollarSign className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Max Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiDollarSign className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <input type="submit" id="search" name="search" style={{height: '48px'}} className="btn btn-primary searchbtn w-100" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>:''
                                }
                                 {activeIndex === 1 ? 
                                    <div className="card border-0 active">
                                        <form className="card-body text-start">
                                            <div className="registration-form text-dark text-start">
                                                <div className="row g-lg-0">
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Search :</label>
                                                            <div className="filter-search-form position-relative filter-border">
                                                                <FiSearch className="fea icon-ex-md icons"/>
                                                                <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Select Categories:</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiHome className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={categories} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Min Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiDollarSign className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Max Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiDollarSign className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <input type="submit" id="search" name="search" style={{height: '48px'}} className="btn btn-primary searchbtn w-100" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>:''
                                }
                                 {activeIndex === 2 ? 
                                    <div className="card border-0 active">
                                        <form className="card-body text-start">
                                            <div className="registration-form text-dark text-start">
                                                <div className="row g-lg-0">
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Search :</label>
                                                            <div className="filter-search-form position-relative filter-border">
                                                                <FiSearch className="fea icon-ex-md icons"/>
                                                                <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Select Categories:</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiHome className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={categories} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Min Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiDollarSign className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label fs-6">Max Price :</label>
                                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                                <FiDollarSign className="fea icon-ex-md icons"/>
                                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={price} />
                                                            </div>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-lg-3 col-md-6 col-12">
                                                        <input type="submit" id="search" name="search" style={{height: '48px'}} className="btn btn-primary searchbtn w-100" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>:''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="position-relative overflow-hidden shadow p-3 rounded-top-pill rounded-5 bg-white">
                            <img src={heroImg} className="img-fluid rounded-top-pill rounded-5" alt="Towntor"/>

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

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-medium mb-2">Our story: Towntor</h6>
                            <h4 className="title mb-3">Efficiency. <br/> Transparency. Control.</h4>
                            <p className="text-muted para-desc mb-0">Towntor developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Towntor is Real Estate Redefined.</p>
                        
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
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-3">Property Types</h4>
                            <p className="text-muted para-desc mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                    </div>
                </div>
               <PropertyType/>
            </div>

            <div className="container mt-100 mt-60">
                <Featuredproperties/>
            </div>

            <div className="container mt-100 mt-60">
               <AboutUs/>
            </div>

            <div className="container mt-100 mt-60">
               <Broker/>
            </div>

            <div className="container mt-100 mt-60 client">
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