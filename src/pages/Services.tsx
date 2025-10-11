import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Compass, 
  Building, 
  Mountain, 
  Camera, 
  Ruler,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Land Surveying',
      description: 'Comprehensive boundary surveys and property mapping services for legal documentation and development planning.',
      features: [
        'Boundary Surveys',
        'Property Mapping',
        'ALTA/NSPS Surveys',
        'Subdivision Surveys',
        'Easement Surveys',
        'Legal Descriptions'
      ],
      price: 'Starting from AED 5,000'
    },
    {
      icon: Building,
      title: 'Construction Surveying',
      description: 'Professional construction layout and monitoring services to ensure projects are built to specifications.',
      features: [
        'Site Layout Services',
        'Grade Checking',
        'As-Built Surveys',
        'Foundation Surveys',
        'Elevation Certificates',
        'Progress Monitoring'
      ],
      price: 'Starting from AED 3,500'
    },
    {
      icon: Mountain,
      title: 'Topographic Surveying',
      description: 'Detailed terrain mapping and elevation data collection for engineering and architectural projects.',
      features: [
        'Contour Mapping',
        'Digital Terrain Models',
        '3D Topographic Maps',
        'Cross-Section Surveys',
        'Volume Calculations',
        'Drainage Studies'
      ],
      price: 'Starting from AED 4,000'
    },
    {
      icon: Camera,
      title: 'Aerial Surveying',
      description: 'Advanced drone and aerial photography services for large-scale mapping and monitoring projects.',
      features: [
        'Drone Mapping',
        'Aerial Photography',
        'Orthophoto Generation',
        'Progress Monitoring',
        'Volumetric Analysis',
        'Inspection Services'
      ],
      price: 'Starting from AED 6,000'
    },
    {
      icon: Compass,
      title: 'Engineering Surveys',
      description: 'Specialized surveying services for infrastructure development and engineering applications.',
      features: [
        'Route Surveys',
        'Utility Mapping',
        'Monitoring Surveys',
        'Deformation Monitoring',
        'Bridge Surveys',
        'Pipeline Surveys'
      ],
      price: 'Starting from AED 4,500'
    },
    {
      icon: Ruler,
      title: 'Property Surveys',
      description: 'Residential and commercial property surveys for real estate transactions and development.',
      features: [
        'Mortgage Surveys',
        'Title Surveys',
        'Flood Certificates',
        'Property Line Verification',
        'Encroachment Surveys',
        'Zoning Compliance'
      ],
      price: 'Starting from AED 2,500'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your project requirements and provide a detailed quote.'
    },
    {
      step: '02',
      title: 'Site Assessment',
      description: 'Our team conducts a thorough site visit and preliminary assessment.'
    },
    {
      step: '03',
      title: 'Data Collection',
      description: 'Using advanced equipment, we collect precise measurements and data.'
    },
    {
      step: '04',
      title: 'Analysis & Processing',
      description: 'Data is processed using state-of-the-art software for accuracy.'
    },
    {
      step: '05',
      title: 'Report Delivery',
      description: 'Comprehensive reports and drawings are delivered on schedule.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Surveying Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Comprehensive surveying solutions tailored to meet your project needs with precision and reliability
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of surveying services using the latest technology and industry best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary-600">
                      {service.price}
                    </span>
                    <Link 
                      to="/contact" 
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center gap-1"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure accurate results and timely delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
                
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Technology & Equipment
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We utilize the latest surveying technology and equipment to ensure the highest accuracy and efficiency in all our projects.
              </p>
              
              <div className="space-y-4">
                {[
                  'GPS/GNSS Surveying Systems',
                  'Total Stations with Robotic Technology',
                  'UAV/Drone Mapping Systems',
                  '3D Laser Scanning Equipment',
                  'GIS and CAD Software Integration',
                  'Digital Data Collection Systems'
                ].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-primary-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">±2mm</div>
                    <div className="text-primary-200 text-sm">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24hrs</div>
                    <div className="text-primary-200 text-sm">Turnaround</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-primary-200 text-sm">Digital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">ISO</div>
                    <div className="text-primary-200 text-sm">Certified</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Survey Solution?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Every project is unique. Contact us to discuss your specific requirements and get a customized quote.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services