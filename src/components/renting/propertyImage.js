import React from 'react';

const PropertyImage = () => {
  return (
    <div className="text-center mb-4">
      <div className="position-relative mx-auto" style={{ width: '256px', height: '256px' }}>
        <div className="rounded-circle p-1" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="rounded-circle p-3" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
            <div className="rounded-circle overflow-hidden" style={{ border: '4px solid rgba(255, 255, 255, 0.3)' }}>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt="Modern house"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyImage;