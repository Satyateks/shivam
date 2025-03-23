import { ContactForm } from "../common/contactForm";
import { PropertyCard } from "../common/propertyCard"
import { propertyData } from "../data/data";


export const PropertyContact = () => {
    const properties = propertyData;
    return (
        <>

            <div className="container position-relative mt-5 pt-4">
                <div className="row ">
                    <div className="col-lg-8 col-12">
                        <PropertyCard properties={propertyData} />
                    </div>
                    <div className="col-lg-4 mt-4 d-none d-md-block">
                        <ContactForm />
                    </div>
                </div>
            </div>

        </>
    )
}