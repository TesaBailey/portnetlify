"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Users, Target, Lightbulb, Palette, Code, CheckCircle, Clock } from "lucide-react"

export default function CluckAndTrackCaseStudy() {
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Empowering Poultry Farmers with Digital Precision</h1>
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
                 Farmers lack reliable, accessible digital solutions customized for the African rural context that help 
                 maintain accurate records and improve flock health and productivity.
                 There is a need for a simple, offline-capable, multilingual platform with clear, visual insights and
                 timely alerts to drive better farm management and livelihoods.

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
                 The increasing penetration of affordable smartphones, coupled with farmers’ expressed interest in
                 digitization, creates an opportunity to build a mobile-first poultry farm portal designed specifically
                 for African farmers’ workflows, connectivity realities, languages, and communication habits.

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
                Cluck & Track, a lightweight, offline-first, multilingual poultry farm management portal featuring:

                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                     Visual dashboard with egg production trends, feed inventory with urgency alerts,
                     flock health percentages, and weekly feed cost tracking.

                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                   Task management with vaccination reminders, feed scheduling, and health notifications.

                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  Accessible design optimized for low-tech users and rural mobile networks.

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
                <h3 className="font-bold text-gray-900 mb-2">Discovery</h3>
                <p className="text-sm text-gray-600 mb-2">2 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>Farm Visits</p>
                  <p>Interviews,</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Target className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Research</h3>
                <p className="text-sm text-gray-600 mb-2">4 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>Persona creation</p>
                  <p>Competitor Review</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Lightbulb className="w-8 h-8 text-teal-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Ideation</h3>
                <p className="text-sm text-gray-600 mb-2">4 week</p>
                <div className="text-xs text-gray-500">
                  <p>Feature mapping</p>
                  <p>Wireframing</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Prototyping </h3>
                <p className="text-sm text-gray-600 mb-2">4 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>UI flows</p>
                  <p>Clickable prototype</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Palette className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Testing </h3>
                <p className="text-sm text-gray-600 mb-2">4 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>Usability trials</p>
                  <p>Iteration cycles</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-lg">
                <Code className="w-8 h-8 text-teal-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Delivery </h3>
                <p className="text-sm text-gray-600">4 weeks</p>
                <div className="text-xs text-gray-500">
                  <p>Final design</p>
                  <p>Dev handoff</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-8">My Role</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800">Research Lead</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl text-center">
                  <Target className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-emerald-800">Persona Builder</h3>
                </div>
                <div className="bg-teal-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-bold text-teal-800">Competitor Analyst</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Palette className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800">UX Design</h3>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-bold text-emerald-800">UI Design</h3>
                </div>
                <div className="bg-teal-50 p-6 rounded-xl text-center">
                  <Users className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <h3 className="font-bold text-teal-800">User Testing</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Code className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-800">Developer Liaison</h3>
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
                    <h3 className="font-bold text-gray-900">Airtable </h3>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <Code className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Lookback</h3>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Duration</h2>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <Clock className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">6 months</h3>
                  <p className="text-gray-600">From farm research to dev handover</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Discovery</h2>
              <p className="text-xl text-gray-600">
                Below are the field research methods I used for this project.

              </p>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-1300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Ethnographic Immersion</h4>
                <p className="text-gray-600">I spent over a week visiting 10 poultry farms in Zimbabwe, shadowing farmers during
                  feed administration, vaccination, egg collection, and record-keeping.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Semi-Structured Interviews:</h4>
                <p className="text-gray-600">I conducted 8 interviews with farm owners, 3 veterinary officers, 
                  and 2 supply chain agents to uncover pain points, technology use, and workflow details.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-teal-600 font-bold">3</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Surveys</h4>
                <p className="text-gray-600">I distributed online surveys and received 40 responses from farmers in the Southern Africa region, to quantify challenges,
                  technology ownership, and feature preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

         {/* Focus areas */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Interview Focus Areas & Key Findings</h2>
              <p className="text-xl text-gray-600">
              Key themes explored to understand user needs, behaviors, and challenges, with findings.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/INTERVIEW FOCUS AREAS.png"
                alt="Interview Focus Areas & Key Findings"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/INTERVIEW FOCUS AREAS.png', '_blank')}
              />
            </div>
          </div>
        </section>


        {/* Archetype Definition */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-1600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Personas Mapping</h2>
              <p className="text-xl text-gray-600">
                These user personas represent typical poultry farmers, capturing their goals, challenges, 
                behaviors, and technology preferences.
              </p>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-1700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className={`transition-all duration-1000 delay-1800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/Persona 1.png"
                  alt="Persona 1 - Small-Scale Poultry Farmer"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  quality={100}
                  priority
                  onClick={() => window.open('/Persona 1.png', '_blank')}
                />
              </div>

              <div className={`transition-all duration-1000 delay-1900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/Persona 2.png"
                  alt="Persona 2 - Commercial Farm Operator"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  quality={100}
                  onClick={() => window.open('/Persona 2.png', '_blank')}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Framing */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Problem Framing
              </h2>
              {/* <p className="text-xl text-gray-600">
                Structuring the platform's navigation and content hierarchy for optimal farm management experience
              </p> */}
            </div>

            <div
              className={`transition-all duration-1000 delay-2300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/problem framing.png"
                alt="Problem Framing for Cluck & Track Agritech Platform"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/problem framing.png', '_blank')}
              />
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Competitive Analysis</h2>
              <p className="text-xl text-gray-600">
                I evaluated key poultry farm management solutions, identifying gaps in offline use, local language support, and integration.
                This informed our unique approach to better serve African farmers' needs.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-2500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <Image
                src="/competitor analysisct.png"
                alt="Competitive Analysis for Cluck & Track Agritech Platform"
                width={1600}
                height={900}
                className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                quality={100}
                onClick={() => window.open('/competitor analysisct.png', '_blank')}
              />
            </div>
          </div>
        </section>

      
        {/* Final UI Highlights */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-12 transition-all duration-1000 delay-2800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Final UI Highlights</h2>
              <p className="text-xl text-gray-600">
                final dashboard delivers clear egg production trends, feed inventory status with urgent alerts, 
                flock health metrics, and simple navigation tailored for ease and local relevance.
              </p>
            </div>

            <div className="space-y-8">
              <div className={`transition-all duration-1000 delay-2900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/UI HIGHLIGHT 1.png"
                  alt="UI Highlight 1 - Dashboard Overview"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  quality={100}
                  priority
                  onClick={() => window.open('/UI HIGHLIGHT 1.png', '_blank')}
                />
              </div>

              <div className={`transition-all duration-1000 delay-3000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/UI HIGHLIGHT 2.png"
                  alt="UI Highlight 2 - Feed Management"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  quality={100}
                  onClick={() => window.open('/UI HIGHLIGHT 2.png', '_blank')}
                />
              </div>

              <div className={`transition-all duration-1000 delay-3100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/UI HIGHLIGHT 3.png"
                  alt="UI Highlight 3 - Health Monitoring"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  quality={100}
                  onClick={() => window.open('/UI HIGHLIGHT 3.png', '_blank')}
                />
              </div>

              <div className={`transition-all duration-1000 delay-3200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <Image
                  src="/UI HIGHLIGHT 4.png"
                  alt="UI Highlight 4 - Analytics & Reports"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  quality={100}
                  onClick={() => window.open('/UI HIGHLIGHT 4.png', '_blank')}
                />
              </div>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Transforming Poultry Farm Management</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-green-800 mb-2"> 85%</h4>
                    <p className="text-green-700">of pilot participants digitized farm records within first month</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-emerald-800 mb-2">40%</h4>
                    <p className="text-emerald-700">missed vaccinations reduced by 40% due to proactive reminders</p>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-teal-800 mb-2">94%</h4>
                    <p className="text-teal-700">satisfaction rate, high recommendability citing 
                      usability and offline reliability.
                    </p>
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