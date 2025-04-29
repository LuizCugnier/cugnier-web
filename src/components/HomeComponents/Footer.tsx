import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-white text-lg font-bold">TIC Company</h3>
                        <p className="text-gray-300 text-sm">
                            Setting the standard in Testing, Inspection, and Certification services globally.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/#services" className="text-gray-300 hover:text-white text-sm">
                                    Product Testing
                                </Link>
                            </li>
                            <li>
                                <Link to="/#services" className="text-gray-300 hover:text-white text-sm">
                                    Quality Inspection
                                </Link>
                            </li>
                            <li>
                                <Link to="/#services" className="text-gray-300 hover:text-white text-sm">
                                    Certification
                                </Link>
                            </li>
                            <li>
                                <Link to="/#services" className="text-gray-300 hover:text-white text-sm">
                                    Risk Assessment
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/#about" className="text-gray-300 hover:text-white text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="text-gray-300 hover:text-white text-sm">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-300 hover:text-white text-sm">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-300 text-sm">123 Testing Avenue</li>
                            <li className="text-gray-300 text-sm">Certification City, TC 98765</li>
                            <li className="text-gray-300 text-sm">+1 (555) 123-4567</li>
                            <li className="text-gray-300 text-sm">contact@ticcompany.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} TIC Company. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                            Terms of Service
                        </Link>
                        <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                            Privacy
                        </Link>
                        <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};