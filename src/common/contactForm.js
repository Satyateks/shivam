import  '../common/commonForm.css'

export const ContactForm = () => {
    return (
        <div
            className="card shadow-lg"
            style={{
                position: "sticky",
                top: "130px", 
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
            }}
        >
            <div className="card-body">
                <h5 className="fw-bold text-center">Contact Us</h5>
                <form>
                    <div>
                        <p className="fw-bold">
                            Who are you ?<span className="text-danger m-0"> *</span>
                        </p>
                        <div className="d-flex gap-3 align-items-center mb-4">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="userType" id="tenant" />
                                <label className="form-check-label ms-2" htmlFor="tenant">I'm a Tenant</label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="userType" id="owner" />
                                <label className="form-check-label ms-2" htmlFor="owner">I'm an Owner</label>
                            </div>

                        </div>
                        <div className="d-flex gap-3 align-items-center ">
                            <div>
                                <label className="d-block fw-bold">First Name<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control "  placeholder='First Name' required/>
                            </div>
                            <div>
                                <label className="d-block fw-bold">Last Name<span className='text-danger fw-bold'>*</span></label>
                                <input type="text" className="form-control" placeholder='Last Name' required />
                            </div>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};
