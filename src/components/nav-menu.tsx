'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X, Menu, ChevronRight, User, Briefcase, Cpu, Wrench, Award, GraduationCap, Mail, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  id: string
  label: string
  command: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', command: 'cd ~/', icon: Home },
  { id: 'experience', label: 'Experiência', command: 'cat exp.log', icon: Briefcase },
  { id: 'skills', label: 'Skills', command: './skills.sh', icon: Cpu },
  { id: 'specializations', label: 'Especializações', command: 'ls -la /specs', icon: Terminal },
  { id: 'tools', label: 'Ferramentas', command: 'dpkg -l tools', icon: Wrench },
  { id: 'certifications', label: 'Certificações', command: 'cat certs.txt', icon: Award },
  { id: 'education', label: 'Formação', command: 'cat diploma.pdf', icon: GraduationCap },
  { id: 'contact', label: 'Contato', command: 'mailto:helder', icon: Mail },
]

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

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
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden lg:block transition-all duration-300",
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Terminal Header */}
            <motion.div
              className="flex items-center gap-3 font-mono"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-md">
                <span className="text-primary">root@helder</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-accent">~</span>
                <span className="text-muted-foreground">$</span>
              </div>
            </motion.div>

            {/* Menu Items */}
            <div className="flex items-center gap-1 font-mono text-sm">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-2 rounded-md transition-all duration-200 flex items-center gap-2 group",
                    activeSection === item.id
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="hidden xl:inline">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300",
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <div className="flex items-center justify-between px-4 h-16">
          {/* Terminal Header Mobile */}
          <div className="flex items-center gap-2 font-mono text-sm px-3 py-1.5 bg-card border border-border rounded-md">
            <span className="text-primary">root@helder</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-accent">~</span>
            <span className="text-muted-foreground">$</span>
          </div>

          {/* Menu Toggle */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-card border border-border hover:border-primary/50 transition-colors"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden pt-16"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative m-4 p-4 bg-card border border-border rounded-xl overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border font-mono text-sm">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-muted-foreground ml-2">helder@portfolio:~$ ./menu.sh</span>
              </div>

              {/* Menu Items */}
              <div className="space-y-1 font-mono">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-left group",
                      activeSection === item.id
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    )}
                  >
                    <span className="text-primary/50">$</span>
                    <item.icon className="h-4 w-4" />
                    <span className="flex-1">{item.label}</span>
                    <span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">
                      {item.command}
                    </span>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                ))}
              </div>

              {/* Terminal Footer */}
              <div className="mt-4 pt-3 border-t border-border font-mono text-xs text-muted-foreground">
                <span className="text-primary">helder@portfolio</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-accent">~</span>
                <span className="text-muted-foreground">$ _</span>
                <span className="animate-pulse">▊</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Terminal Style Sidebar (Optional - shows on hover) */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
      >
        <motion.div
          className="relative"
          whileHover={{ x: 0 }}
        >
          {/* Collapsed State */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-card border border-border border-l-0 rounded-r-lg flex items-center justify-center cursor-pointer hover:bg-primary/5 transition-colors">
            <Terminal className="h-5 w-5 text-primary rotate-90" />
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
