'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Network,
  Flame,
  Server,
  Lock,
  Terminal,
  Mail,
  Linkedin,
  ExternalLink,
  ChevronDown,
  Wifi,
  Globe,
  HardDrive,
  Cloud,
  Eye,
  Bug,
  AlertTriangle,
  Activity,
  Cpu,
  Database,
  Building2,
  Calendar,
  MapPin,
  Phone,
  Award,
  BookOpen,
  FileText
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { NavMenu } from '@/components/nav-menu'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Habilidades técnicas principais
const skills = [
  { name: 'Firewall Administration', level: 95, icon: Flame },
  { name: 'Network Security', level: 92, icon: Network },
  { name: 'VPN & SD-WAN', level: 90, icon: Globe },
  { name: 'Switching & Routing', level: 88, icon: Server },
  { name: 'Security Monitoring', level: 87, icon: Eye },
  { name: 'Linux Administration', level: 85, icon: Terminal },
]

// Especializações detalhadas
const specializations = [
  {
    title: 'Firewall Administration',
    icon: Flame,
    description: 'Administração avançada de firewalls enterprise com implementação de políticas de segurança, alta disponibilidade e proteção contra ameaças.',
    features: ['FortiGate', 'Sophos XG', 'Palo Alto', 'Cisco ASA', 'SonicWall', 'pfSense/OPNsense']
  },
  {
    title: 'Network Infrastructure',
    icon: Network,
    description: 'Design, implementação e manutenção de infraestrutura de rede corporativa com foco em performance, redundância e segurança.',
    features: ['TCP/IP', 'VPN IPSec/SSL', 'SD-WAN', 'OSPF/BGP', 'VLAN', 'NAT/QoS']
  },
  {
    title: 'Switching & Wireless',
    icon: Server,
    description: 'Gerenciamento de switches L2/L3 e infraestrutura wireless empresarial para ambientes de alta disponibilidade.',
    features: ['Cisco', 'HPE/Aruba', 'Datacom', 'Dell', 'Ubiquiti', 'Wireless Controllers']
  },
  {
    title: 'Security Operations',
    icon: Shield,
    description: 'Operações de segurança defensiva incluindo monitoramento SIEM, análise de vulnerabilidades e resposta a incidentes.',
    features: ['Wazuh SIEM', 'Nessus', 'Splunk', 'EDR', 'IPS/IDS', 'Threat Hunting']
  },
  {
    title: 'Monitoring & Observability',
    icon: Eye,
    description: 'Implementação de soluções de monitoramento para visibilidade completa da infraestrutura de rede e sistemas.',
    features: ['Zabbix', 'Grafana', 'Splunk', 'Cisco Prime', 'PRTG', 'Alerting']
  },
  {
    title: 'Infrastructure & Automation',
    icon: Cpu,
    description: 'Administração de servidores e automação de tarefas operacionais para maior eficiência e padronização.',
    features: ['Linux (RHEL/Debian)', 'Hyper-V', 'VMware', 'Python', 'Scripting', 'Documentation']
  }
]

// Ferramentas e tecnologias
const tools = [
  { name: 'FortiGate', icon: Flame },
  { name: 'Sophos XG', icon: Shield },
  { name: 'Palo Alto', icon: Lock },
  { name: 'Wireshark', icon: Activity },
  { name: 'Zabbix', icon: Eye },
  { name: 'Grafana', icon: Database },
  { name: 'Splunk', icon: Terminal },
  { name: 'Wazuh', icon: Bug },
  { name: 'Nessus', icon: AlertTriangle },
  { name: 'Cisco Prime', icon: Network },
  { name: 'Python', icon: Cpu },
  { name: 'Linux', icon: Terminal },
]

// Certificações e cursos principais
const certifications = [
  { name: 'Fortinet NSE 4', issuer: 'Fortinet', status: 'Preparatório Concluído' },
  { name: 'LPIC-1', issuer: 'LPI', status: 'Preparatório Concluído' },
  { name: 'CCNA 200-301', issuer: 'Cisco', status: 'Preparatório Concluído' },
  { name: 'Linux System Administration', issuer: '4Linux', status: 'Concluído' },
]

// Experiência profissional
const experiences = [
  {
    company: 'WEG',
    role: 'Administrador de Redes / Network Support',
    location: 'Jaraguá do Sul - SC',
    period: 'Out 2024 – Jan 2026',
    type: 'Presencial',
    highlights: [
      'Administração e operação de rede corporativa em ambiente global',
      'Configuração e gerenciamento de firewalls FortiGate, Palo Alto e Cisco ASA',
      'Atuação no Global IT Support (3º turno) para equipes na Índia, China, Austrália e África',
      'Monitoramento com Splunk e Cisco Prime Infrastructure',
      'Tratativa de incidentes e implementação de novos equipamentos'
    ]
  },
  {
    company: 'Flowti',
    role: 'Analista de Redes e Segurança da Informação',
    location: 'Brusque - SC',
    period: 'Abr 2024 – Jul 2024',
    type: 'Remoto',
    highlights: [
      'Configuração e monitoramento de firewalls FortiGate, SonicWall e pfSense',
      'Implementação de VPN Site-to-Site e Client-to-Site',
      'Criação de políticas de segurança, NAT, VIPs, SD-WAN e WAF',
      'Configuração de alta disponibilidade (HA), IPS e proteção DDoS',
      'Integração com FSSO (Fortinet Single Sign-On)'
    ]
  },
  {
    company: 'STRATI',
    role: 'Analista de Segurança da Informação Pleno – SOC',
    location: 'São Paulo - SP',
    period: 'Mai 2022 – Jun 2023',
    type: 'Remoto',
    highlights: [
      'Administração de firewalls Sophos XG, FortiGate e Cisco ASA',
      'Implementação de VPNs IPSec/SSL, SD-WAN e roteamento BGP/OSPF',
      'Gestão de segurança: Web Filter, Application Control, WAF, EDR, MFA',
      'Monitoramento com Nessus, Wazuh e Sophos Central',
      'Análise de eventos e fortalecimento da postura de segurança'
    ]
  },
  {
    company: 'UMC',
    role: 'Analista de Infraestrutura de Redes Pleno',
    location: 'São Paulo - SP',
    period: 'Nov 2021 – Mai 2022',
    type: 'Presencial',
    highlights: [
      'Administração de firewalls Sophos XG e switches HPE L2/L3',
      'Gestão de servidores físicos e virtuais (Linux, Hyper-V, VMware)',
      'Monitoramento de infraestrutura com Zabbix e Grafana',
      'Implementação de políticas de segurança e Web Filter'
    ]
  },
  {
    company: 'Vikstar Contact Center',
    role: 'Técnico de Redes',
    location: 'São Paulo - SP',
    period: 'Abr 2018 – Jun 2021',
    type: 'Remoto',
    highlights: [
      'Configuração de firewall FortiGate: VLAN, VPN IPSec, OSPF, IPS',
      'Administração de switches Dell, Aruba, HP, Cisco, Datacom',
      'Configuração de Access Points Aruba e soluções wireless',
      'Cabeamento estruturado CAT5e/6/7, montagem de racks',
      'Configuração de DVRs, NVRs e câmeras IP'
    ]
  }
]

// Estatísticas
const stats = [
  { number: '7+', label: 'Anos de Experiência', icon: Shield },
  { number: '5+', label: 'Empresas de TI', icon: Building2 },
  { number: '15+', label: 'Firewalls Dominados', icon: Flame },
  { number: '10+', label: 'Certificações/Cursos', icon: Award },
]

// Cursos em andamento e relevantes
const courses = [
  { name: 'Engenharia Reversa e Análise de Malware', platform: 'Linux Force Security', status: 'Em andamento' },
  { name: 'Segurança da Informação Ataque x Defesa', platform: 'Linux Force Security', status: 'Em andamento' },
  { name: 'Análise Forense Digital', platform: 'Linux Force Security', status: 'Em andamento' },
  { name: 'Blindagem de Servidores Linux - ISO 27002', platform: 'Linux Force Security', status: 'Em andamento' },
  { name: 'Wazuh - Segurança SIEM + XDR', platform: 'Udemy', status: 'Concluído' },
  { name: 'Troubleshooting Firewall Fortigate - CLI', platform: 'Udemy', status: 'Concluído' },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation Menu */}
      <NavMenu />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Cybersecurity Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern z-0" />

        {/* Animated Scan Line */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-10 opacity-20"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-20 container mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary/50 bg-primary/10">
                  <Terminal className="w-4 h-4 mr-2" />
                  Network & Security Analyst
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              >
                <span className="text-foreground">Hélder </span>
                <span className="text-primary text-glow-green">Santana</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-6"
              >
                Analista de Redes e Segurança da Informação
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base text-muted-foreground max-w-xl mb-8"
              >
                Especialista em administração de firewalls FortiGate, Sophos, Cisco ASA, além de switches Cisco, HPE, Aruba e Datacom. 
                Experiência em ambientes corporativos e suporte global com foco em troubleshooting, VPNs, SD-WAN e segurança defensiva.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Tatuí - SP, Brasil</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>7+ anos de experiência</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-semibold px-8">
                  <Mail className="mr-2 h-5 w-5" />
                  Entre em Contato
                </Button>
                <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 font-semibold px-8">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <Card className="bg-card/80 backdrop-blur-sm border-border glow-cyan">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Competências Principais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Firewalls</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">FortiGate</Badge>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">Sophos XG</Badge>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">Palo Alto</Badge>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">Cisco ASA</Badge>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">SonicWall</Badge>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">pfSense</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Redes</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-accent/10 text-accent">VPN IPSec/SSL</Badge>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">SD-WAN</Badge>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">OSPF/BGP</Badge>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">VLAN</Badge>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">HA</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Monitoramento</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-secondary">Zabbix</Badge>
                        <Badge variant="secondary" className="bg-secondary">Grafana</Badge>
                        <Badge variant="secondary" className="bg-secondary">Splunk</Badge>
                        <Badge variant="secondary" className="bg-secondary">Wazuh</Badge>
                        <Badge variant="secondary" className="bg-secondary">Nessus</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8 text-primary/50" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Experiência <span className="text-primary">Profissional</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trajetória em empresas de tecnologia com atuação em infraestrutura de rede e segurança da informação.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
              >
                <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          {exp.company}
                        </CardTitle>
                        <CardDescription className="text-primary font-medium mt-1">
                          {exp.role}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="outline" className="w-fit text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Skills</span> & Expertise
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Competências técnicas desenvolvidas ao longo de 7+ anos de experiência em TI.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                  </div>
                </div>
                <div className="relative">
                  <Progress value={skill.level} className="h-2 bg-secondary" />
                  <div 
                    className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specializations Section */}
      <section id="specializations" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Áreas de <span className="text-accent">Especialização</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Foco principal em infraestrutura de rede segura e operações de segurança defensiva.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                variants={fadeInUp}
              >
                <Card className="h-full bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                      <spec.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{spec.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {spec.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {spec.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 relative bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Ferramentas & <span className="text-primary">Tecnologias</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Domínio de ferramentas essenciais para administração de rede, segurança e monitoramento.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                variants={fadeInUp}
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default group"
              >
                <tool.icon className="h-5 w-5 text-primary group-hover:text-glow-green" />
                <span className="font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Courses Section */}
      <section id="certifications" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-accent">Certificações</span> & Cursos
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Formação contínua e atualização constante em tecnologias de rede e segurança.
            </motion.p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certificações
              </motion.h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    variants={fadeInUp}
                    className="bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                        {cert.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                Cursos Recentes
              </motion.h3>
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.name}
                    variants={fadeInUp}
                    className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-sm">{course.name}</h4>
                        <p className="text-xs text-muted-foreground">{course.platform}</p>
                      </div>
                      <Badge 
                        variant={course.status === 'Em andamento' ? 'default' : 'secondary'} 
                        className={`text-xs ${course.status === 'Em andamento' ? 'bg-primary/20 text-primary' : ''}`}
                      >
                        {course.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Formação <span className="text-primary">Acadêmica</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-card border border-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tecnólogo em Segurança da Informação</h3>
              <p className="text-muted-foreground mb-2">UNINOVE - Universidade Nove de Julho</p>
              <p className="text-sm text-muted-foreground mb-4">São Paulo - SP | 2016 - 2019</p>
              <Badge variant="outline" className="border-primary/50 text-primary">
                Concluído
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Vamos <span className="text-primary">Conversar</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Interessado em colaboração ou oportunidades? Entre em contato!
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-card border border-border rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <a
                  href="mailto:helder.souza@proton.me"
                  className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-xl hover:bg-primary/10 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">helder.souza@proton.me</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/5511988700322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-accent/5 border border-accent/20 rounded-xl hover:bg-accent/10 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-medium group-hover:text-accent transition-colors">+55 11 9 8870-0322</p>
                  </div>
                </a>
              </div>

              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/helderssan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-[#0077b5] hover:bg-[#0077b5]/90 text-white font-semibold"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Conectar no LinkedIn
                  </Button>
                </a>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Tatuí - SP, Brasil</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-semibold">Hélder Santana</span>
              <span className="text-muted-foreground">| Network & Security Analyst</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="mailto:helder.souza@proton.me" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/helderssan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
