import React, { useEffect, useState } from 'react'
import CustomModal from '../common/customModal';
import ContactUs from '../pages/contactus';
import { ContactForm } from '../common/contactForm';

const GetHelp = () => {
    const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    alert(`You entered: ${inputValue}`);
    setShowModal(false);
  };

  useEffect(()=>{
  
    setTimeout(() => {
        console.log(1)
        setShowModal(true);
      }, 2000);
  },[])
  return (
    <div className="container text-center mt-5">
    {/* Button to Open Modal */}
    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
      Open Modal
    </button>

    {/* Custom Modal */}
    {showModal && (
      <CustomModal show={showModal} handleClose={() => setShowModal(false)}>
     <ContactForm title="To Help is our Passion"/>
      </CustomModal>
    )}
  </div>
  )
}

export default GetHelp;