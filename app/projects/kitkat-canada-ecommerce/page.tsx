"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Users, Target, Lightbulb, Palette, Code, CheckCircle, Clock } from "lucide-react"

export default function KitKatCaseStudy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-red-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <a
            href="https://www.kitkat.ca/products"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Site
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-100">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">The Ultimate Break, Delivered</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-white">
        {/* The Challenge */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Challenge</h2>
              <div className="bg-red-50 p-8 rounded-2xl">
                <p className="text-lg text-gray-700 mb-6">
                  Nestlé Canada wanted to launch a bilingual  KitKat site with smooth e-commerce capabilities that meet local user expectations and provide an enjoyable shopping experience.
                </p>
              
              </div>
            </div>
          </div>
        </section>

        {/* The Opportunity */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Opportunity</h2>
              <div className="bg-yellow-50 p-8 rounded-2xl">
                <p className="text-lg text-gray-700 mb-6">
                  This presented an opportunity for me to design a digital shopping experience that connects with users,
                  helps increase sales in the Canadian market, and builds stronger loyalty to the KitKat brand through
                  a thoughtful and easy-to-use design.
                </p>
    
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">The Solution</h2>
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                Smooth and Enjoyable Shopping Journey
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Built a bilingual (French & English) e-commerce platform.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Clear and intuitive navigation to help users find products quickly
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Engaging visual design that reflects the KitKat brand and keeps users excited to shop.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Thinking Framework */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Process</h2>
            </div>

            <div
              className={`grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Users className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">UX Research</h3>
                <p className="text-sm text-gray-600 mb-2">2 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>Competitor Analysis</p>
                  <p>Market Research</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Target className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Ideation</h3>
                <p className="text-sm text-gray-600 mb-2">1 week</p>
            
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Lightbulb className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">User Journey Mapping</h3>
                <p className="text-sm text-gray-600 mb-2">1 week</p>
                <div className="text-xs text-gray-500">
                  <p>Brainstorming</p>
                  <p>Userflow</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Sitemap Development</h3>
                <p className="text-sm text-gray-600 mb-2">1 week</p>
                <div className="text-xs text-gray-500">
                  <p>Feature Prioritization</p>
                  <p>Sitemap</p>

                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">UX Wireframes</h3>
                <p className="text-sm text-gray-600 mb-2">2 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>Wireframes</p>
                  <p>Prototyping</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Code className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Testing and Iteration</h3>
                <p className="text-sm text-gray-600">1 week</p>
              </div>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">My Role</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-red-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-red-800">Market Research</h3>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl text-center">
                  <Target className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-orange-800">Competitor Analysis</h3>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-bold text-yellow-800">User Journey Mapping</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800">Sitemap</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-blue-800">Wireframes</h3>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-purple-800">Prototyping</h3>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-bold text-pink-800">Stakeholder Engagements</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tools & Project Duration */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Tools</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Palette className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Figma</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Miro</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Shopify</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Code className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Adobe Creative Suite</h3>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Duration</h2>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <Clock className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">2 months</h3>
                  <p className="text-gray-600">From research to wireframing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitor Analysis */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Competitor Analysis</h2>
              <p className="text-xl text-gray-600">
                First, I conducted a competitor analysis, examining confectionery websites
                through the lens of B2C advancements in the E-commerce web space. The focus was on
                product pages, features, emerging trends, and persuasive techniques competitors use to drive customer
                motivation and prompt action.

              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/COMPETITOR.png"
                alt="KitKat Canada E-commerce Competitor Analysis"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/COMPETITOR.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* Key E-commerce Features */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key E-commerce Journeys Prioritized</h2>
              {/* <p className="text-xl text-gray-600">
                Essential functionality that makes KitKat Canada's e-commerce experience seamless and engaging
              </p> */}
            </div>

            <div
              className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-1300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-bold">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Product Discovery and Browsing</h4>
                <p className="text-gray-600 text-sm">How users find and explore products, including search and navigation.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Cart and Checkout Process</h4>
                <p className="text-gray-600 text-sm">The steps users take to add items to the cart, review, and complete purchase.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold">3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Payment and Confirmation</h4>
                <p className="text-gray-600 text-sm">The experience of entering payment details, confirming orders, and receiving receipts.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Post-Purchase and Support​</h4>
                <p className="text-gray-600 text-sm">Order tracking, customer service interactions, and handling returns or issues.</p>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Flow */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">User Journey Flow</h2>
              <p className="text-xl text-gray-600">
                I mapped the user journey to ensure a smooth, intuitive flow from product
                discovery to purchase, minimizing friction and enhancing overall user satisfaction.
              </p>
            </div>

            <div
              className={`flex flex-col gap-8 transition-all duration-1000 delay-2400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className={`w-full transition-all duration-1000 delay-2500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/USER JOURNEY FLOW 1.png"
                  alt="KitKat Canada E-commerce User Journey Flow 1"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/USER JOURNEY FLOW 1.png', '_blank')}
                />
              </div>

              <div className={`w-full transition-all duration-1000 delay-2600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/USER JOURNEY  FLOW 2.png"
                  alt="KitKat Canada E-commerce User Journey Flow 2"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/USER JOURNEY  FLOW 2.png', '_blank')}
                />
              </div>
            </div>
          </div>
        </section>
 {/* Site Map */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h2>
              <p className="text-xl text-gray-600">
                The sitemap was structured to organize content logically and simplify navigation, ensuring 
                users can easily find and access key sections throughout the website.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/SITEMAP.png"
                alt="KitKat Canada E-commerce Sitemap"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/SITEMAP.png', '_blank')}
              />
            </div>
          </div>
        </section>

         {/* UX Wireframes */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">UX Wireframes</h2>
              <p className="text-xl text-gray-600">
               I created wireframes to define the foundational
               layout and functionality, focusing on clarity in user flow and strategic placement of elements.
              </p>
            </div>

            <div
              className={`flex flex-col gap-8 transition-all duration-1000 delay-2400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className={`w-full transition-all duration-1000 delay-2500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/WIREFRAME 1.png"
                  alt="KitKat Canada E-commerce Wireframe 1"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/WIREFRAME 1.png', '_blank')}
                />
              </div>

              <div className={`w-full transition-all duration-1000 delay-2600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/WIREFRAME 2.png"
                  alt="KitKat Canada E-commerce Wireframe 2"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/WIREFRAME 2.png', '_blank')}
                />
              </div>

              <div className={`w-full transition-all duration-1000 delay-2700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/WIREFRAME 3.png"
                  alt="KitKat Canada E-commerce Wireframe 3"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/WIREFRAME 3.png', '_blank')}
                />
              </div>
            </div>
          </div>
        </section>

       {/* Visual Designs */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Visual Designs</h2>
              <p className="text-xl text-gray-600">
                The visual design was created to reflect the 
                KitKat brand with a clean and appealing look, making the site easy to use and enjoyable for visitors.
              </p>
            </div>

            <div
              className={`flex flex-col gap-8 transition-all duration-1000 delay-2400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className={`w-full transition-all duration-1000 delay-2500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/VISUAL DESIGN 1.png"
                  alt="KitKat Canada E-commerce Visual Design 1"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/VISUAL DESIGN 1.png', '_blank')}
                />
              </div>

              <div className={`w-full transition-all duration-1000 delay-2600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/VISUAL DESIGN 2.png"
                  alt="KitKat Canada E-commerce Visual Design 2"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/VISUAL DESIGN 2.png', '_blank')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-6 bg-gradient-to-br from-red-50 to-yellow-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Testing Results</h2>
            </div>

            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6"> KitKat e-commerce site successfully set up and tested</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-red-800 mb-2">90%</h4>
                    <p className="text-red-700">Task completion rate above 90%, showing users can easily finish key actions</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-orange-800 mb-2">5%</h4>
                    <p className="text-orange-700">Task error rate below 5% to show ease of use</p>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-yellow-800 mb-2">85%</h4>
                    <p className="text-yellow-700">User satisfaction scores above 85%, indicating a positive user experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`text-center transition-all duration-1000 delay-1600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <p className="text-xl text-gray-700 mb-8">Link to live e-commerce site:</p>
              <a
                href="https://www.kitkat.ca/products"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-yellow-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-lg font-semibold"
              >
                <ExternalLink className="w-6 h-6" />
                KitKat Canada Store
              </a>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-6 bg-white border-t">
          <div className="max-w-6xl mx-auto">
            <div
              className={`flex justify-between items-center transition-all duration-1000 delay-1700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </Link>
              <Link
                href="/projects/cluck-and-track"
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                Next Project
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}