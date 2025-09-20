"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface MobileNavProps {
  currentPath?: string
  variant?: "home" | "page"
}

export function MobileNav({ currentPath = "", variant = "page" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const isHomePage = variant === "home"
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className={`flex items-center justify-between p-6 relative ${isOpen ? 'z-30' : 'z-50'} ${isHomePage ? "" : "border-b"}`}>
        <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <div className="w-8 h-8 bg-black flex items-center justify-center transition-all duration-300 hover:bg-gray-800">
            <span className="text-white font-bold text-sm">LS</span>
          </div>
          <span className="font-medium">Lince Sharara</span>
          {!isHomePage && <span className="text-sm text-gray-500 ml-2">UX/UI DESIGNER</span>}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm hover:underline transition-all duration-300 hover:text-purple-700 hover:scale-105 ${
                currentPath === link.href ? "font-medium" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/263773958223"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline transition-all duration-300 hover:text-purple-700 hover:scale-105"
          >
            WhatsApp Me
          </a>
        </nav>

        {/* Desktop LinkedIn + Mobile Menu Button Container */}
        <div className="flex items-center gap-2">
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/lincemore-sharara" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 hover:scale-110 transition-transform duration-300 hover:text-purple-700"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-3 z-[60] relative hover:bg-gray-100 border border-gray-200 rounded-lg"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={closeMenu}
          />
          
          {/* Navigation Panel */}
          <nav className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out animate-slide-in-right z-10">
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              {/* Navigation Links */}
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-base font-medium py-4 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 ${
                      currentPath === link.href 
                        ? "bg-purple-50 text-purple-700 border-l-4 border-purple-700" 
                        : "text-gray-900 hover:text-purple-700"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/263773958223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-medium py-4 px-4 rounded-lg text-gray-900 hover:bg-gray-50 hover:text-purple-700 transition-all duration-200"
                  onClick={closeMenu}
                >
                  WhatsApp Me
                </a>
              </div>

              {/* Bottom Section */}
              <div className="mt-auto pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <p>© 2025 Lince Sharara</p>
                    <p>lincesharara@gmail.com</p>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/lincemore-sharara" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}