"use client"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/ui/mobile-nav"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Home() {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-purple-400 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500 to-pink-500 rounded-full blur-3xl opacity-60 transform translate-x-32 -translate-y-16 animate-float"></div>

      {/* Mobile Navigation */}
      <div className="animate-fade-in">
        <MobileNav currentPath="/" variant="home" />
      </div>

      <section className="px-6 py-20 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">ux/ui designer</h1>
        <p className="text-lg md:text-xl max-w-md mx-auto mb-12 leading-relaxed animate-slide-up-delay">
          creating visually stunning <span className="font-medium">digital experiences</span> grounded in thoughtful strategy.
        </p>

        <Button
          variant="outline"
          className="rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slide-up-delay-2"
          asChild
        >
          <Link href="/projects">
            <span className="mr-2">VIEW PROJECTS</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </section>

      <section className="px-6 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Project 1 - SA20 Cricket League */}
          <div
            ref={(el) => {
              projectRefs.current[0] = el
            }}
            className="grid md:grid-cols-2 gap-12 items-center project-card opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="relative group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SA20%20Homepage-CaV6dxpk2arrANIYNYYryeeR0KncRq.png"
                alt="SA20 Cricket League Mobile App"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl cursor-pointer"
                quality={95}
                priority
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-blue-200">
                RESPONSIVE WEB APPLICATION 
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 hover:text-purple-700">
                Empowering Cricket Fans to Connect Deeply with their Favorite League
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Designing a responsive web application to immerse fans in the action. A platform that integrates core
                functionalities, allowing users to secure matchday tickets, explore in-depth player profiles, and track
                live fixtures, creating a unified and world-class digital home for the league.
              </p>
              <Button
                variant="link"
                className="p-0 text-black font-medium group hover:text-purple-700 transition-colors duration-300"
                asChild
              >
                <Link href="/projects/sa20-cricket-league">
                  View Case Study{" "}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Project 2 - BCX OneCX Salesforce */}
          <div
            ref={(el) => {
              projectRefs.current[1] = el
            }}
            className="grid md:grid-cols-2 gap-12 items-center project-card opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="relative group md:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OneCX-GtfYp2YPqIHTDWjHi5Imi4GwAUBVPN.png"
                alt="OneCX Platform Interface"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl cursor-pointer"
                quality={95}
                priority
              />
            </div>
            <div className="space-y-4 md:order-1">
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-blue-200">
                SELF-SERVICE  MOBILE APP
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 hover:text-purple-700">
                Transforming Client Engagement Through a Unified Digital Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building a single platform where BCX's account managers and customers can easily connect, handle admin
                tasks, track updates in real time, and find latest news and products—all in one place.
              </p>
              <Button
                variant="link"
                className="p-0 text-black font-medium group hover:text-purple-700 transition-colors duration-300"
                asChild
              >
                <Link href="/projects/bcx-onecx-salesforce">
                  View Case Study{" "}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Project 3 - KitKat Canada E-commerce */}
          <div
            ref={(el) => {
              projectRefs.current[2] = el
            }}
            className="grid md:grid-cols-2 gap-12 items-center project-card opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="relative group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KitKat-QaVkOJv9IJIo09zxVAaOHxiqUGoHh4.png"
                alt="KitKat Canada E-commerce Mobile Interface"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl cursor-pointer"
                quality={95}
                priority
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-red-200">
                E-COMMERCE
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 hover:text-purple-700">
                The Ultimate Break,Delivered
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Designing a custom e-commerce experience for KitKat Canada, making it easier for KitKat enthusiasts to
                order their favorite treats and exclusive drops.
              </p>
              <Button
                variant="link"
                className="p-0 text-black font-medium group hover:text-purple-700 transition-colors duration-300"
                asChild
              >
                <Link href="/projects/kitkat-canada-ecommerce">
                  View Case Study{" "}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Project 4 - Cluck & Track Agritech Platform */}
          <div
            ref={(el) => {
              projectRefs.current[3] = el
            }}
            className="grid md:grid-cols-2 gap-12 items-center project-card opacity-0 translate-y-8 transition-all duration-700"
          >
            <div className="relative group md:order-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cluck%20n%20Track-1ppc9TgG5CA4SMKz49OPHKB00FX2le.png"
                alt="Cluck & Track Agritech Platform"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl cursor-pointer"
                quality={95}
                priority
              />
            </div>
            <div className="space-y-4 md:order-1">
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-green-200">
                AGRITECH WEB APPLICATION
              </div>
              <h3 className="text-2xl font-bold transition-colors duration-300 hover:text-purple-700">
                Empowering Poultry Farmers with Digital Precision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Designing an all-in-one agritech platform that helps farmers optimize resources, reduce waste, and
                improve overall farm profitability.
              </p>
              <Button
                variant="link"
                className="p-0 text-black font-medium group hover:text-purple-700 transition-colors duration-300"
                asChild
              >
                <Link href="/projects/cluck-and-track">
                  View Case Study{" "}
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600">© 2025 Lince Sharara | Get In Touch lincesharara@gmail.com</p>
        </div>
      </footer>
    </div>
  )
}
