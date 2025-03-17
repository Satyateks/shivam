import React, { useEffect } from "react";
import bg3 from "../assect/images/bg/03.jpg"
import Navbar from "../components/navbar";
import AboutUs from "../components/about";
import Footer from "../components/footer";
export default function Sell(){
    useEffect(() => {
        const rangeSlider = document.getElementById('slider');
        const value = rangeSlider.value;
        document.getElementById('amount-label').innerHTML = value;
        document.getElementById('saving-label').innerHTML = parseFloat(value * 0.01).toFixed(2);
        window.scrollTo(0, 0)
    });

    const handleChange = (e) => {
        const value = e.target.value;
        document.getElementById('amount-label').innerHTML = value;
        document.getElementById('saving-label').innerHTML = parseFloat(value * 0.01).toFixed(2);
    }
    return(
        <>
        <Navbar navClass="defaultscroll sticky" logolight={true} menuClass = "navigation-menu nav-left nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg3})`}}>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <p className="text-white-50 para-desc mx-auto mb-0">Sell Properties</p>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Sell Faster. Save Thousands.</h5>
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
                <AboutUs/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Brokerage Calculator</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-4 pt-2">
                    <div className="col-lg-8 col-12">
                        <div className="p-4 shadow rounded-3" role="form">
                            <ul className="list-unstyled d-flex justify-content-between mb-0">
                                <li className="h6 mb-0">Min $ 10000</li>
                                <li className="h6 mb-0">Max $ 200000</li>
                            </ul>

                            <div className="row">
                                <div className="col-sm-12 mb-4">
                                    <label htmlFor="slider" className="form-label"></label>
                                    <input type="range" onInput={handleChange} defaultValue="10000" min="10000" max="200000" className="form-range custom-range" id="slider"/>
                                </div>
                            </div>

                            <ul className="list-unstyled text-center d-md-flex justify-content-between mb-0">
                                <li>
                                    <ul className="mb-0 text-md-start brokerage-form list-unstyled">
                                        <li className="h5 mb-0"><label className="control-label">Total Value ($)</label></li>
                                        <li className="h5 mb-0"><input type="hidden" id="amount" className="form-control"/><span className="text-primary">$</span> <p className="mb-0 d-inline-block h5 text-primary" id="amount-label"></p></li>
                                    </ul>
                                </li>

                                <li className="mt-2 mt-sm-0">
                                    <ul className="mb-0 text-md-end brokerage-form list-unstyled">
                                        <li className="h5 mb-0"><label className="control-label">Brokerage Fee</label></li>
                                        <li className="h5 mb-0"><input type="hidden" id="saving" className="form-control mb-0"/><span className="text-primary">$</span> <p className="mb-0 d-inline-block h5 text-primary" id="saving-label"></p></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}