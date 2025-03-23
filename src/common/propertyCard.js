
import { useNavigate } from "react-router-dom";

export const PropertyCard = ({properties}) => {

    console.log(properties)
    // const properties = propertyData;
    const navigate = useNavigate();
    return (
        <>
       {properties.map((property) => (
  <div className="card" key={property.id}>
    <div className="card-body">
      <div className="row border shadow-lg align-items-stretch">
       
        <div className="col-12 col-md-4 p-0">
          <img
            src={property.image}
            className="img-fluid w-100 h-100 rounded shadow"
            style={{ objectFit: "cover" }} 
          />
        </div>

       
        <div className="col-12 col-md-8 d-flex flex-column">
          <div>
          
            <h4
              className="mt-2 fw-bold mb-2 text-truncate"
              style={{
                maxWidth: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {property.title}
            </h4>

            <section>
              <p className="fs-5">
                City: <span style={{ color: "blueviolet" }}>Noida</span>
              </p>
              <p className="fs-5">
                State: <span style={{ color: "blueviolet" }}>UP</span>
              </p>
            </section>
          </div>

       
          <div className="mt-auto">
         
            <div className="d-none d-md-flex justify-content-end">
              <button
                className="btn btn-primary mb-2"
                onClick={() => navigate(`/property-detail/${property.id}`)}
              >
                Explore
              </button>
            </div>

         
            <div className="d-md-none d-flex justify-content-between gap-2 mb-3">
             
              <div
                className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                onClick={() => alert("Call Clicked")}
              >
                <i className="mdi mdi-phone text-white fs-4"></i>
              </div>

             
              <div
                className="rounded-circle bg-success d-flex align-items-center justify-content-center"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                onClick={() => alert("WhatsApp Clicked")}
              >
                <i className="mdi mdi-whatsapp text-white fs-4"></i>
              </div>

              <button
                className="btn btn-primary flex-grow-1"
                onClick={() => navigate(`/property-detail/${property.id}`)}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
        </>
    )
}