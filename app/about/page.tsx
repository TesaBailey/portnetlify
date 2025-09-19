import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <span className="text-white font-bold text-sm">LS</span>
          </div>
          <span className="font-medium">Lince Sharara</span>
          <span className="text-sm text-gray-500 ml-2">UX/UI DESIGNER</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm hover:underline font-medium">
            About Me
          </Link>
          <Link href="/projects" className="text-sm hover:underline">
            Projects
          </Link>
          <a href="https://wa.me/263773958223" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
            WhatsApp Me
          </a>
        </nav>

        <a href="https://www.linkedin.com/in/lincemore-sharara" target="_blank" rel="noopener noreferrer" className="p-2">
          <Linkedin className="w-5 h-5" />
        </a>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
                Hello, I am a UI/UX designer based in Zimbabwe!
              </h1>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200 flex justify-center">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20me-v9VlQAUuTvPLcqZc9CVleMll3tdmxZ.png"
                  alt="Lince Sharara - UX/UI Designer"
                  width={320}
                  height={320}
                  className="w-80 h-80 object-cover object-top rounded-full shadow-2xl border-4 border-white"
                />
                {/* Decorative gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400/20 via-orange-400/20 to-purple-400/20 -z-10 scale-110"></div>
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-15 animate-pulse animation-delay-1000"></div>
                <div className="absolute top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>

          {/* BIO Section */}
          <div className="mt-16 max-w-4xl">
            <div className="animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">BIO</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  What pulled me into design wasn't the flashy tools or trends, I was simply fascinated by how people
                  interact with the world around them. That curiosity turned into a career, and for the past 7+ years
                  I've been helping global brands create digital experiences that actually feel good to use.
                </p>
                <p>
                  What I love most is that design isn't just about making something look nice, it's about making
                  someone's day a little easier, a little better.
                </p>
                <p>
                  When I'm not immersed in my latest project, you'll probably find me out hiking, playing tennis on a
                  sunny afternoon, or volunteering in animal shelters. For me, these moments recharge my creativity and
                  keep me inspired.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Visual Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Designing responsive mobile applications that work seamlessly across all devices and platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-4">User Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Conducting thorough user research to understand needs and validate design decisions with real data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Design Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Discover</h3>
              <p className="text-gray-600 text-sm">
                Gather insights and empathize with users to understand their needs and challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Define</h3>
              <p className="text-gray-600 text-sm">
                Analyze insights to clearly identify the core problems to solve.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Create</h3>
              <p className="text-gray-600 text-sm">
                Ideate and design solutions through prototypes and visual concepts.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Refine</h3>
              <p className="text-gray-600 text-sm">
                Test and iterate on designs based on feedback for continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Tools & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">Fi</span>
              </div>
              <p className="text-sm font-medium">Figma</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">Ac</span>
              </div>
              <p className="text-sm font-medium">Adobe Creative Cloud</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">Mi</span>
              </div>
              <p className="text-sm font-medium">Miro</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">Ji</span>
              </div>
              <p className="text-sm font-medium">Jira</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">Opt</span>
              </div>
              <p className="text-sm font-medium">Optimizely</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">Ow</span>
              </div>
              <p className="text-sm font-medium">Optimal Workshop</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">Mz</span>
              </div>
              <p className="text-sm font-medium">Maze</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-lg">AI</span>
              </div>
              <p className="text-sm font-medium">Generative AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Lets Create Something Amazing Together</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with passionate teams. Whether you have a
            specific project in mind or just want to chat about design, I'd love to hear from you.
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
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-sm text-gray-600">© 2025 Lince Sharara | Get In Touch lincesharara@gmail.com</p>
          <a href="https://www.linkedin.com/in/lincemore-sharara" target="_blank" rel="noopener noreferrer" className="p-2">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  )
}
