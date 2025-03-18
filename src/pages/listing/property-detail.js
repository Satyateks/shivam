import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import image1 from '../../assect/images/property/single/1.jpg'
import image2 from '../../assect/images/property/single/2.jpg'
import image3 from '../../assect/images/property/single/3.jpg'
import image4 from '../../assect/images/property/single/4.jpg'
import image5 from '../../assect/images/property/single/5.jpg'

import Navbar from "../../components/navbar";
import ProprtySlider from "../../components/propertySlider";

import { propertyData } from "../../data/data";

import Lightbox from 'react-18-image-lightbox'
import "../../../node_modules/react-18-image-lightbox/style.css"
import Footer from "../../components/footer";
import { AmenitiesList } from "../../components/aminities";


export default function PropertyDetails() {

    const params = useParams()
    const id = params.id
    const data = propertyData.find((item) => item.id === parseInt(id))
   const activeAmenities = data.amenities;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);
    const images = [image1, image2, image3, image4, image5]

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const currentImage = images[currentImageIndex];
    return (
        <>
            <Navbar navClass="defaultscroll sticky" menuClass="navigation-menu nav-left" />
            <section className="section mt-5 pt-4">
                <div className="container-fluid mt-2">
                    <div className="row g-2">
                        <div className="col-md-6">
                            <Link to="#" onClick={() => handleImageClick(0)} className="lightbox" title="">
                                <img src={image1} className="img-fluid rounded-3 shadow" alt="" />
                            </Link>
                        </div>

                        <div className="col-md-6">
                            <div className="row g-2">
                                <div className="col-6">
                                    <Link to="#" onClick={() => handleImageClick(1)} className="lightbox" title="">
                                        <img src={image2} className="img-fluid rounded-3 shadow" alt="" />
                                    </Link>
                                </div>

                                <div className="col-6">
                                    <Link to="#" onClick={() => handleImageClick(2)} className="lightbox" title="">
                                        <img src={image3} className="img-fluid rounded-3 shadow" alt="" />
                                    </Link>
                                </div>

                                <div className="col-6">
                                    <Link to="#" onClick={() => handleImageClick(3)} className="lightbox" title="">
                                        <img src={image4} className="img-fluid rounded-3 shadow" alt="" />
                                    </Link>
                                </div>

                                <div className="col-6">
                                    <Link to="#" onClick={() => handleImageClick(4)} className="lightbox" title="">
                                        <img src={image5} className="img-fluid rounded-3 shadow" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row g-2">
                        <div className="col-lg-9 col-md-7 col-12">
                            <div className="section-title border shadow-lg p-3">
                                <div className="border shadow-lg p-3 mb-2" style={{ backgroundColor: ' rgb(188 199 204 / 18%)' }}>
                                    <h4 className="title mb-0">{data?.title ? data?.title : "10765 Hillshire Ave, Baton Rouge, LA 70810, USA"}</h4>

                                    <ul className="list-unstyled mb-0 py-3">
                                        <li className="list-inline-item">
                                            <span className="d-flex align-items-center me-3">
                                                <i className="mdi mdi-arrow-expand-all fs-4 me-2 text-primary"></i>
                                                <span className=" fs-5">8000sqf</span>
                                            </span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="d-flex align-items-center me-3">
                                                <i className="mdi mdi-office-building fs-4 me-2 text-primary"></i>
                                                <span className=" fs-5">17 floor</span>
                                            </span>
                                        </li>
                                        <li className="list-inline-item">
                                            <span className="d-flex align-items-center me-3">
                                                <i className="mdi mdi-parking fs-4 me-2 text-primary"></i>
                                                <span className=" fs-5">1 Parking</span>
                                            </span>
                                        </li>
                                        {/* <li className="list-inline-item">
                                    <span className="d-flex align-items-center me-2">
                                        <i className="mdi mdi-clock-outline fs-4 me-2 text-primary"></i>
                                        <span className="text-muted fs-5">Building Age (4 year(s))</span>
                                    </span>
                                </li> */}

                                        <li className="list-inline-item">
                                            <span className="d-flex align-items-center me-3">
                                                <i className="mdi mdi-bed fs-4 me-2 text-primary"></i>
                                                <span className=" fs-5">4 Beds</span>
                                            </span>
                                        </li>

                                        <li className="list-inline-item">
                                            <span className="d-flex align-items-center ">
                                                <i className="mdi mdi-shower fs-4 me-2 text-primary"></i>
                                                <span className=" fs-5">4 Baths</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="border shadow-lg mt-3 mb-3">

                                 <AmenitiesList activeAmenities={activeAmenities} />

                                </div>
                                <p className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                <p className="">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                <p className="">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>

                                <div className="card map border-0">
                                    <div className="card-body p-0">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="rounded-3" style={{ border: '0' }} title="Townter" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-5 col-12">
                            <div className="rounded-3 shadow bg-white sticky-bar p-4">
                                <h5 className="mb-3">Price:</h5>

                                <div className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">$ 45,231</h5>
                                    <span className="badge bg-primary">For Rent</span>
                                </div>

                                <div className="">
                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <span className="small text-muted">Days on Shivay Property</span>
                                        <span className="small">124 Days</span>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <span className="small text-muted">Price per sq ft</span>
                                        <span className="small">$ 186</span>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between mt-2">
                                        <span className="small text-muted">Monthly Payment (estimate)</span>
                                        <span className="small">$ 1497/Monthly</span>
                                    </div>
                                </div>

                                <div className="d-flex mt-3">
                                    <Link to="#" className="btn btn-primary w-100 me-2">Rent Now</Link>
                                    {/* <Link to="#" className="btn btn-primary w-100">Offer now</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title text-center mb-4 pb-2">
                                <h4 className="title mb-3">Related Properties</h4>
                                <p className="text-muted para-desc mb-0 mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                            </div>
                        </div>
                    </div>

                    <ProprtySlider />
                </div>
            </section>
            <Footer />
            {open && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                    nextSrc={images[(currentImageIndex + 1) % images.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </>
    )
}