import '../common/commonForm.css'
import flag from '../assect/svg/flag.svg'
import { useEffect } from 'react';
import CInput from './CInput/CInput';
export const ContactForm = ({title="Contact Us"}) => {

 
   
    
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
            <div className="card-body" style={{backgroundColor:'#b0ccf13b'}}>
                <h5 className="fw-bold text-center">{title}</h5>
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
                        <div className="d-flex gap-3 align-items-center mb-4">
                            <div>
                                <label className="d-block fw-bold">First Name<span className='text-danger'>*</span></label>
                                <input type="text" className="form-control " placeholder='First Name' required />
                            </div>
                            <div>
                                {/* <CInput label='Last Name' value='lastName' placeholder='Enter LastName'  className=''  /> */}
                                <label className="d-block fw-bold">Last Name<span className='text-danger fw-bold'>*</span></label>
                                <input type="text" className="form-control" placeholder='Last Name' required />
                            </div>
                        </div>
                        <div className="d-flex gap-3 align-items-center mb-4 ">
                            <div className='w-100'>
                                <label className="d-block fw-bold">Email<span className='text-danger'>*</span></label>
                                <input type="email" className="form-control w-100 " placeholder='Email' required />
                            </div>

                        </div>
                        <div className='mb-4' >
                            <label className="d-block fw-bold">Mobile<span className='text-danger'>*</span></label>

                            <div className="d-flex gap-3 align-items-center">

                                <div className="input-group flex-nowrap">

                                    <span className="input-group-text">
                                        <img src={flag} alt="Indian Flag" width="24" height="16" />
                                    </span>
                                    <input type="tel" className="form-control" placeholder="Mobile Number" aria-label="Mobile Number" />
                                </div>
                            </div>
                            
                        </div>
                       <button type='submit' className='btn btn-primary w-100'>Submit</button>



                    </div>

                </form>
            </div>
        </div>
    );
};
