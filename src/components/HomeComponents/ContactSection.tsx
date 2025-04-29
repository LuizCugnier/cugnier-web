import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/button";

const ContactSection = () => {
    return (
        <div id="contact" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Contact</h2>
                    <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                        Get in Touch
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                        Have questions about our services? Ready to begin? Our team is here to help.
                    </p>
                </div>

                <div className="mt-16 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <MapPin className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="ml-3 text-base text-gray-500">
                                            <p>123 Testing Avenue</p>
                                            <p>Certification City, TC 98765</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <Phone className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="ml-3 text-base text-gray-500">
                                            <p>+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <Mail className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div className="ml-3 text-base text-gray-500">
                                            <p>contact@ticcompany.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                                <div className="mt-4 space-y-1">
                                    <p className="text-base text-gray-500">Monday - Friday: 8AM - 6PM</p>
                                    <p className="text-base text-gray-500">Saturday: 9AM - 1PM</p>
                                    <p className="text-base text-gray-500">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;