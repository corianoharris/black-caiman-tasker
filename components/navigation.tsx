"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    {
      href: "/",
      label: "Tasks",
      description: "Manage your prey, noise, and optional tasks",
    },
    {
      href: "/values",
      label: "Core Values",
      description: "Black Caiman principles for focused living",
    },
    {
      href: "/philosophy",
      label: "Philosophy",
      description: "Complete life optimization framework and manifesto",
    },
    {
      href: "/manifesto",
      label: "Manifesto",
      description: "The complete Black Caiman philosophy and daily practices",
    },
    {
      href: "/schedule",
      label: "Schedule",
      description: "Generate and manage your daily schedule",
    },
    {
      href: "/wellness",
      label: "Wellness",
      description: "Health & Wellness Hub with food tracking and metrics",
    },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-gradient-to-r from-purple-200 to-purple-300 border-b border-purple-300 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 text-purple-900 hover:text-purple-700 transition-colors">
              <div className="w-16 h-8 bg-purple-400 rounded-lg flex items-center justify-center p-2">
                <div className="">BCP</div>
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg scannable-heading">Black Caiman</div>
                <div className="text-xs text-purple-700 scannable-small">Task Prioritizer</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className={`text-sm scannable-text ${
                        isActive
                          ? "bg-purple-400 text-white"
                          : "text-purple-800 hover:text-purple-900 hover:bg-purple-100"
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-purple-800 hover:text-purple-900 hover:bg-purple-100"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Now positioned absolutely to overlay content */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-purple-100 border-t border-purple-300 shadow-lg z-40">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <div
                      className={`px-3 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-purple-300 text-purple-900"
                          : "text-purple-800 hover:text-purple-900 hover:bg-purple-200"
                      }`}
                    >
                      <div className="font-medium scannable-text">{item.label}</div>
                      <div className="text-xs text-purple-700 scannable-small">{item.description}</div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
