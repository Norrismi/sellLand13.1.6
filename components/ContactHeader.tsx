import React from 'react'
import ContactForm from './ContactForm'


const ContactHeader = () => {
    return (
        <div className=' flex-col-1'>
            <div className="p-4 flex justify-center flex-col md:flex-row">
                <div className="w-full m-8 md:w-1/4 md:pr-8">
                    <div className="bg-gray-100 p-4 rounded-md">
                        <h2 className="text-2xl font-semibold mb-4">For Potential Land Buyers</h2>
                        <p className="text-gray-700 mb-6">
                            If you are interested in buying land, please provide your contact information and property details so we can assist you better.
                        </p>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactHeader






