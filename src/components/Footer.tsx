import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import logoSvg from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoSvg}
                alt="Wide Angle Logo" 
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-xl font-bold text-white">
                  <span className="text-primary-400">W</span>ide Angle
                </h3>
                <p className="text-gray-400">Surveying Engineering Services LLC</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional surveying services across the UAE with precision, reliability, and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400">Land Surveying</span>
              </li>
              <li>
                <span className="text-gray-400">Construction Surveying</span>
              </li>
              <li>
                <span className="text-gray-400">Topographic Surveying</span>
              </li>
              <li>
                <span className="text-gray-400">Engineering Surveys</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Wide Angle Surveying Engineering Services LLC</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">+971 50 202 7474</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">info@wideangle.ae</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon - Sat: 8:30 AM - 5:30 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wide Angle Surveying Engineering Services LLC. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Licensed in UAE | Professional Surveying Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer