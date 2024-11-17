"use client"
import React, { useState } from 'react';
import TypingAnimation from './ui/typing-animation';

const Contact = () => {
    return (
        <section className="">
            <div className="py-8 lg:py-16 px-4 mx-auto">
                <div className="mb-4 text-4xl tracking-tight font-semibold text-center text-[#0096c7]">
                    <TypingAnimation
                        className="text-4xl font-bold"
                        text="Contact Us"
                    />
                </div>
                <p className="mb-8 lg:mb-16 text-center text-slate-500 sm:text-xl">
                    Thank you for visiting our website! We are committed to providing you with the best possible healthcare experience, and we understand that communication is key. Our Contact Form is here to facilitate your inquiries and ensure that you receive the support you need in a timely manner.
                </p>
                <form className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@healthconnect.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea
                            id="message"
                            rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Leave a comment..."
                        />
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#0077b6] hover:bg-[#0096c7]">
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;