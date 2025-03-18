import React from "react";
import { Link } from "react-router-dom";

import bg3 from "../assect/images/bg/03.jpg"
import image1 from "../assect/images/property/1.jpg"
import image2 from "../assect/images/property/2.jpg"
import image3 from "../assect/images/property/3.jpg"

import Navbar from "../components/navbar";
import { blogData } from "../data/data";
import Footer from "../components/footer";

export default function BlogSidebar(){
    const resentData = [
        {
            image:image1,
            title:'Consultant Business',
            date:'13th March 2023'
        },
        {
            image:image2,
            title:'Grow Your Business',
            date:'5th May 2023'
        },
        {
            image:image3,
            title:'Look On The Glorious Balance',
            date:'19th June 2023'
        },
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
                            <p className="text-white-50 para-desc mx-auto mb-0">Latest News</p>
                            <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Blogs & News</h5>
                        </div>
                    </div>
                </div>
                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/">Shivay Property</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ul>
                    </nav>
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
                <div className="row g-4">
                    <div className="col-lg-8 col-md-6 col-12">
                        <div className="row g-4">
                            {blogData.slice(0, 8).map((item, index) => {
                                return(
                                <div className="col-lg-6" key={index}>
                                    <div className="card blog blog-primary shadow rounded-3 overflow-hidden border-0">
                                        <div className="card-img blog-image position-relative overflow-hidden rounded-0">
                                            <div className="position-relative overflow-hidden">
                                                <img src={item.image} className="img-fluid" alt=""/>
                                                <div className="card-overlay"></div>
                                            </div>
    
                                            <div className="blog-tag p-3">
                                                <Link to="" className="badge bg-primary">{item.tag}</Link>
                                            </div>
                                        </div>
    
                                        <div className="card-body content p-0">
                                            <div className="p-4">
                                                <Link to={`/blog-detail/${item.id}`}className="title fw-medium fs-5 text-dark">{item.title}</Link>
                                                <p className="text-muted mt-2">{item.desc}</p>
    
                                                <Link to="" className="text-dark read-more">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
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

                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card bg-white p-4 rounded-3 shadow sticky-bar">
                            <div>
                                <h6 className="pt-2 pb-2 bg-light rounded-3 text-center">Search</h6>

                                <div className="search-bar mt-4">
                                    <div id="itemSearch2" className="menu-search mb-0">
                                        <form role="search" method="get" id="searchItemform2" className="searchform">
                                            <input type="text" className="form-control rounded-3 border" name="s" id="searchItem2" placeholder="Search..."/>
                                            <input type="submit" id="searchItemsubmit2" value="Search"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 pt-2">
                                <h6 className="pt-2 pb-2 bg-light rounded-3 text-center">Recent Post</h6>
                                <div className="mt-4">
                                    {resentData.map((item, index) => {
                                        return(
                                        <div className="blog blog-primary d-flex align-items-center mt-3" key={index}>
                                            <img src={item.image} className="avatar avatar-small rounded-3" style={{width: "auto"}} alt=""/>
                                            <div className="flex-1 ms-3">
                                                <Link to="" className="d-block title text-dark fw-medium">{item.title}</Link>
                                                <span className="text-muted small">{item.date}</span>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>

                          
                            <div className="mt-4 pt-2 text-center">
                                <h6 className="pt-2 pb-2 bg-light rounded-3">Tags Cloud</h6>
                                <ul className="tagcloud list-unstyled mt-4">
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Business</Link></li>
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Finance</Link></li>
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Marketing</Link></li>
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Fashion</Link></li>
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Bride</Link></li>
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Lifestyle</Link></li>
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Travel</Link></li>
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Beauty</Link></li>
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Video</Link></li>
                                    <li className="list-inline-item m-1"><Link to="#" className="rounded-3 fw-medium text-dark inline-block py-2 px-3">Audio</Link></li>
                                </ul>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
