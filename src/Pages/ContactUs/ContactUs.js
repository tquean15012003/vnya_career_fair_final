// Contact us form permits user to send email to organization quickly

import React, { useEffect, useRef } from 'react'
import emailjs from 'emailjs-com'
import { setBackToHomeAction } from '../../redux/actions/AppEffectActions';
import { useDispatch } from 'react-redux';
import { SERVICE_TYPE, TEMPLATE_ID, USER_ID } from '../../Util/Email/EmailConst';

export default function ContactUs() {

    const formContactRef = useRef(null);

    const dispatch = useDispatch()

    const sendEmail = (e) => {
        // prevent reload when submit form
        e.preventDefault();

        // call api to send email from emailjs
        emailjs.sendForm( SERVICE_TYPE, TEMPLATE_ID, formContactRef.current, USER_ID)
            .then(() => {
                alert("We have received your response. Thank you for contact us.")
                e.target.reset()
            }, () => {
                alert("Your message has not sent")
            });
    };

    useEffect(() => {
        // Display back to home button
        dispatch(setBackToHomeAction(false))
    })

    return (
        <>
        <h1 className="text-3xl md:text-4xl text-center mt-12 font-bold">Contact us</h1>
        <form className="container mx-auto mt-6 w-full sm:w-4/5 md:3/4 lg:w-1/2" ref={formContactRef} onSubmit={sendEmail}>
            <div>
                <span className="uppercase text-sm text-gray-500 font-bold">Subject</span>
                <input name="subject" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" />
            </div>
            <div className="mt-8">
                <span className="uppercase text-sm text-gray-500 font-bold">Full Name</span>
                <input name="name" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Tran Que An" />
            </div>
            <div className="mt-8">
                <span className="uppercase text-sm text-gray-500 font-bold">Email</span>
                <input name="email" className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="tquean15012003@gmail.com" />
            </div>
            <div className="mt-8">
                <span className="uppercase text-sm text-gray-500 font-bold">Message</span>
                <textarea name="message" className="w-full h-40 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
                <button
                    className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </div>
        </form>
        </>
        
    )
}