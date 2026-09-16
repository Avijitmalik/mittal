'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Download Catalog', href: '/catalog' },
  { label: 'Contact Us', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isDark = theme === 'dark'

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
           <Image 
            src="/mittalgroup.png" 
            alt="Mittal Logo" 
            width={60} 
            height={40}
            priority 
          />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[13px] tracking-wide font-medium transition-colors duration-200 relative group',
                  pathname === link.href
                    ? 'text-brand-blue'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
                <span className={cn(
                  'absolute -bottom-0.5 left-0 h-px bg-brand-blue transition-all duration-300',
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                )} />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'moon' : 'sun'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            )}

            {/* Enquire Now CTA */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-1.5 bg-brand-blue text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-primary/90 transition-all duration-200 tracking-wide"
            >
              Enquire Now
              <ChevronRight size={13} />
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-[280px] glass flex flex-col pt-24 pb-10 px-8"
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'text-lg font-medium transition-colors',
                        pathname === link.href
                          ? 'text-brand-blue'
                          : 'text-foreground hover:text-brand-blue'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-brand-blue text-white text-sm font-semibold px-6 py-3 rounded-full w-full"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
