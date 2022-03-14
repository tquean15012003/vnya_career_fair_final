import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function ContactUs() {

    const formContactRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8lsu3s2', 'template_tnl8u4s', formContactRef.current, '_ESVSkQ8pLg7FH4K6')
            .then(() => {
                alert("We have received your response. Thank you for contact us.")
                e.target.reset()
            }, () => {
                alert("Your message has not sent")
            });
    };

    return (
        <form className="container mx-auto mt-12 w-full sm:w-4/5 md:3/4 lg:w-1/2" ref={formContactRef} onSubmit={sendEmail}>
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
    )
}
