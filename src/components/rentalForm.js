import React, { useState } from 'react';


const RentalForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white rounded-4 p-4 p-lg-5 shadow">
      <h3 className="fs-3 fw-semibold text-dark mb-4">
        Don't Waste Time, Start Renting, Start Earning
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-3">
          <div className="col-sm-6">
            <label className="form-label">
              First Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              required
            />
          </div>
          <div className="col-sm-6">
            <label className="form-label">
              Last Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Mobile<span className="text-danger">*</span>
          </label>
          <div className="input-group">
            <span className="input-group-text">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              required
            />
          </div>
          <div className="form-text">Mobile number should not start with + or any code</div>
        </div>

        <div className="mb-4">
          <label className="form-label">
            Email<span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-success w-100 py-2"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default RentalForm;