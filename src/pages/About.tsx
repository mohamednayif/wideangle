import React from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  Target, 
  Shield, 
  Clock, 
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We deliver accurate results using state-of-the-art equipment and proven methodologies.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our clients trust us to deliver consistent, high-quality results on time, every time.'
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'Our team of licensed professionals brings decades of combined experience to every project.'
    },
    {
      icon: Clock,
      title: 'Efficiency',
      description: 'We optimize our processes to deliver results quickly without compromising quality.'
    }
  ]

  const team = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'Principal Surveyor',
      experience: '15+ years',
      qualifications: 'Licensed Land Surveyor (UAE), BSc Surveying Engineering'
    },
    {
      name: 'Sarah Johnson',
      position: 'Senior Survey Technician',
      experience: '12+ years',
      qualifications: 'Certified Survey Technician, Diploma in Geomatics'
    },
    {
      name: 'Omar Hassan',
      position: 'CAD/GIS Specialist',
      experience: '8+ years',
      qualifications: 'MSc GIS, AutoCAD Certified Professional'
    },
    {
      name: 'Lisa Chen',
      position: 'Project Manager',
      experience: '10+ years',
      qualifications: 'PMP Certified, BSc Construction Management'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years in Business' },
    { number: '50+', label: 'Satisfied Clients' },
    { number: '99.9%', label: 'Accuracy Rate' }
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
              About Wide Angle Surveying Engineering Services LLC
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Your trusted partner for professional surveying and engineering services in the UAE since 2009
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading Surveying Excellence in the UAE
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, Wide Angle Surveying Engineering Services LLC has established itself as a premier provider 
                of surveying and engineering services across the United Arab Emirates. Our commitment to precision, 
                innovation, and client satisfaction has made us the go-to choice for developers, 
                architects, engineers, and property owners throughout the region.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With our headquarters in Dubai and operations across all seven emirates, we combine 
                local market knowledge with international best practices to deliver exceptional results 
                for projects of all scales and complexities.
              </p>
              
              <div className="space-y-4">
                {[
                  'Licensed and certified by UAE authorities',
                  'ISO 9001:2015 quality management certified',
                  'Advanced GPS/GNSS and UAV technology',
                  'Comprehensive insurance coverage',
                  '24/7 emergency survey services available'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
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
              <div className="bg-primary-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-gray-600">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to delivering exceptional surveying services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {member.experience}
                </p>
                <p className="text-xs text-gray-500">
                  {member.qualifications}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Certifications & Compliance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We maintain the highest standards through continuous certification and compliance 
                with UAE regulations and international best practices.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: 'UAE Licensed Surveyors',
                    description: 'All our principal surveyors are licensed by UAE authorities'
                  },
                  {
                    icon: Shield,
                    title: 'ISO 9001:2015 Certified',
                    description: 'Quality management system certification for consistent excellence'
                  },
                  {
                    icon: Globe,
                    title: 'Professional Memberships',
                    description: 'Active members of international surveying organizations'
                  }
                ].map((cert, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600">{cert.description}</p>
                    </div>
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
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  Service Areas
                </h3>
                <div className="space-y-4">
                  {[
                    'Dubai',
                    'Abu Dhabi',
                    'Sharjah',
                    'Ajman',
                    'Ras Al Khaimah',
                    'Fujairah',
                    'Umm Al Quwain'
                  ].map((emirate, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{emirate}</span>
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                    </div>
                  ))}
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
              Ready to Work with the Best?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Partner with Wide Angle Surveying Engineering Services LLC for your next project and experience the difference 
              that expertise and precision make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About