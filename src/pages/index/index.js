import React, { useState } from "react";
import { Link } from "react-router-dom";

import heroImg from "../../assect/images/hero.jpg"
import image1 from '../../assect/images/1.jpg'
import logoIcon from '../../assect/images/logo-icon.png'
import background from '../../assect/images/bg/03.jpg'

import Navbar from "../../components/navbar";
import Categories from "../../components/categories"
import FeaturedProperties from "../../components/featuredProperties"
import AboutUs from "../../components/about";
import ClientOne from "../../components/clientOne";
import Broker from "../../components/broker";
import GetInTuch from "../../components/getInTuch";
import FooterTopImage from "../../components/FoterTopImage";
import Footer from "../../components/footer";

import { TypeAnimation } from 'react-type-animation';
import Select from 'react-select'

import {FiDollarSign, FiHome,FiSearch} from "../../assect/icons/vander"

export default function Index(){

    const [activeIndex, setActiveIndex] = useState(0)

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
        <Navbar navClass="defaultscroll sticky" menuClass = "navigation-menu nav-left"/>
        <section className="position-relative mt-5 pt-4">
            <div className="container-fluid px-md-4 px-2 mt-2">
                <div className="bg-home-one d-table w-100 shadow rounded-3 overflow-hidden" id="home">
                    <div className="bg-overlay image-wrap" id="hero-images" style={{backgroundImage:`url(${background})`}}></div>
                    <div className="bg-overlay bg-black opacity-50"></div>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="title-heading">
                                    <h4 className="heading fw-bold text-white title-dark mb-3">Find Your Perfect Place –  <br/>  
                                    <TypeAnimation
                                        sequence={[
                                            'Hassle-Free',
                                            2000, 
                                            'Effortless',
                                            2000,
                                        ]}
                                        wrapper="span"
                                        speed={20}
                                        repeat={Infinity}
                                        className="typewrite text-primary ms-2"
                                        cursor={false}
                                    /> Renting Starts Here!</h4>
                                    <p className="para-desc text-white title-dark mb-0">The Ultimate Property Marketplace – No Agents, No Hidden Fees!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-sm-0 pt-sm-0">
                        <div className="features-absolute">
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
                            
                            <div className="tab-content bg-white rounded-bottom-3 rounded-end-3 sm-rounded-0 shadow">
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

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-7 col-6">
                                <img src={heroImg} className="img-fluid rounded-3" alt="" title="Townter"/>
                            </div>
                            
                            <div className="col-lg-5 col-6">
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-12">
                                        <img src={image1} className="img-fluid rounded-3" alt="" title="Townter"/>
                                    </div>
    
                                    <div className="col-lg-12 col-md-12">
                                        <img src={logoIcon} className="img-fluid" alt="" title="Townter"/>
                                    </div>
                                </div>
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
                <Categories/>
            </div>

            <div className="container mt-100 mt-60">
                <AboutUs/>
            </div>

            <div className="container mt-100 mt-60">
                <FeaturedProperties/>
            </div>

            <div className="container mt-100 mt-60">
               <ClientOne/>
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