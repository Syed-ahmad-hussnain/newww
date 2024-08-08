import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import logo from '../../../assets/Images/logo.png'; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer className="bg-custom-gradient rounded-tl-[60px] rounded-tr-[60px] text-white py-16 px-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Social Links */}
          <div className="w-full md:w-1/4 mb-10 md:mb-0">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Primary Inbox Logo" className="h-8 mr-2" /> {/* Adjust size as needed */}
              <p className="text-2xl font-bold">Primary inbox</p>
            </div>
            <p className="text-sm mb-6">© 2024 Primary Inbox - Sales Engagement & Lead Intelligence.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Twitter size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Linkedin size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-gray-300"><Youtube size={20} /></a>
            </div>
          </div>
          
          {/* Fast Access */}
          <div className="w-full md:w-1/6 mb-10 md:mb-0">
            <h3 className="text-xl font-semibold mb-6">Fast Access</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline text-lg">Warm UP</a></li>
              <li><a href="#" className="hover:underline text-lg">Pricing</a></li>
              <li><a href="#" className="hover:underline text-lg">CRM</a></li>
              <li><a href="#" className="hover:underline text-lg">Affiliate</a></li>
              <li><a href="#" className="hover:underline text-lg">Experts</a></li>
              <li><a href="#" className="hover:underline text-lg">About</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="w-full md:w-1/6 mb-10 md:mb-0">
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline text-lg">Terms</a></li>
              <li><a href="#" className="hover:underline text-lg">Don't Sell My Info</a></li>
              <li><a href="#" className="hover:underline text-lg">Privacy</a></li>
              <li><a href="#" className="hover:underline text-lg">Privacy Center</a></li>
              <li><a href="#" className="hover:underline text-lg">Cookie Declaration</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="w-full md:w-1/6 mb-10 md:mb-0">
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline text-lg">Help Desk</a></li>
              <li><a href="#" className="hover:underline text-lg">Roadmap</a></li>
              <li><a href="#" className="hover:underline text-lg">Facebook Group</a></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div className="w-full md:w-1/6">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <a href="mailto:voltic@agency.com" className="hover:underline text-lg">voltic@agency.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <a href="tel:+91-002-200020200" className="hover:underline text-lg">+91-002-200020200</a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-3" />
                <span className="text-lg">Guadalupe Well</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;