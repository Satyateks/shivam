import React from 'react'
import PropertyImage from './propertyImage';
import FeatureList from './featureList';
import RentalForm from '../rentalForm';
import Navbar from '../navbar';

const RentindSolution = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center py-5" style={{ background: 'linear-gradient(135deg, #6f42c1 0%, #a855f7 100%)' }}>
      <Navbar navClass="defaultscroll sticky" logolight={true} menuClass = "navigation-menu nav-left nav-light"/>
    <div className="container">
      <div className="row align-items-center g-4">
        {/* Left Section */}
        <div className="col-md-6 text-white">
          <PropertyImage />
          <FeatureList />
        </div>

        {/* Right Section - Form */}
        <div className="col-md-6">
          <RentalForm />
        </div>
      </div>
    </div>
  </div>
  )
}

export default RentindSolution;