import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Compass, 
  Building, 
  Mountain, 
  Users, 
  Award, 
  Clock, 
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Land Surveying',
      description: 'Precise boundary surveys and property mapping for legal and development purposes.',
      features: ['Boundary Surveys', 'Topographic Mapping', 'ALTA/NSPS Surveys']
    },
    {
      icon: Building,
      title: 'Construction Surveying',
      description: 'Construction layout and monitoring services for residential and commercial projects.',
      features: ['Site Layout', 'Grade Checking', 'As-Built Surveys']
    },
    {
      icon: Mountain,
      title: 'Topographic Surveying',
      description: 'Detailed terrain mapping and elevation data collection for engineering projects.',
      features: ['Contour Mapping', 'Digital Terrain Models', '3D Modeling']
    },
    {
      icon: Compass,
      title: 'Engineering Surveys',
      description: 'Specialized surveys for infrastructure and engineering applications.',
      features: ['Route Surveys', 'Utility Mapping', 'Monitoring Surveys']
    }
  ]

  const stats = [
    { number: '2025', label: 'Established' },
    { number: '15+', label: 'Years Team Experience' },
    { number: '100%', label: 'Precision Focused' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Surveying
                <span className="block text-gray-200">Engineering Services in UAE</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                Wide Angle Surveying Engineering Services LLC provides precision surveying solutions with cutting-edge technology for land development, 
                construction, and engineering projects across the United Arab Emirates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-lg">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-secondary text-lg border-white text-white hover:bg-white hover:text-primary-900">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-white/20 to-transparent"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Surveying Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive surveying solutions using the latest technology and industry best practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Wide Angle Surveying Engineering Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2025, Wide Angle Surveying Engineering Services LLC brings together seasoned professionals with over 15 years of combined expertise 
                to deliver cutting-edge surveying and engineering services with international standards.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: 'Licensed & Certified',
                    description: 'Fully licensed surveyors with UAE professional certifications'
                  },
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Experienced professionals with local market knowledge'
                  },
                  {
                    icon: Clock,
                    title: 'Fast Turnaround',
                    description: 'Quick project completion without compromising quality'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-primary-50 rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                  <Compass className="w-24 h-24 text-white" />
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our expert team for a free consultation and quote. 
              We're here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home