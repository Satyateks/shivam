import React,{useState} from "react";
import { Link } from "react-router-dom";

import bg3 from "../../assect/images/bg/03.jpg"
import bg5 from "../../assect/images/bg/05.jpg"
import hero from "../../assect/images/hero.jpg"
import dots from "../../assect/images/svg/dots.svg"
import image1 from "../../assect/images/1.jpg"

import Navbar from "../../components/navbar";
import PropertyTwo from "../../components/propertyTwo";
import Broker from "../../components/broker";
import Blog from "../../components/blog";
import GetInTuch from "../../components/getInTuch";
import CategoriesTwo from "../../components/categoriesTwo";
import FooterTopImage from "../../components/FoterTopImage";
import Footer from "../../components/footer";

import CountUp from 'react-countup';

import ModalVideo from 'react-modal-video';
import "../../../node_modules/react-modal-video/css/modal-video.css"

export default function IndexSix(){
    const [isOpen, setOpen] = useState(false);
    return(
        <>
        <Navbar navClass="defaultscroll sticky" menuClass = "navigation-menu nav-left"/>
        <section className="position-relative mt-5 pt-4">
            <div className="container-fluid px-lg-5 px-2 mt-2">
                <div className="bg-half-260 d-table w-100 shadow rounded-3 overflow-hidden" id="home">
                    <div className="bg-overlay" style={{backgroundImage:`url(${bg3})`, backgroundPosition:'top', backgroundRepeat:'no-repeat', backgroundAttachment:'fixed'}} id="hero-images"></div>
                    <div className="bg-overlay bg-black opacity-50"></div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="title-heading">
                                    <h4 className="heading fw-bold text-white title-dark mb-3">Properties Investment Plateform</h4>
                                    <p className="para-desc text-white title-dark mb-0">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                                
                                    <div className="subscribe-form mt-4">
                                        <form className="me-auto">
                                            <div className="mb-0">
                                                <input type="text" id="help" name="name" className="shadow rounded-3 bg-white" required="" placeholder="City, Address, Zip"/>
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
        </section>
        <section className="section pt-5">
            <CategoriesTwo/>
            <div className="container mt-100 mt-60">
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
               <PropertyTwo/>
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
                <Blog/>
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