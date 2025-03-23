import React from "react";
import { Link } from "react-router-dom";

import {FiHexagon, FiHome, FiBriefcase, FiKey} from '../assect/icons/vander'
import workDirect from '../assect/svg/works-direct.svg'
import workHome from '../assect/svg/works-home.svg'
import workHouse from '../assect/svg/works-house.svg'

export default function AboutUs(){
    const aboutData = [
        {
            icon: workHome,
            title: 'Search for Your Dream Home',
            desc: 'Browse for the best flat for rent in Noida extension.'
        },
        {
            icon: workDirect,
            title: 'Plan a Direct Visit',
            desc: 'Schedule a visit to the property at your convenience'
        },
        {
            icon: workHouse,
            title: 'Move to Your New House',
            desc: 'Finalise the deal once it fits you, and move in!'
        },
    ]
    return(
        <>
        <div className="row justify-content-center">
            <div className="col">
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title mb-3">How It Works</h4>
                    <p className="text-muted para-desc mb-0 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>
            </div>
        </div>

        <div className="row g-4 mt-0">
            {aboutData.map((item, index)=> {
                const Icon = item.icon
                return(
                    <div className="col-md-4 " key={index}>
                        <div className="position-relative features text-center mx-lg-4 px-md-1 border shadow-lg p-3">
                            <div className="feature-icon position-relative  d-flex justify-content-center">
                                <FiHexagon className="hexagon"/>
                                <div className="position-absolute top-50 start-50 translate-middle">
                                   <img src={item.icon}></img>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Link to="#" className="fw-medium title text-dark fs-5">{item.title}</Link>
                                <p className="text-muted mt-3 mb-0">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}