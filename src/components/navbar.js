
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoDark from '../assect/images/icon.jpg'
import logoLight from '../assect/images/icon.jpg'

import { FiSearch, FiUser } from '../assect/icons/vander'

export default function Navbar({ navClass, logolight, menuClass }) {
    const [scroll, setScroll] = useState(false);
    const [isMenu, setisMenu] = useState(false);
    const [modal, setModal] = useState(false)

    useEffect(() => {
        activateMenu()
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
        const closeDropdown = () => {
            setModal(false)
        }
        document.addEventListener("mousedown", closeDropdown);
        window.scrollTo(0, 0);
    }, []);

    var mybutton = document.getElementById("back-to-top");
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (mybutton != null) {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    }

    // Toggle menu
    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    function getClosest(elem, selector) {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    };

    function activateMenu() {
        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');


                var immediateParent = getClosest(matchingMenuItem, 'li');

                if (immediateParent) {
                    immediateParent.classList.add('active');
                }

                var parent = getClosest(immediateParent, '.child-menu-item');
                if (parent) {
                    parent.classList.add('active');
                }

                var parent = getClosest(parent || immediateParent, '.parent-menu-item');

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }

                    var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
        }
    }
    return (
        <>
            <header id="topnav" style={{boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.8);"}} className={`${scroll ? "nav-sticky" : ""} ${navClass}  shadow-lg` }>
                <div className="container">
                    {logolight === true ?
                        <Link className="logo" to="/">
                            <span className="logo-light-mode">
                                <img src={logoDark} className="l-dark" alt="" />
                                <img src={logoLight} className="l-light" alt="" />
                            </span>
                            <img src={logoLight} className="logo-dark-mode" alt="" />
                        </Link> :
                        <Link className="logo" to="/">
                            <img src={logoDark} className="logo-light-mode" alt="" />
                            <img src={logoLight} className="logo-dark-mode" alt="" />
                        </Link>
                    }

                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>

                        </div>
                    </div>

                    <ul className="buy-button list-inline mb-0">
                        {/* <li className="list-inline-item ps-1 mb-0">
                            <div className="dropdown">
                                <button type="button" className="dropdown-toggle btn btn-sm btn-icon btn-pills btn-primary" onClick={() => setModal(!modal)}>
                                    <FiSearch className="icons" />
                                </button>
                                <div className={`${modal === true ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-start bg-white rounded-3 border-0 mt-3 p-0 right-0`} style={{ width: "240px", right: "0" }}>
                                    <div className="search-bar">
                                        <div id="itemSearch" className="menu-search mb-0">
                                            <form role="search" method="get" id="searchItemform" className="searchform">
                                                <input type="text" className="form-control rounded-3 border" name="s" id="searchItem" placeholder="Search..." />
                                                <input type="submit" id="searchItemsubmit" value="Search" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                        <li className="list-inline-item ps-1 mb-0">
                            {/* <Link to="/auth-login" className="btn btn-sm btn-icon btn-pills btn-primary"><FiUser className="icons" /></Link> */}
                            <Link to='/auth-login'>
                            <button className="btn me-2 " style={{border:"1px solid black", backgroundColor:"white"}}>Login</button>
                            </Link>
                            <Link to='/auth-signup'>
                            <button className="btn btn-primary">Sign Up</button>
                            
                            </Link>
                        </li>
                    </ul>

                    <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                        <ul className={menuClass}>
                            <li className="has-submenu parent-menu-item">
                                {/* <Link to="/">Home</Link> */}
                                {/* <ul className="submenu">
                                <li><Link to="/" className="sub-menu-item">Hero One</Link></li>
                                <li><Link to="/index-two" className="sub-menu-item">Hero Two</Link></li>
                                <li><Link to="/index-three" className="sub-menu-item">Hero Three</Link></li>
                                <li><Link to="/index-four" className="sub-menu-item">Hero Four</Link></li>
                                <li><Link to="/index-five" className="sub-menu-item">Hero Five </Link></li>
                                <li><Link to="/index-six" className="sub-menu-item">Hero Six</Link></li>
                                <li><Link to="/index-seven" className="sub-menu-item">Hero Seven</Link></li>
                            </ul> */}
                            </li>
                            <li><Link to="/buy" className="sub-menu-item">Rent</Link></li>

                            {/* <li><Link to="/sell" className="sub-menu-item">Sell</Link></li> */}

                            {/* <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Resources</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item"><Link to="#"> Grid View </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/grid" className="sub-menu-item">Grid Listing</Link></li>
                                        <li><Link to="/grid-sidebar" className="sub-menu-item">Grid Sidebar </Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> List View </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/list" className="sub-menu-item">List Listing</Link></li>
                                        <li><Link to="/list-sidebar" className="sub-menu-item">List Sidebar </Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#"> Property Detail </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/property-detail" className="sub-menu-item">Property Detail</Link></li>
                                        <li><Link to="/property-detail-two" className="sub-menu-item">Property Detail Two</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li> */}

                            <li className="has-submenu parent-parent-menu-item">
                                <Link to="#">Resources</Link><span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <div className="row p-3">
                                        <div className="col-md-4">
                                            <h5><strong>Services</strong></h5>
                                            <ul class="list-unstyled">
                                              
                                             <li><Link to="/comingsoon" className="sub-menu-item">Key Management</Link></li>
                                             <li><Link to="/comingsoon" className="sub-menu-item">Property Management</Link></li>
                                             <li><Link to="/comingsoon" className="sub-menu-item">Renting Solution</Link></li>
                                             <li><Link to="/comingsoon" className="sub-menu-item">Rent Agreement</Link></li>
                                             <li><Link to="/property" className="sub-menu-item">Property</Link></li>
                                             <li><Link to="/comingsoon" className="sub-menu-item"> Partner</Link></li>
                                             
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <h5><strong>Company</strong></h5>
                                            <ul class="list-unstyled">
                                            <li><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                             <li><Link to="/comingsoon" className="sub-menu-item">Terms</Link></li>
                                             <li><Link to="/property-detail" className="sub-menu-item">Team</Link></li>
                                            
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <h5><strong>Know More</strong></h5>
                                            <ul class="list-unstyled">
                                            <li><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>
                                             <li><Link to="/blogs" className="sub-menu-item">Blog</Link></li>
                                             <li><Link to="/faqs" className="sub-menu-item">FAQ</Link></li>
                                             <li><Link to="/contactus" className="sub-menu-item">Contact Us</Link></li>
                                            
                                              
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </li>

                            {/* <li><Link to="/contactus" className="sub-menu-item">Contact Us</Link></li> */}
                        </ul>
                    </div>
                </div>
            </header>
           
        </>
    )
}