import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
    return (
        <Layout>
            <section className="my-16">
                <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

                {/* Introduction */}
                <p className="text-lg mb-8">
                    If you have any questions, suggestions, or feedback, please feel free to get in touch with us. We'd love to hear from you!
                </p>

                {/* Contact Form */}
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input type="text" id="name" className="border border-gray-300 w-full p-2 rounded" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" className="border border-gray-300 w-full p-2 rounded" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                        <input type="text" id="subject" className="border border-gray-300 w-full p-2 rounded" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea id="message" rows="5" className="border border-gray-300 w-full p-2 rounded"></textarea>
                    </div>

                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
                </form>
            </section>
        </Layout>
    );
};

export default ContactPage;
