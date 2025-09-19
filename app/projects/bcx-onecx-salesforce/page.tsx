"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Users, Target, Lightbulb, Palette, Code, CheckCircle, Clock } from "lucide-react"

export default function BCXCaseStudy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Transforming Client Engagement Through a Unified Digital Experience</h1>
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
                  BCX, a South African based information and communication technology company, wanted to reinvent their customer experience and the way their customers were being served.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The existing customer service model was fragmented, with clients and account managers struggling to communicate effectively, handle admin-intensive tasks, and track account-specific actions in real-time.
                </p>
                <p className="text-lg text-gray-700">
                  This disconnected approach was creating friction in the customer experience and preventing BCX from delivering the seamless, professional service their clients deserved.
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
                  This project presented a unique opportunity to design a B2B customer experience platform that would bridge the gap between BCX and their clients.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  By creating a unified digital experience, we could transform how account managers and customers interact, streamline administrative processes, and provide real-time visibility into account activities.
                </p>
                <p className="text-lg text-gray-700">
                  This was BCX's chance to establish themselves as a technology leader in customer experience within the South African market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">My Role</h2>
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  After launching MVP1, a web-based platform, BCX sought to extend the experience by developing a mobile app (MVP2).
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    As the UX designer, my role was to lead UX design specifically for the mobile app and new feature set
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Ensure consistency and continuity between web and mobile experiences without overwhelming users.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    Expand the platform with new features addressing evolving pain points identified post-MVP1.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Design Process</h2>
            </div>

            <div
              className={`grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">MVP2 Kickoff & Context Review</h3>
                {/* <p className="text-sm text-gray-600 mb-2">2 weeks</p> */}
                <div className="text-xs text-gray-500">
                  <p>Reviewed existing MVP1 platform and aligned with stakeholders on mobile app goals and priorities.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Target className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">UX Research & Best Practices</h3>
                {/* <p className="text-sm text-gray-600 mb-2">2 weeks</p> */}
                <div className="text-xs text-gray-500">
                  <p>Conducted desktop research on UX principles and mobile interface best practices to inform design decisions.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Lightbulb className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Feature Prioritization & Mobile Adaptation</h3>
                {/* <p className="text-sm text-gray-600 mb-2">1 week</p> */}
                <div className="text-xs text-gray-500">
                  <p>Selected key features to include and adapted workflows for mobile usability.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Userflows & Wireframing</h3>
                {/* <p className="text-sm text-gray-600 mb-2">3 weeks</p> */}
                <div className="text-xs text-gray-500">
                  <p>Created wireframes focusing on simplified navigation and task flows.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Prototyping & Testing</h3>
                {/* <p className="text-sm text-gray-600 mb-2">4 weeks</p> */}
                <div className="text-xs text-gray-500">
                  <p>Built interactive prototypes and iterated based on user feedback.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Code className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Developer Collaboration & Agile Handoff</h3>
                {/* <p className="text-sm text-gray-600">6 weeks</p> */}
                 <div className="text-xs text-gray-500">
                  <p>Provided specs and collaborated closely during agile development.</p>
                </div>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Deliverables</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-blue-800">Research Documentation</h3>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl text-center">
                  <Target className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-purple-800">Process Flows</h3>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-bold text-pink-800">Wireframes</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800">Interactive Prototype</h3>
                </div>
                <div className="bg-yellow-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-bold text-yellow-800">UI Screens</h3>
                </div>
                <div className="bg-indigo-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-bold text-indigo-800">Usability Test Reports</h3>
                </div>
                <div className="bg-red-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-red-800">Design System Extensions</h3>
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
                    <h3 className="font-bold text-gray-900">Figma and Miro</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Microsoft Visio</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Salesforce</h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Code className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Azure DevOps</h3>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Duration</h2>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <Clock className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">6 months</h3>
                  <p className="text-gray-600">From discovery to dev handover</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Homepage Dashboard</h2>
              <p className="text-xl text-gray-600">
                 I designed the mobile dashboard which prioritize clarity and efficiency, enabling users to effortlessly
                 monitor key activities and take quick action on critical requests.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/homepage dashboard.png"
                alt="BCX OneCX Platform Homepage Dashboard"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/homepage dashboard.png', '_blank')}
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">More Menu</h2>
              <p className="text-xl text-gray-600">
                 A full page MORE menu for less frequently used options to still be accessible
                 but not cluttering the main interface.
              </p>
            </div>

            {/* <div
              className={`grid md:grid-cols-2 gap-12 mb-8 transition-all duration-1000 delay-2600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UX prototype link (Web):</h3>
                <p className="text-blue-600 text-sm break-all">
                  https://www.figma.com/proto/bcx-onecx-platform
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UX prototype link (Mobile):</h3>
                <p className="text-blue-600 text-sm break-all">
                  https://www.figma.com/proto/bcx-onecx-mobile
                </p>
              </div>
            </div> */}

            <div
              className={`transition-all duration-1000 delay-2700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/more menu.png"
                alt="BCX OneCX More Menu"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/more menu.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* UI Design System/Foundations */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-3000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Connexion Hub</h2>
              <p className="text-xl text-gray-600">
                 I created a Connexion Hub for external clients to easily log CX Requests of any type,
                 while providing BCX with a clear, organized dashboard to review and efficiently resolve client issues.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-3100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/Connexion hub.png"
                alt="BCX OneCX Connexion Hub"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/Connexion hub.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* UI Prototype */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-3200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The Chatter</h2>
              <p className="text-xl text-gray-600">
                 The Chatter feature was designed as an easy-to-use communication channel for clients
                 to interact directly with BCX regarding specific CX Requests
              </p>
            </div>

            {/* <div
              className={`grid md:grid-cols-2 gap-12 mb-8 transition-all duration-1000 delay-3300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UI prototype link (Web):</h3>
                <p className="text-blue-600 text-sm break-all">
                  https://www.figma.com/proto/bcx-onecx-ui-web
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UI prototype link (Mobile):</h3>
                <p className="text-blue-600 text-sm break-all">
                  https://www.figma.com/proto/bcx-onecx-ui-mobile
                </p>
              </div>
            </div> */}

            <div
              className={`transition-all duration-1000 delay-3400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/Chatter.png"
                alt="BCX OneCX Chatter Feature"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/Chatter.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* Archetype Definition */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Mobile App Demo</h2>
              

            </div>

            <div
              className={`flex flex-col gap-8 transition-all duration-1000 delay-1700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className={`relative w-[280px] h-[580px] mx-auto transition-all duration-1000 delay-1800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-white rounded-[3rem] shadow-[0_0_20px_rgba(0,0,0,0.1),0_0_40px_rgba(0,0,0,0.05)]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[25px] bg-white rounded-b-2xl border-b border-gray-100"></div>
                </div>
                {/* Video Container */}
                <video
                  src="/Demo optn 1.mp4"
                  className="absolute inset-[8px] rounded-[2.5rem] object-cover w-[calc(100%-16px)] h-[calc(100%-16px)]"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                  controls={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Results</h2>
            </div>

            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Mobile App Successfully Delivered</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-green-800 mb-2">85%</h4>
                    <p className="text-green-700">App Adoption Rate within 3 months.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-blue-800 mb-2">60%</h4>
                    <p className="text-blue-700">Push Notification Open Rate</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-purple-800 mb-2">4.5min</h4>
                    <p className="text-purple-700">Average Session Length</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-6 bg-white border-t">
          <div className="max-w-6xl mx-auto">
            <div
              className={`flex justify-between items-center transition-all duration-1000 delay-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Link
                href="/projects"
                className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </Link>
              <Link
                href="/projects/kitkat-canada-ecommerce"
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