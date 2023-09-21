"use client";

import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import dynamic from "next/dynamic";


const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [apn, setApn] = useState('');
    const [state, setState] = useState('');
    const [county, setCounty] = useState('');



    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        console.log('Data', name, phone, email, apn, state, county)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, phone, email, apn, state, county,
                }),
                headers: {
                    'content-type': 'application/json'
                },
            });

            if (res.ok) {
                setName('');
                setPhone('');
                setEmail('');
                setApn('');
                setState('');
                setCounty('');
            }

        } catch (err) {
            console.log("Error", err)
        }

    }

    return (

        <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 md:grid-cols-2 text-gray-500 ">


            <div className="col-span-2 sm:col-span-1">
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
            </div>

            <button type="submit" className="bg-green-500 col-span-2 text-white p-4 rounded-3xl">Submit</button>
        </form>
    );
};

export default dynamic(() => Promise.resolve(ContactForm), { ssr: false })






