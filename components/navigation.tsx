"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Target, BookOpen, Heart, Brain, Scroll, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Tasks", icon: Target },
    { href: "/schedule", label: "Schedule", icon: FileText },
    { href: "/values", label: "Values", icon: Heart },
    { href: "/manifesto", label: "Manifesto", icon: Brain },
    { href: "/philosophy", label: "Philosophy", icon: Scroll },
    { href: "/kipling", label: "Kipling", icon: BookOpen },
    { href: "/resources", label: "Resources", icon: BookOpen },
    { href: "/wellness", label: "Wellness", icon: Heart },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-gradient-to-r from-purple-200 to-purple-300 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-purple-900 scannable-heading">
              Black Caiman
            </Link>
            <div className="flex space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors scannable-text ${
                      pathname === item.href
                        ? "bg-purple-500 text-white"
                        : "text-purple-800 hover:bg-purple-100 hover:text-purple-900"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4" />
                      {item.label}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-gradient-to-r from-purple-200 to-purple-300 shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-purple-900 scannable-heading">
              Black Caiman
            </Link>
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-purple-800 hover:bg-purple-100">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-xl border-t border-purple-200 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors scannable-text ${
                        pathname === item.href ? "bg-purple-500 text-white" : "text-purple-800 hover:bg-purple-50"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
