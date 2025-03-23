import React from 'react';


const features = [
  'Increase the chances of renting your vacant property by 90%',
  'We are liable to pay one month\'s maintenance if your property is not rented',
  'A dedicated relationship manager is assigned for you 24x7x365'
];

const FeatureList = () => {
  return (
    <div>
      <h2 className="fs-1 fw-bold mb-4">How you can rent your property faster?</h2>
      <ul className="list-unstyled">
        {features.map((feature, index) => (
          <li key={index} className="d-flex align-items-center gap-3 mb-3">
            <i class="mdi mdi-check-circle check-icon"></i>
            {/* <Icon 
              path={mdiCheckCircle}
              size={1}
              className="text-white flex-shrink-0"
            /> */}
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;