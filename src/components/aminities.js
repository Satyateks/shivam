import { amenities } from "../data/data";

export const AmenitiesList = ({ activeAmenities }) => {
    return (
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-4">
          {amenities.map((item) => {
            // Check karein ki item active hai ya nahi
            const isActive = activeAmenities.includes(item.name);
            return (
              <div key={item.id} className="col d-flex flex-column align-items-center text-center">
                <i
                  className={`mdi ${item.icon} fs-4 ${isActive ? "text-primary" : "text-secondary"}`}
                  style={{ filter: isActive ? "none" : "grayscale(100%)" }}
                ></i>
                <span className="fw-bold mt-1">{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    );
  };
  


  
  