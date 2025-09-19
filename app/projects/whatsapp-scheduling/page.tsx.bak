"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Users, Target, Lightbulb, Palette, Code, CheckCircle, Clock } from "lucide-react"

export default function WhatsAppSchedulingCaseStudy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-green-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Prototype
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Adding a Message Scheduling Feature to WhatsApp Messenger</h1>
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
                  Users often need to send messages at specific times but may not be available to send them manually. This creates missed opportunities for timely communication, especially across different time zones or for important reminders.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  WhatsApp's existing interface prioritizes instant messaging, with no built-in functionality for scheduling messages, forcing users to rely on external apps or manual reminders.
                </p>
                <p className="text-lg text-gray-700">
                  The challenge was to integrate a scheduling feature seamlessly into WhatsApp's existing interface without disrupting the familiar user experience that billions of users rely on daily.
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
                  This project presented a unique opportunity to enhance WhatsApp's communication capabilities by adding thoughtful scheduling functionality that could improve users' ability to plan and manage their conversations.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  By enabling users to schedule messages, WhatsApp could address the growing need for asynchronous communication while maintaining its position as the world's leading messaging platform.
                </p>
                <p className="text-lg text-gray-700">
                  This was a chance to set a new standard for messaging apps by seamlessly blending instant and planned communication in a single, intuitive interface.
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
                  A seamlessly integrated scheduling feature that enhances WhatsApp without disrupting the user experience:
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Built an intuitive scheduling interface that integrates naturally with WhatsApp's existing message composition flow.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Designed discoverable scheduling controls that maintain WhatsApp's signature simplicity and ease of use.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Created reliable delivery systems with visual feedback to ensure users trust their scheduled messages will be sent.
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
                <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">User Research</h3>
                <p className="text-sm text-gray-600 mb-2">1 week</p>
                <div className="text-xs text-gray-500">
                  <p>User Interviews,</p>
                  <p>Usage Analysis,</p>
                  <p>Pain Point Mapping</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Target className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Competitive Analysis</h3>
                <p className="text-sm text-gray-600 mb-2">1 week</p>
                <div className="text-xs text-gray-500">
                  <p>Feature Benchmarking,</p>
                  <p>UX Pattern Analysis,</p>
                  <p>Best Practices</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Lightbulb className="w-8 h-8 text-teal-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Ideation</h3>
                <p className="text-sm text-gray-600 mb-2">1 week</p>
                <div className="text-xs text-gray-500">
                  <p>Brainstorming,</p>
                  <p>Concept Development</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">UX Designs</h3>
                <p className="text-sm text-gray-600 mb-2">2 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>User Flows</p>
                  <p>Wireframes</p>
                  <p>Prototype</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Visual Designs</h3>
                <p className="text-sm text-gray-600 mb-2">2 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>UI Integration</p>
                  <p>Interaction Design</p>
                  <p>Final Prototype</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Code className="w-8 h-8 text-teal-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Testing</h3>
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
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800">User Research</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl text-center">
                  <Target className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-emerald-800">Feature Strategy</h3>
                </div>
                <div className="bg-teal-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-bold text-teal-800">UX Design</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800">Interaction Design</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-emerald-800">UI Integration</h3>
                </div>
                <div className="bg-teal-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-bold text-teal-800">Prototyping</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800">User Testing</h3>
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
                    <h3 className="font-bold text-gray-900">Sketch</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Principle</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Code className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">InVision</h3>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Duration</h2>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <Clock className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">6 weeks</h3>
                  <p className="text-gray-600">From research to final feature design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Objectives */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Objectives</h2>
              <p className="text-xl text-gray-600">
                Key goals that guided the integration of scheduling functionality into WhatsApp's interface
              </p>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-1300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Seamless Integration</h4>
                <p className="text-gray-600">Integrate scheduling without disrupting existing user workflows and familiar interactions</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Intuitive Discovery</h4>
                <p className="text-gray-600">Make the feature easily discoverable through natural interactions and contextual cues</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold">3</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Cross-Platform Consistency</h4>
                <p className="text-gray-600">Ensure consistent experience across mobile, web, and desktop versions of WhatsApp</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Reliable Delivery</h4>
                <p className="text-gray-600">Guarantee message delivery at the scheduled time with clear status indicators</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">User Archetype Definition</h2>
              <p className="text-xl text-gray-600">
                Understanding our WhatsApp users through detailed personas and messaging behavior patterns
              </p>
            </div>

            <div
              className={`flex flex-col gap-8 transition-all duration-1000 delay-1700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className={`w-full transition-all duration-1000 delay-1800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/1.png"
                  alt="User Archetype 1 - Business Professionals"
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
                  alt="User Archetype 2 - Global Communicators"
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
                  alt="User Archetype 3 - Personal Organizers"
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
                  alt="User Archetype 4 - Social Coordinators"
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

        {/* Information Architecture */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Information Architecture</h2>
              <p className="text-xl text-gray-600">
                Structuring the feature's integration and navigation within WhatsApp's existing interface
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/Information Architecture.png"
                alt="WhatsApp Scheduling Feature Information Architecture"
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
              className={`text-center mb-12 transition-all duration-1000 delay-2400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Wireframes</h2>
              <p className="text-xl text-gray-600">
                Low-fidelity wireframes mapping out the feature's layout and user flow
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/Wireframes.png"
                alt="WhatsApp Scheduling Feature Wireframes"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/Wireframes.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* UI Design System/Foundations */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">UI Design System & Foundations</h2>
              <p className="text-xl text-gray-600">
                Comprehensive design system ensuring seamless integration with WhatsApp's existing interface
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/UI Design SystemFoundations.png"
                alt="WhatsApp Scheduling Feature UI Design System and Foundations"
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
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">UI Prototype</h2>
              <p className="text-xl text-gray-600">
                High-fidelity interactive prototype showcasing the final feature design and interactions
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/UI Prototype.png"
                alt="WhatsApp Scheduling Feature UI Prototype"
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
        <section className="py-16 px-6 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Results</h2>
            </div>

            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Message Scheduling Feature Successfully Designed</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-green-800 mb-2">95%</h4>
                    <p className="text-green-700">User adoption in testing</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-emerald-800 mb-2">88%</h4>
                    <p className="text-emerald-700">Found feature intuitive</p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-teal-800 mb-2">4.8/5</h4>
                    <p className="text-teal-700">User satisfaction rating</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`text-center transition-all duration-1000 delay-1600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <p className="text-xl text-gray-700 mb-8">View interactive prototype:</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-lg font-semibold"
              >
                <ExternalLink className="w-6 h-6" />
                WhatsApp Scheduling Feature Prototype
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
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </Link>
              <Link
                href="/projects/sa20-cricket-league"
                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
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