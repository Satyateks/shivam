import React from 'react'

const BrokerLead = ({ lead }) => {
    
      
          
       

  return (
    
    <div className="card mb-4 shadow-sm border-0 rounded-4">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center rounded-top-4">
        <h5 className="mb-0">{lead.lead_name}</h5>
        <span className="badge bg-light text-dark">{lead.service_type.toUpperCase()}</span>
      </div>
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-6">
            <p className="mb-1"><strong>📧 Email:</strong> {lead.lead_email}</p>
            <p className="mb-1"><strong>📞 Phone:</strong> {lead.country_code} {lead.lead_phone}</p>
            <p className="mb-1"><strong>🏷 Category:</strong> {lead.category_type}</p>
            <p className="mb-1"><strong>🏠 Apartment:</strong> {lead.apartment_names}</p>
            <p className="mb-1"><strong>🏢 Project:</strong> {lead.project_name}</p>
          </div>
          <div className="col-md-6">
            <p className="mb-1"><strong>📍 Location:</strong> {lead.locality_name}, {lead.city_name}</p>
            <p className="mb-1"><strong>📐 Area:</strong> {lead.min_area} - {lead.max_area} sq.ft</p>
            <p className="mb-1"><strong>💰 Price:</strong> ₹{lead.min_price.toLocaleString()} - ₹{lead.max_price.toLocaleString()}</p>
            <p className="mb-1"><strong>🕒 Lead Time:</strong> {new Date(lead.lead_date * 1000).toLocaleString()}</p>
            <p className="mb-1"><strong>📂 Property Type:</strong> {lead.property_field.join(', ')}</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};


export default BrokerLead;