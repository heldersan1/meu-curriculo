'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, Briefcase, Cpu, Wrench, Award, GraduationCap, Mail, Home, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Início', icon: Home },
  { id: 'experience', label: 'Experiência', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'specializations', label: 'Expertise', icon: Shield },
  { id: 'tools', label: 'Ferramentas', icon: Wrench },
  { id: 'certifications', label: 'Certificações', icon: Award },
  { id: 'education', label: 'Formação', icon: GraduationCap },
  { id: 'contact', label: 'Contato', icon: Mail },
]

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation - Pill Style */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden lg:block transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2.5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div>
                <span className="font-semibold text-sm">Hélder Santana</span>
                <span className="text-xs text-muted-foreground block -mt-0.5">Network & Security</span>
              </div>
            </motion.div>

            {/* Centered Menu Items - Pill Navigation */}
            <div className="flex items-center gap-1 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-2 py-1.5">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Contact Button */}
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              <motion.button
                className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contato
              </motion.button>
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300",
          scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/50" : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <div className="flex items-center justify-between px-4 h-16">
          {/* Logo Mobile */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold text-sm">Hélder Santana</span>
          </div>

          {/* Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-primary" />
            ) : (
              <Menu className="h-5 w-5 text-muted-foreground" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden pt-16"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative m-4 p-6 bg-card border border-border rounded-2xl overflow-hidden"
            >
              {/* Menu Items */}
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left",
                      activeSection === item.id
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Contact Button Mobile */}
              <div className="mt-4 pt-4 border-t border-border">
                <a href="mailto:helder.souza@proton.me" className="block">
                  <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                    Entre em Contato
                  </button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
