import React from 'react'
import BrokerLead from './brokerLead'
import Navbar from '../navbar'

const BrokerLeadProfile = () => {
    let data = [
        {
            "lead_date": 1745329380,
            "apartment_names": "3 BHK",
            "country_code": "+91",
            "service_type": "rent",
            "category_type": "residential",
            "locality_name": "Noida Extension",
            "city_name": "Greater Noida",
            "lead_name": "Somya Sharma",
            "lead_email": "somya.sharma1107@gmail.com",
            "lead_phone": "9821840346",
            "max_area": 1675.0,
            "min_area": 1675.0,
            "min_price": 37000,
            "max_price": 37000,
            "flat_id": 16991813,
            "project_name": "ATS Nobility",
            "property_field": [
                "Apartment"
            ]
        },
        {
            "lead_date": 1745308980,
            "apartment_names": "2 BHK",
            "country_code": "+91",
            "service_type": "rent",
            "category_type": "residential",
            "locality_name": "Noida Extension",
            "city_name": "Greater Noida",
            "lead_name": "Rajnish ",
            "lead_email": "rajnish.raj2010@gmail.com",
            "lead_phone": "8920147686",
            "max_area": 1025.0,
            "min_area": 1025.0,
            "min_price": 19000,
            "max_price": 19000,
            "flat_id": 16825494,
            "project_name": "Nirala Aspire",
            "property_field": [
                "Apartment"
            ]
        },
        {
            "lead_date": 1745301840,
            "apartment_names": "3 BHK",
            "country_code": "+91",
            "service_type": "rent",
            "category_type": "residential",
            "locality_name": "Noida Extension",
            "city_name": "Greater Noida",
            "lead_name": "Deepak ",
            "lead_email": "mavideepak5@gmail.com",
            "lead_phone": "8700864003",
            "max_area": 1385.0,
            "min_area": 1385.0,
            "min_price": 32000,
            "max_price": 32000,
            "flat_id": 16794222,
            "project_name": "ATS Happy Trails",
            "property_field": [
                "Apartment"
            ]
        },
        {
            "lead_date": 1745267400,
            "apartment_names": "3 BHK",
            "country_code": "+91",
            "service_type": "rent",
            "category_type": "residential",
            "locality_name": "Noida Extension",
            "city_name": "Greater Noida",
            "lead_name": "Rudra",
            "lead_email": "",
            "lead_phone": "9234399072",
            "max_area": 1675.0,
            "min_area": 1675.0,
            "min_price": 42000,
            "max_price": 42000,
            "flat_id": 16797978,
            "project_name": "ATS Nobility",
            "property_field": [
                "Apartment"
            ]
        },
        {
            "lead_date": 1745265780,
            "apartment_names": "3 BHK",
            "country_code": "+91",
            "service_type": "rent",
            "category_type": "residential",
            "locality_name": "Noida Extension",
            "city_name": "Greater Noida",
            "lead_name": "Rudra",
            "lead_email": "",
            "lead_phone": "9234399072",
            "max_area": 1675.0,
            "min_area": 1675.0,
            "min_price": 42000,
            "max_price": 42000,
            "flat_id": 16797978,
            "project_name": "ATS Nobility",
            "property_field": [
                "Apartment"
            ]
        },
        {
            "lead_date": 1745218020,
            "apartment_names": "2 BHK",
            "country_code": "+91",
            "service_type": "rent",
            "category_type": "residential",
            "locality_name": "Noida Extension",
            "city_name": "Greater Noida",
            "lead_name": "Uday",
            "lead_email": "udaykollati@gmail.com",
            "lead_phone": "8985064828",
            "max_area": 1100.0,
            "min_area": 1100.0,
            "min_price": 16000,
            "max_price": 16000,
            "flat_id": 16776155,
            "project_name": "NBCC Golf Homes",
            "property_field": [
                "Apartment"
            ]
        },
        {
            "lead_date": 1745242980,
            "apartment_names": "2 BHK",
            "country_code": "+91",
            "service_type": "resale",
            "category_type": "residential",
            "locality_name": "Noida Extension",
            "city_name": "Greater Noida",
            "lead_name": "AMIT",
            "lead_email": "infobhardwaj@gmail.com",
            "lead_phone": "7428470122",
            "max_area": 835.0,
            "min_area": 835.0,
            "min_price": 5600000,
            "max_price": 5600000,
            "flat_id": 16775114,
            "project_name": "NBCC Golf Homes",
            "property_field": [
                "Apartment"
            ]
        }
    ]
    return (
        <>
            {/* <Navbar navClass="defaultscroll sticky" logolight={true} menuClass="navigation-menu nav-left nav-light" /> */}
                      <Navbar navClass="defaultscroll sticky" menuClass="navigation-menu nav-left" />
          
            <div className="container  py-4 p" >
                <h2 className="mb-4 sticky-to " style={{marginTop:"45px"}}>Broker Lead Profiles</h2>
                {data.map((lead, index) => (
                    <BrokerLead key={index} lead={lead} />
                ))}
            </div>

        </>

    )
}

export default BrokerLeadProfile