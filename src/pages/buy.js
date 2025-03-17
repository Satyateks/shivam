import React from "react";

import bg2 from '../assect/images/bg/02.jpg'

import Navbar from "../components/navbar";
import GetInTuch from "../components/getInTuch";
import AboutUsTwo from "../components/aboutTwo";
import PropertyTwo from "../components/propertyTwo";
import BuyTab from "../components/buyTab";
import Footer from "../components/footer";

export default function Buy(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" logolight={true} menuClass = "navigation-menu nav-left nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg2})`}}>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <p className="text-white-50 para-desc mx-auto mb-0">Buy Property</p>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Find Your Dream Home</h5>
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
                <div className="row">
                    <div className="col-lg-12">
                        <div className="features-absolute subscribe-search">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-md-9">
                                    <div className="text-center subscribe-form">
                                        <form style={{maxWidth:'800px'}}>
                                            <div className="mb-0">
                                                <input type="text" id="help" name="name" className="border shadow rounded-3 bg-white" required="" placeholder="City, Address, Zip"/>
                                                <button type="submit" className="btn btn-primary rounded-3">Search</button>
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
               <PropertyTwo/>
            </div>

            <div className="container mt-100 mt-60">
                <AboutUsTwo/>
            </div>

            <div className="container mt-100 mt-60">
                <BuyTab/>
            </div>

            <div className="container mt-100 mt-60">
                <GetInTuch/>
            </div>
        </section>
        <Footer/>
        </>
    )
}