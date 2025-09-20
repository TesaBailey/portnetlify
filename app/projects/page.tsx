import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/ui/mobile-nav"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Navigation */}
      <MobileNav currentPath="/projects" variant="page" />

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">My Projects</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            A selection of my design work, focused on thoughtful solutions that address real user needs and business goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16">
            {/* Project 1 - SA20 Cricket League Mobile App */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SA20%20Homepage-CaV6dxpk2arrANIYNYYryeeR0KncRq.png"
                  alt="SA20 Cricket League Mobile App"
                  width={800}
                  height={600}
                  quality={95}
                  className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <div>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
                  RESPONSIVE WEB APPLICATION
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Empowering Cricket Fans to Connect Deeply with Their Favorite League
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Designing a responsive web application to immerse fans in the action. A platform that integrates core
                  functionalities, allowing users to secure matchday tickets, explore in-depth player profiles, and
                  track live fixtures, creating a unified and world-class digital home for the league.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Web Platform</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Sports Tech</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                </div>
                <Button variant="link" className="p-0 text-black font-medium" asChild>
                  <Link href="/projects/sa20-cricket-league">
                    View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Project 2 - BCX OneCX Salesforce */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative md:order-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OneCX-GtfYp2YPqIHTDWjHi5Imi4GwAUBVPN.png"
                  alt="BCX OneCX Platform Interface"
                  width={800}
                  height={600}
                  quality={95}
                  className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <div className="md:order-1">
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-4">
                  SELF-SERVICE MOBILE APP
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Transforming Client Engagement Through a Unified Digital Experience
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Building a single platform where BCX's account managers and customers can easily connect, handle admin
                  tasks, track updates in real time, and find latest news and products—all in one place.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">B2B Platform</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Salesforce</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">User Experience</span>
                </div>
                <Button variant="link" className="p-0 text-black font-medium" asChild>
                  <Link href="/projects/bcx-onecx-salesforce">
                    View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Project 3 - KitKat Canada E-commerce Platform */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KitKat-QaVkOJv9IJIo09zxVAaOHxiqUGoHh4.png"
                  alt="KitKat Canada E-commerce Platform"
                  width={800}
                  height={600}
                  quality={95}
                  className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <div>
                <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mb-4">
                  E-COMMERCE
                </div>
                <h3 className="text-3xl font-bold mb-4">The Ultimate Break, Delivered</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Designing a custom e-commerce experience for KitKat Canada, making it easier for KitKat enthusiasts to
                  order their favorite treats and exclusive drops.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">E-commerce</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Shopify</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Web Design</span>
                </div>
                <Button variant="link" className="p-0 text-black font-medium" asChild>
                  <Link href="/projects/kitkat-canada-ecommerce">
                    View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Project 4 - Agritech Web Application */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative md:order-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cluck%20n%20Track-1ppc9TgG5CA4SMKz49OPHKB00FX2le.png"
                  alt="Cluck & Track Agritech Platform"
                  width={800}
                  height={600}
                  quality={95}
                  className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <div className="md:order-1">
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mb-4">
                  AGRITECH WEB APPLICATION
                </div>
                <h3 className="text-3xl font-bold mb-4">Empowering Poultry Farmers with Digital Precision</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Designing an all-in-one agritech platform that helps farmers optimize resources, reduce waste, and
                  improve overall farm profitability.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">AgriTech</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Farm Management</span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Web Application</span>
                </div>
                <Button variant="link" className="p-0 text-black font-medium" asChild>
                  <Link href="/projects/cluck-and-track">
                    View Case Study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Lets Work Together</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create meaningful digital experiences. Lets discuss how we
            can bring your ideas to life.
          </p>
          <Button
            variant="outline"
            className="rounded-full border-2 border-black bg-transparent hover:bg-black hover:text-white transition-colors"
            asChild
          >
            <a href="https://wa.me/263773958223" target="_blank" rel="noopener noreferrer">
              Get In Touch
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600">© 2025 Lince Sharara | Get In Touch lincesharara@gmail.com</p>
        </div>
      </footer>
    </div>
  )
}
