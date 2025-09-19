"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Users, Target, Lightbulb, Palette, Code, CheckCircle, Clock } from "lucide-react"

export default function SA20CaseStudy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <a
            href="https://www.sa20.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Site
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Empowering Cricket Fans to Connect Deeply with their Favorite League</h1>
            {/* <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Betway SA20 is a Twenty20 (T20) franchise cricket tournament in South Africa, organized by Cricket South
              Africa (CSA).
            </p> */}
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
                  The Betway SA20 league's digital presence was scattered across disconnected platforms, creating a significant barrier for fans.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Supporters were forced to navigate multiple outdated platforms and apps to purchase tickets, access player statistics, and follow live matches.
                </p>
                <p className="text-lg text-gray-700">
                  This friction diluted fan engagement and represented a critical missed opportunity to build a unified, loyal community and drive sustainable revenue for the league.
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
                  This was a unique opportunity to design an entire sports ecosystem, integrating ticketing, live match updates, and player insights to resolve the fragmented experience cricket fans previously faced.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  At the same time, it was a chance for SA20 to strengthen fan engagement, build brand loyalty, and deliver a digital home that brings fans closer to the league.
                </p>
                {/* <p className="text-lg text-gray-700">
                  This site was an opportunity for SA20 to build the foundation of their digital experience.
                </p> */}
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
                  A digital experience that matches the stadium atmosphere:
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Built a responsive web app with user login for a personal fan experience.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />Design a vibrant yet clean UI that balances the brand’s bright colors with easy navigation.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Created a reusable design system aligned with brand guidelines for consistent, scalable future updates.
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
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">CX Discovery</h3>
                <p className="text-sm text-gray-600 mb-2">2 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>Stakeholder Interviews,</p>
                  <p>CX Research,</p>
                  <p>Persona Mapping</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Target className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">UX Research</h3>
                <p className="text-sm text-gray-600 mb-2">2 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>Competitor Analysis,</p>
                  <p>Heuristic Evaluation,</p>
                  <p>Information Architecture</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Lightbulb className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Ideation</h3>
                <p className="text-sm text-gray-600 mb-2">1 week</p>
                <div className="text-xs text-gray-500">
                  <p>Brainstorming,</p>
                  <p>Feature Prioritization</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">UX Designs</h3>
                <p className="text-sm text-gray-600 mb-2">2 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>UX Wireframes</p>
                  <p>Prototype</p>
                  <p>Iteration</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Visual Designs</h3>
                <p className="text-sm text-gray-600 mb-2">4 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>Design System</p>
                  <p>UI Wireframes</p>
                  <p>Prototype</p>
                  <p>Iteration</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Code className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Development</h3>
                <p className="text-sm text-gray-600">4 weeks</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">My Role</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-orange-800">Stakeholder Engagements</h3>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl text-center">
                  <Target className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-bold text-pink-800">Research</h3>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-purple-800">IA Development</h3>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-blue-800">UX Wireframes </h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800">UI Design Support</h3>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-bold text-yellow-800">Testing</h3>
                </div>
                <div className="bg-red-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-red-800">Client Demos</h3>
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
                    <h3 className="font-bold text-gray-900">PowerPoint</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Code className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Jira</h3>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Duration</h2>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <Clock className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">4 months</h3>
                  <p className="text-gray-600">From discovery to development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stakeholder Interviews */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Stakeholder Interviews</h2>
              <p className="text-lg text-gray-700 mb-8">
As part of the discovery phase, I interviewed key stakeholders to uncover business goals and gather everything needed for the new site’s success.              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Who was interviewed:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Project Sponsor
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Head of SA20 Operations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Head of Marketing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Head of Media
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Topics covered:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      Stakeholder expectations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      Long-term vision and objectives
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      Key functionalities and features
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stakeholder Insights */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key stakeholder insights</h2>
            </div>

            <div
              className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-1400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Simple</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>
                    • The current site has bold colors and a bold font. Lighten the site while still making use of the
                    colors
                  </li>
                  <li>• Make use of white spaces to lighten the site</li>
                  <li>• Fans want a clean, modern, minimal design</li>
                  <li>• Content should be clear and easy to read.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4">Accessible</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• The new site must be easy to navigate and find key documents</li>
                  <li>• The new site should speak to the social cricket fan as well as the advanced cricket fan</li>
                  <li>• Make important articles more visible and easily accessible</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-purple-800 mb-4">Engaging</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• The new site must be cool and appealing to a younger audience</li>
                  <li>• Incorporate alternative methods of media such as video and imagery</li>
                  <li>• Make people want to visit the site despite their level of knowledge</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-orange-800 mb-4">Future Outlook</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Incorporation of gamification through fantasy league</li>
                  <li>• Ability to use site as a means to engage with fans and strengthen community</li>
                  <li>• Live streaming of auctions, dismissals and press conferences</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Product Requirements */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Product requirements</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-blue-800">Relevant & Up to Date Content</h3>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-green-800">In,Pre and Off Season Communication</h3>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-purple-800">Player and Team Data & Stats</h3>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-orange-800">Commercial Delivery</h3>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-pink-800">Data Capturing</h3>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-yellow-800">Housing of SA20 Tournament Information</h3>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-red-800">Mobile Friendly</h3>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-indigo-800">Housing of Regulatory Frameworks</h3>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-teal-800">Easy to View Campaigns</h3>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-cyan-800">Ticketing</h3>
                </div>
                <div className="bg-lime-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-lime-800">Video & Visual Content</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Archetype Definition */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Archetype definition</h2>
              <p className="text-xl text-gray-600">
                Understanding our target audience through detailed user personas and behavior patterns
              </p>
            </div>

            <div
              className={`flex flex-col gap-8 transition-all duration-1000 delay-1700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className={`w-full transition-all duration-1000 delay-1800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/1.png"
                  alt="Archetype 1"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  priority
                  onClick={() => window.open('/1.png', '_blank')}
                />
              </div>

              <div className={`w-full transition-all duration-1000 delay-1900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/2.png"
                  alt="Archetype 2"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/2.png', '_blank')}
                />
              </div>

              <div className={`w-full transition-all duration-1000 delay-2000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/3.png"
                  alt="Archetype 3"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/3.png', '_blank')}
                />
              </div>

              <div className={`w-full transition-all duration-1000 delay-2100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/4.png"
                  alt="Archetype 4"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                  quality={100}
                  onClick={() => window.open('/4.png', '_blank')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key KPIs & Metrics */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Key KPIs & metrics that will be used to measure the success of the new site
              </h2>
            </div>

            <div
              className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-1900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Simplicity</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-blue-700 mb-2">You need to account for</h4>
                    <ul className="text-blue-600 text-sm space-y-1">
                      <li>• How long it takes a fan to complete a certain task</li>
                      <li>• How many errors are made before completing a task</li>
                      <li>• If key objectives and messages are communicated</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-700 mb-2">How to measure</h4>
                    <p className="text-blue-600 text-sm">Task completion time, error rates, message comprehension</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Accessibility</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">You need to account for</h4>
                    <ul className="text-green-600 text-sm space-y-1">
                      <li>• How many users can access the site on specific devices</li>
                      <li>• Can people understand the language used</li>
                      <li>• How easy it is to use and understand the contents</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700 mb-2">How to measure</h4>
                    <p className="text-green-600 text-sm">Device compatibility, language clarity, usability scores</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Engagement</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-purple-700 mb-2">You need to account for</h4>
                    <ul className="text-purple-600 text-sm space-y-1">
                      <li>• How long it takes until fans leave the website</li>
                      <li>• How many users leave before completing a task</li>
                      <li>• How many users return to the website</li>
                      <li>• Are people engaging with the content</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-700 mb-2">How to measure</h4>
                    <p className="text-purple-600 text-sm">
                      Session duration, bounce rate, return visits, engagement metrics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitor Analysis */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Competitor analysis</h2>
              <p className="text-xl text-gray-600">
                Analyzing competitor websites to establish benchmarks and identify opportunities
              </p>
            </div>

            <div
              className={`mb-12 transition-all duration-1000 delay-2100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What I did:</h3>
                <p className="text-gray-700 mb-6">
                I analyzed key sports websites with a focus on the latest advancements in online experiences. This included an in-depth review of each competitor’s new features, emerging trends, and persuasive techniques used to influence customer motivation.

                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Key Pages Analyzed:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Homepage</li>
                      <li>• Teams</li>
                      <li>• Match Center</li>
                      <li>• Statistics and Information</li>
                      <li>• Static Content</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Competitors Analyzed:</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Indian Premier League</li>
                      <li>• England and Wales Cricket Board</li>
                      <li>• Board of Control for Cricket in India</li>
                      <li>• The Hundrend</li>
                      <li>• Women's Premier League</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Image
                src="/Competitor Analysis.png"
                alt="Screenshot of the competitor analysis process on Miro board"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg mb-4 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/Competitor Analysis.png', '_blank')}
              />
              <p className="text-center text-gray-600">
                Screenshot of the process
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
              <p className="text-center text-gray-600 mb-8">
                These are the key features I extracted from the competitor analysis:
              </p>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Social Media Integration</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Personalization</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Countdown Timers on Ticket Sales and Fixtures</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Fan Polls to Rank Players or Teams</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-pink-600 font-bold">5</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Showcasing Sponsorships</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-yellow-600 font-bold">6</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Accessibility Principles</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-red-600 font-bold">7</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Support and Educational Content</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-indigo-600 font-bold">8</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Syncing Fixtures to Calendar</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-teal-600 font-bold">9</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Easy Navigation</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-cyan-600 font-bold">10</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Detailed Player Stats</h4>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lime-600 font-bold">11</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Fan Toolkit</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information Architecture */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Information Architecture</h2>
              <p className="text-xl text-gray-600">
                I developed an Information Architecture, a blueprint for the SA20 website's structure. The purpose was to define how content
                is organized, categorized, and linked together. By sorting this out first, I laid a solid foundation
                for the wireframes, ensuring a logical and user-friendly flow.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/Information Architecture.png"
                alt="SA20 Website Information Architecture Diagram"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/Information Architecture.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* Wireframes */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">UX Wireframes</h2>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-12 mb-8 transition-all duration-1000 delay-2600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              {/* <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UX prototype link (Web):</h3>
                <p className="text-blue-600 text-sm break-all">
                  https://www.figma.com/proto/CJcolI2NfbEHybPh4blPBx/UX-Designs?node-id=1-1026&t=PEzmlHwD7taPFZ1M-1
                </p>
              </div> */}
              {/* <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UX prototype link (Mobile):</h3>
                <p className="text-blue-600 text-sm break-all">
                  https://www.figma.com/proto/CJcolI2NfbEHybPh4blPBx/UX-Designs?node-id=31-35199&t=6YZ5xByxJLRWoFaW-1
                </p>
              </div> */}
            </div>

            <div
              className={`transition-all duration-1000 delay-2700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/Wireframes.png"
                alt="SA20 UX Wireframes showing desktop and mobile layouts"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/Wireframes.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* How did I implement our findings */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                This is how I implemented the findings in the designs:
              </h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-2900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg shadow-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Page</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Simplicity</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Personalization</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Engagement</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Help & Documentation</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Credibility</th>
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Commercial Delivery</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-bold text-gray-900">Homepage</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • New site is clean and uncluttered
                        <br />• Nav bar with clear hierarchy
                        <br />• Quick links to important pages
                        <br />• Search feature
                      
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Choose your favorite team for personalized content
                        <br />• Login/Register feature
                        <br />• Newsletter subscription
                        <br />• Sync fixtures to calendar
                        <br />• Cookies
                        
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Social Media Integration
                        <br />• Featured Upcoming Matches
                        <br />• Alternative Media eg. Videos
                        <br />• Social Shares
                        <br />• Polls and countdown Timers
                        <br />• Fan Toolkit
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Dedicated contact page
                        <br />• Contact forms
                        <br />• FAQs
                        <br />• Policies and guidelines
                        <br />• Regulatory documents
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                     Sponsorships
                        <br />• Player images
                        <br />• Our teams
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Ticket sales
                        <br />• Google ads
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-bold text-gray-900">Match Centre</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Breadcrumb navigation
                        <br />• Quick links to subpages
                        <br />• Advanced match filters
                        <br />• Clear match details
                        <br />• Result tables
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">• Cookies</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Squad
                        <br />• Commentary
                        <br />• Ticket sales
                        <br />• Fixtures and countdown timers
                        <br />• Scorecard
                        <br />• Match highlights
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        
                        <br />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Player images
                        <br />• Team logos
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">• Ticket Sales</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-gray-900">Stats</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Breadcrumb navigation
                        <br />• Quick links to subpages
                        <br />• Tables
                        <br />• Filters
                        <br />• Detailed player stats
                        <br />• Use of grids
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700"></td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Top perfoming players
                        <br />• Engaging CTAs
                        <br />• Social shares
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700"></td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Player images
                        <br />• Team logos
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                         • Ticket Sales
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-bold text-gray-900">Teams</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Tables
                        <br />• Detailed player stats
                        <br />• Use of grids
                        <br />• Teams landing page
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700"></td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Player Profiles
                        <br />• Team Social Links
                        <br />• Trophies won/ Awards
                        <br />• Fixtures and Results
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700"></td>
                      <td className="px-6 py-4 text-sm text-gray-700">• Team logos</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                         • Ticket Sales
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-gray-900">About</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Breadcrumb navigation
                        <br />• Quick links to subpages
                        <br />• Who we are
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700"></td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • SA20 Vibe
                        <br />• Gallery
                        <br />• Videos
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700"></td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Team logos
                        <br />• Franchises
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                          • Ticket Sales
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-bold text-gray-900">News</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        • Breadcrumb navigation
                        <br />• Grids
                        <br />• Minimalistic
                        <br />• Whitespace
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                          • Personilized News
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                         • Social shares
                        <br />• Read time
                        <br />• Categories
                        <br />• Featured articles
                        <br />• Progressive loading
                        <br />• Hover animations
                        <br />• Related content
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700"></td>
                      <td className="px-6 py-4 text-sm text-gray-700"></td>
                      <td className="px-6 py-4 text-sm text-gray-700"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* UI Design System/Foundations */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-3000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">UI Design System/Foundations</h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-3100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/UI Design SystemFoundations.png"
                alt="SA20 UI Design System showing components, colors, and typography"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/UI Design SystemFoundations.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* UI Prototype */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-3200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">UI Screens</h2>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-12 mb-8 transition-all duration-1000 delay-3300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              {/* <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UI prototype link (Web):</h3>
                <p className="text-blue-600 text-sm break-all">
                  https://www.figma.com/proto/PJFcmUS17PpNxCEHJbRvSh/UI?node-id=1-9616&t=04AwT9WA6udtr4p6-1
                </p>
              </div> */}
              {/* <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UI prototype link (Mobile):</h3>
                <p className="text-blue-600 text-sm break-all">
                  https://www.figma.com/proto/PJFcmUS17PpNxCEHJbRvSh/UI?node-id=1-105267&t=zW2xBPgUwfZCocOq-1
                </p>
              </div> */}
            </div>

            <div
              className={`transition-all duration-1000 delay-3400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/UI Prototype.png"
                alt="SA20 UI Prototype showing high fidelity desktop and mobile designs"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/UI Prototype.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-3500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Results</h2>
            </div>

            <div
              className={`transition-all duration-1000 delay-3600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/Reults.png"
                alt="SA20 project results and outcomes"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/Reults.png', '_blank')}
              />
            </div>

            <div
              className={`text-center transition-all duration-1000 delay-3700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <p className="text-xl text-gray-700 mb-8">Link to live site:</p>
              <a
                href="https://www.sa20.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-lg font-semibold"
              >
                <ExternalLink className="w-6 h-6" />
                https://www.sa20.co.za/
              </a>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-6 bg-white border-t">
          <div className="max-w-6xl mx-auto">
            <div
              className={`flex justify-between items-center transition-all duration-1000 delay-3800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </Link>
              <Link
                href="/projects/bcx-onecx-salesforce"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
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
