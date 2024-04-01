import React, { useState } from 'react';
import { CustomButton } from '../Atoms';

const ContactForm: React.FC = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })
    const [messageSent, setMessageSent] = useState(false)

    const formItems = [
        {
            label: "Full Name",
            type: "text",
            id: "name",
            name: "name",
            placeholder: "Full Name"
        },
        {
            label: "Email",
            type: "email",
            id: "email",
            name: "email",
            placeholder: "yourmail@yourcompany.com"
        },
        {
            label: "Phone",
            type: "tel",
            id: "phone",
            name: "phone",
            placeholder: "10 digits phone"
        },
        {
            label: "Message",
            type: "textarea",
            id: "message",
            name: "message",
            placeholder: "Message"
        }
    ]

    const commonStyle = 'w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out '
    const allowButton = form.name && /^\d{10}$/.test(form.phone) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && form.message
    

    return (
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full sticky top-0 h-fit md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Agent</h2>
            <p className="leading-relaxed mb-5 text-gray-600">We'll contact you soon</p>
            {
                formItems.map((item, index) => {
                    if (item.type === "textarea") {
                        return (
                            <div key={index} className="relative mb-4">
                                <label htmlFor={item.id} className="leading-7 text-sm text-gray-600">{item.label}</label>
                                <textarea onChange={(e) => setForm({ ...form, message: e.target.value })} id={item.id} name={item.name} className={`${commonStyle} h-32`}></textarea>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className="relative mb-4">
                                <label htmlFor={item.id} className="leading-7 text-sm text-gray-600">{item.label}</label>
                                <input onChange={(e) => setForm({ ...form, [item.name]: e.target.value })} type={item.type} id={item.id} name={item.name} className={commonStyle} placeholder={item.placeholder} />
                            </div>
                        )
                    }
                })
            }
            {messageSent ? <p className="text-green-500 text-w">Message sent successfully!</p> : <CustomButton onClick={() => setMessageSent(true)} disabled={!allowButton}  title="Contact Now" />}


        </div>
    );
}

export default ContactForm;