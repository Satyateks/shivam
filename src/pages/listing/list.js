import React from "react";
import { Link } from "react-router-dom";

import bg3 from "../../assect/images/bg/03.jpg"
import Navbar from "../../components/navbar";
import Select from 'react-select'
import { propertyData } from "../../data/data";

import {FiDollarSign, FiHome,FiSearch, FiHeart, FiCamera} from "../../assect/icons/vander"
import Footer from "../../components/footer";

export default function List(){
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
        <Navbar navClass="defaultscroll sticky" logolight={true} menuClass = "navigation-menu nav-left nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg3})`}}>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <p className="text-white-50 para-desc mx-auto mb-0">Grid view Listing</p>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Property Listing</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="features-absolute">
                            <div className="card border-0 bg-white shadow mt-5">
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

            <div className="container">
                <div className="row g-4 mt-0">
                    {propertyData.slice(0,8).map((item,index) =>{
                        return(
                            <div className="col-lg-6 col-12" key={index}>
                                <div className="card property property-list border-0 shadow position-relative overflow-hidden rounded-3">
                                    <div className="d-md-flex">
                                        <div className="property-image position-relative overflow-hidden shadow flex-md-shrink-0 rounded-3 m-2">
                                            <img src={item.image} className="img-fluid h-100 w-100" alt=""/>
                                            <ul className="list-unstyled property-icon">
                                                <li className=""><Link to="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiHome className="icons"/></Link></li>
                                                <li className="mt-1"><Link to="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiHeart className="icons"/></Link></li>
                                                <li className="mt-1"><Link to="#" className="btn btn-sm btn-icon btn-pills btn-primary"><FiCamera className="icons"/></Link></li>
                                            </ul>
                                        </div>
                                        <div className="card-body content p-3">
                                            <Link to={`/property-detail/${item.id}`} className="title fs-5 text-dark fw-medium">{item.title}</Link>

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
                            </div>
                        )
                    })}
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <ul className="pagination justify-content-center mb-0">
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Previous">
                                    <span aria-hidden="true"><i className="mdi mdi-chevron-left fs-6"></i></span>
                                </Link>
                            </li>
                            <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link" to="#" aria-label="Next">
                                    <span aria-hidden="true"><i className="mdi mdi-chevron-right fs-6"></i></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}