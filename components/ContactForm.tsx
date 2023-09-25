"use client";

import React, { ChangeEvent, FormEvent, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify';
import axios from 'axios';
import dynamic from "next/dynamic";


// const form: any=useRef();

// const sendMail = async (event: FormEvent) => { 

//     event.preventDefault();
//     emailjs.sendForm("service_yu7q39l", "template_iq0nkpl", form.current,"nc1g-rxJ2VCoCU7es")
//     .then(function(response) {
//         console.log('SUCCESS!', response.status, response.text);
//      }, function(error) {
//         console.log('FAILED...', error);
//      });





// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [apn, setApn] = useState('');
//     const [state, setState] = useState('');
//     const [county, setCounty] = useState('');

// console.log('Data', name, phone, email, apn, state, county)

// try {
//     const res = await fetch('/api/contact', {
//         method: 'POST',
//         body: JSON.stringify({
//             name, phone, email, apn, state, county,
//         }),
//         headers: {
//             'content-type': 'application/json'
//         },
//     });

//     if (res.ok) {
//         setName('');
//         setPhone('');
//         setEmail('');
//         setApn('');
//         setState('');
//         setCounty('');
//     }

// } catch (err) {
//     console.log("Error", err)
//     }

// }

/* <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="name" className="block text-white font-medium">Name</label>
                    <input
                        type="text" id="name" name="name"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={name} onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="phone" className="block text-white font-medium">Phone</label>
                    <input
                        type="text" id="phone" name="phone"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={phone} onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="email" className="block text-white font-medium">Email</label>
                    <input
                        type="email" id="email" name="email"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={email} onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="apn" className="block text-white font-medium">Property Address or APN</label>
                    <input
                        type="text" id="apn" name="apn"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={apn} onChange={e => setApn(e.target.value)}
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="state" className="block text-white font-medium">State</label>
                    <input
                        type="text" id="state" name="state"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={state} onChange={e => setState(e.target.value)}
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="county" className="block text-white font-medium">County</label>
                    <input
                        type="text" id="county" name="county"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={county} onChange={e => setCounty(e.target.value)}
                    />
                </div> */

//                 <button type="submit" className="bg-green-500 col-span-2 text-white p-4 rounded-3xl">Submit</button>
//             </form>
//             <ToastContainer/>
//         </>

//     );
// };

// export default dynamic(() => Promise.resolve(ContactForm), { ssr: false })






const ContactForm = () => {
    const [emailForm, setEmailForm] = useState({
        name: "",
        email: "",
        phone: "",
    
    });

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let {name, value} = e.target;
        setEmailForm({...emailForm, [name]: value});
    };

    const HandleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let {name, value} = e.target;
        setEmailForm({...emailForm, [name]: value});
    };

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // setIsLoading(true);
        emailjs.send("service_yu7q39l", "template_iq0nkpl", emailForm, "nc1g-rxJ2VCoCU7es")
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
            }, (error) => {
                console.log("FAILED...", error);
            })
         
    };


        return (

            <div className="message" id="contact">
            <div className="messageTitle">Register Your Interest</div>
            <form className="formMessage" onSubmit={HandleSubmit}>
                <div className="formInput">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={HandleChange}/>
           
                </div>
                <div className="formInput">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={HandleChange}/>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        onChange={HandleChange}/>
                </div>
                <div className="formInput">
                    <textarea
                        name="message"
                        placeholder="Your Message..."
                        onChange={HandleChangeTextArea}/>
                </div>
                    <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>



            // <div>
            //     <form ref={form} onSubmit={sendMail} className="grid gap-4 grid-cols-1 md:grid-cols-2 text-gray-500 ">

            //         <input type="text" name="name" placeholder="Name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            //         <input type="text" name="email" placeholder="Email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            //         <input type="text" name="phone" placeholder="phone" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
            //     </form>
            // </div>



        )
    }

    export default ContactForm

