import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Ship, Truck, Package, Clock, Shield, Target, Users, Award, CheckCircle } from 'lucide-react';
const About = () => {
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-navy text-white px-6 mt-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-50">
                About <span className="text-slate-50">GGL</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-slate-50">
                Singapore's premier logistics company, offering specialized expertise across warehousing, freight forwarding, and transportation
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  <span className="text-[navy-blue] text-brand-navy">About Us</span>
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    GGL is a trusted global leader in LCL (Less-than-Container Load) consolidation. With a robust presence across
                    <strong> North America, the UK, the Middle East, the Indian Subcontinent, Southeast Asia, and the Far East,</strong> we offer streamlined groupage services backed by strong customer support and competitive pricing.
                  </p>
                  <p>
                    We are strategically positioned in major transshipment hubs like
                    <strong> Singapore, Malaysia, Sri Lanka, and Dubai,</strong> GGL operates <strong>direct weekly sailings</strong> to key global ports.
                  </p>
                  <p>
                    One of our standout services is <strong>neutral LCL consolidation</strong>, designed for freight forwarders and NVOCCs who require confidential and competitive solutions.
                  </p>
                  <p>
                    Our advanced technology platform offers end-to-end shipment visibility. GGL stands as a dependable partner committed to neutrality, excellence, and customer success.
                  </p>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img alt="GGL Global Logistics" className="w-full h-[600px] object-cover" src="/lovable-uploads/41795fb5-562d-45d1-a8d3-f26724bc079b.png" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Network</h4>
                      <p className="text-sm text-gray-600">50+ countries worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose GGL Cards Section */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Logistics Services */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Logistics Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[{
                title: "Air & Ocean Freight (LCL & FCL)",
                description: "Complete import and export solutions for all cargo types.",
                icon: Ship
              }, {
                title: "Dangerous Goods Handling",
                description: "Specialized expertise in hazardous materials transportation.",
                icon: Shield
              }, {
                title: "Warehousing, Distribution & 3PL",
                description: "Secure storage and comprehensive third-party logistics solutions.",
                icon: Package
              }, {
                title: "Domestic & Cross-Border Land Transport",
                description: "Efficient ground transportation across regions.",
                icon: Truck
              }].map(({
                title,
                description,
                icon: Icon
              }, i) => <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Icon className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                        <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Who We Serve */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Who We Serve (Neutral Consolidation)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[{
                title: "Freight Forwarders",
                description: "Trusted partners for global shipping solutions.",
                icon: Globe
              }, {
                title: "Custom Brokers",
                description: "Reliable consolidation services for customs clearance.",
                icon: CheckCircle
              }, {
                title: "NVOCCs",
                description: "Neutral support for non-vessel operating common carriers.",
                icon: Users
              }, {
                title: "3PL Providers",
                description: "Comprehensive logistics partnership for third-party providers.",
                icon: Target
              }].map(({
                title,
                description,
                icon: Icon
              }, i) => <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Icon className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
                        <p className="text-gray-600 text-sm">{description}</p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;