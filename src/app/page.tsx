"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    {
      title: "Commercial Coatings",
      description:
        "Expert commercial paint and coatings for businesses, industrial facilities, and large-scale projects. Minimize downtime with our efficient team.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      featured: true,
    },
    {
      title: "Industrial Painting",
      description:
        "Specialized coatings for warehouses, manufacturing facilities, and industrial equipment. Protective finishes that last.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      featured: true,
    },
    {
      title: "Interior Painting",
      description:
        "Transform your living spaces with our expert interior painting. From single rooms to whole-home makeovers, we deliver flawless finishes.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Exterior Painting",
      description:
        "Protect and beautify your home's exterior. We use premium weather-resistant paints designed for Alabama's climate.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Specialty Coatings",
      description:
        "Epoxy floors, anti-corrosion coatings, fireproofing, and specialty finishes for demanding environments.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Color Consultation",
      description:
        "Not sure which colors to choose? Our expert color consultation helps you find the perfect palette for your space.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Decatur, AL",
      text: "AmeriPro Painting transformed our dated living room into a modern, beautiful space. Erica and her team were professional, punctual, and the attention to detail was incredible!",
      rating: 5,
    },
    {
      name: "James & Linda T.",
      location: "Huntsville, AL",
      text: "We hired AmeriPro for our entire home exterior. The crew was respectful of our property and the results exceeded our expectations. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mike R.",
      location: "Madison, AL",
      text: "As a business owner, I appreciated their flexibility in working around our schedule. The office looks amazing and they finished ahead of schedule.",
      rating: 5,
    },
  ];

  const serviceAreas = [
    "Decatur",
    "Huntsville",
    "Madison",
    "Athens",
    "Laceys Spring",
    "Morgan County",
    "Limestone County",
    "Madison County",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-[#8b2635]">
                  AmeriPro
                </span>
                <span className="font-display text-sm font-semibold text-[#2d6a4f] -mt-1 tracking-widest">
                  PAINTING
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#8b2635] font-medium transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#8b2635] font-medium transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#8b2635] font-medium transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#8b2635] font-medium transition-colors">
                Contact
              </a>
              <a
                href="tel:256-606-3109"
                className="btn-primary text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (256) 606-3109
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-[#8b2635]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-700 hover:text-[#8b2635] font-medium py-2">
                Services
              </a>
              <a href="#about" className="block text-gray-700 hover:text-[#8b2635] font-medium py-2">
                About
              </a>
              <a href="#testimonials" className="block text-gray-700 hover:text-[#8b2635] font-medium py-2">
                Testimonials
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-[#8b2635] font-medium py-2">
                Contact
              </a>
              <a
                href="tel:256-606-3109"
                className="btn-primary text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 w-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (256) 606-3109
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80"
            alt="Professional painting"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 cert-badge px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Commercial Paint &amp; Coatings Experts
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              North Alabama&apos;s
              <span className="text-[#2d6a4f]"> Commercial Painting </span>
              Professionals
            </h1>

            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              From industrial facilities to residential homes, AmeriPro Painting delivers exceptional
              craftsmanship and attention to detail. Woman-owned and serving North Alabama since 2016.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-secondary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2"
              >
                Get Free Estimate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:256-606-3109"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (256) 606-3109
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#2d6a4f]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#2d6a4f]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>9+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#2d6a4f]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Woman-Owned Business</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Billboard Showcase */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[#2d6a4f] font-semibold uppercase tracking-wider">As Seen On</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                Rocket City&apos;s Billboard
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                You may have spotted us on the digital billboard near Toyota Field, home of the
                Rocket City Trash Pandas. We&apos;re proud to serve the Huntsville-Decatur metro area
                with professional commercial and residential painting services.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#8b2635] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Commercial Experts
                </span>
                <span className="bg-[#2d6a4f] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Coatings Specialists
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="billboard-glow rounded-xl overflow-hidden">
                <Image
                  src="/1000021977.jpg"
                  alt="AmeriPro Painting Billboard at night"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2d6a4f] font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="font-display text-4xl font-bold text-[#8b2635] mt-2 mb-4">
              Commercial &amp; Residential Services
            </h2>
            <div className="brush-accent w-24 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From industrial coatings to home makeovers, we provide comprehensive painting
              solutions for businesses and homeowners throughout North Alabama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card bg-white rounded-2xl p-8 shadow-lg border ${
                  service.featured ? "border-[#8b2635] border-2" : "border-gray-100"
                }`}
              >
                {service.featured && (
                  <span className="inline-block bg-[#8b2635] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    SPECIALTY
                  </span>
                )}
                <div className="text-[#8b2635] mb-4">{service.icon}</div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/1000021976.jpg"
                  alt="AmeriPro team at work"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#2d6a4f]/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#8b2635]/10 rounded-2xl -z-10" />

              {/* Stats card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 z-20">
                <div className="text-4xl font-bold text-[#8b2635] font-display">9+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>

            <div>
              <span className="text-[#2d6a4f] font-semibold uppercase tracking-wider">About AmeriPro</span>
              <h2 className="font-display text-4xl font-bold text-[#8b2635] mt-2 mb-6">
                Woman-Owned Excellence in Every Brushstroke
              </h2>
              <div className="brush-accent w-24 mb-6" />

              <p className="text-gray-600 text-lg mb-6">
                Founded in 2016 by Erica Starwas, AmeriPro Painting has grown from a small local operation
                to one of North Alabama&apos;s most trusted painting contractors. As a certified Woman-Owned
                Small Business (WOSB), we specialize in commercial paint and coatings.
              </p>

              <p className="text-gray-600 text-lg mb-8">
                Based in Laceys Spring and serving the greater Decatur-Huntsville metropolitan area,
                our team of skilled professionals is committed to delivering exceptional results that
                exceed expectations. We treat every home and business as if it were our own.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#8b2635]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#8b2635]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Guarantee</h4>
                    <p className="text-gray-600 text-sm">100% satisfaction on every project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#8b2635]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#8b2635]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">On-Time Completion</h4>
                    <p className="text-gray-600 text-sm">We respect your schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#8b2635]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#8b2635]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Skilled, professional painters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[#8b2635]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#8b2635]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Premium Coatings</h4>
                    <p className="text-gray-600 text-sm">Commercial-grade materials</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3">
                <span className="cert-badge px-4 py-2 rounded-full text-sm font-semibold">
                  WOSB Certified
                </span>
                <span className="bg-[#8b2635] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  SAM Registered
                </span>
                <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Fully Insured
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-[#8b2635]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Proudly Serving North Alabama
            </h3>
            <p className="text-red-100">Quality painting services throughout the region</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium border border-white/20 hover:bg-white/20 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2d6a4f] font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-4xl font-bold text-[#8b2635] mt-2 mb-4">
              What Our Clients Say
            </h2>
            <div className="brush-accent w-24 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-xl p-8 shadow-lg">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#8b2635]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#2d6a4f] font-semibold uppercase tracking-wider">Get In Touch</span>
              <h2 className="font-display text-4xl font-bold text-[#8b2635] mt-2 mb-6">
                Ready to Transform Your Space?
              </h2>
              <div className="brush-accent w-24 mb-6" />
              <p className="text-gray-600 text-lg mb-8">
                Contact us today for a free, no-obligation estimate. We&apos;ll discuss your project,
                answer your questions, and provide a detailed quote tailored to your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#8b2635] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Phone</h4>
                    <a href="tel:256-606-3109" className="text-gray-600 hover:text-[#8b2635] text-lg transition-colors">
                      (256) 606-3109
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#8b2635] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Location</h4>
                    <p className="text-gray-600">
                      482 Airport Rd<br />
                      Laceys Spring, AL 35754
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#8b2635] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: By Appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-bold text-[#8b2635] mb-6">
                Request a Free Estimate
              </h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8b2635] focus:border-transparent transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8b2635] focus:border-transparent transition-all"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8b2635] focus:border-transparent transition-all"
                      placeholder="(256) 555-0123"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8b2635] focus:border-transparent transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="commercial">Commercial Coatings</option>
                    <option value="industrial">Industrial Painting</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="specialty">Specialty Coatings</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8b2635] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-white py-4 rounded-lg font-bold text-lg"
                >
                  Submit Request
                </button>
                <p className="text-sm text-gray-500 text-center">
                  We&apos;ll respond within 24 business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex flex-col mb-4">
                <span className="font-display text-3xl font-bold text-[#8b2635]">AmeriPro</span>
                <span className="font-display text-lg font-semibold text-[#2d6a4f] tracking-widest">PAINTING</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                North Alabama&apos;s commercial paint and coatings experts. Woman-owned and locally operated
                since 2016, delivering exceptional quality on every project.
              </p>
              <div className="flex items-center gap-2 text-[#2d6a4f]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Woman-Owned Small Business</span>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-[#8b2635] transition-colors">Commercial Coatings</a></li>
                <li><a href="#services" className="hover:text-[#8b2635] transition-colors">Industrial Painting</a></li>
                <li><a href="#services" className="hover:text-[#8b2635] transition-colors">Interior Painting</a></li>
                <li><a href="#services" className="hover:text-[#8b2635] transition-colors">Exterior Painting</a></li>
                <li><a href="#services" className="hover:text-[#8b2635] transition-colors">Specialty Coatings</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="tel:256-606-3109" className="hover:text-[#8b2635] transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (256) 606-3109
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    482 Airport Rd<br />
                    Laceys Spring, AL 35754
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="section-divider my-10" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} AmeriPro Painting. All rights reserved.</p>
            <p>Serving Decatur, Huntsville, Madison &amp; North Alabama</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
