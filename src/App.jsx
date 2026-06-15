import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Stethoscope,
    Phone,
    Mail,
    MapPin,
    Menu,
    X,
    Activity,
    Brain,
    Apple,
    Ear,
    Bone,
    Target,
    ChevronRight,
    Users,
    Baby,
    Scissors,
    Heart,
    Dumbbell,
    FlaskConical,
    Smile,
    User,
    Building2,
    Wifi,
    ShieldCheck,
    Cpu,
    Network,
    ClipboardList,
    FileText
} from 'lucide-react'

// ─── Navbar ───────────────────────────────────────────────
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Servicios Médicos', href: '#servicios' },
        { name: 'Contacto', href: '#contacto' }
    ]

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-scrolled py-4' : 'nav-transparent py-6'}`}
            style={{ borderRadius: 0 }}
        >
            <div className="max-width-1400 px-8 flex justify-between items-center mx-auto">
                <a href="#hero" className="flex items-center" style={{ opacity: 1 }}>
                    <img src="/assets/logo.png" alt="CMI - Consultorios Médicos Irigoyen" style={{ height: '90px', width: 'auto' }} />
                </a>

                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium tracking-wide"
                            style={{ color: 'var(--text-secondary)' }}
                            onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="btn-primary text-sm"
                        style={{ padding: '10px 24px', fontSize: '0.85rem' }}
                    >
                        Portal del Paciente
                    </a>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ color: 'var(--text-main)', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 text-2xl pt-20 mobile-nav-overlay"
                    >
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{ color: 'var(--text-main)' }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#contacto" className="btn-primary" onClick={() => setIsOpen(false)}>
                            Portal del Paciente
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

// ─── Hero ─────────────────────────────────────────────────
const Hero = () => (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden" id="hero">
        <div className="hero-bg" />
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
            style={{ maxWidth: '48rem' }}
        >
            <span className="badge-accent mb-6" style={{ display: 'inline-block' }}>
                Excelencia médica personalizada
            </span>
            <h1 className="mb-8 leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                Cuidando tu salud, <br />
                <span style={{ color: 'var(--primary)' }}>cuidando tu vida.</span>
            </h1>
            <p className="text-lg mb-12 mx-auto" style={{ color: 'var(--text-dim)', maxWidth: '42rem', lineHeight: '1.8' }}>
                Contamos con especialistas de primer nivel y la tecnología más avanzada para brindarte la atención que tú y tu familia merecen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#servicios" className="btn-primary text-lg px-10 text-center">Nuestros Servicios</a>
                <a href="#nosotros" className="btn-secondary text-lg text-center">Sobre Nosotros</a>
            </div>
        </motion.div>

        {/* Decorative floating circles */}
        <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.15, 0.3, 0.15] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute hidden lg:block"
            style={{ top: '25%', left: '10%' }}
        >
            <div style={{
                width: '8rem', height: '8rem', borderRadius: '50%',
                border: '2px solid rgba(13, 148, 136, 0.15)', filter: 'blur(1px)'
            }} />
        </motion.div>
        <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.1, 0.25, 0.1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute hidden lg:block"
            style={{ bottom: '25%', right: '15%' }}
        >
            <div style={{
                width: '16rem', height: '16rem', borderRadius: '50%',
                border: '2px solid rgba(13, 148, 136, 0.08)', filter: 'blur(2px)'
            }} />
        </motion.div>
    </section>
)

// ─── About ────────────────────────────────────────────────
const About = () => (
    <section id="nosotros" style={{ padding: '80px 5%' }}>
        <div className="flex flex-col lg:flex-row gap-16 items-center" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="w-full lg:w-1/2 relative">
                <div className="overflow-hidden relative z-10" style={{
                    aspectRatio: '4/5', borderRadius: '24px',
                    boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-light)', padding: '0.5rem',
                    background: 'var(--bg-card)'
                }}>
                    <div className="w-full h-full relative overflow-hidden" style={{ borderRadius: '20px', background: '#e5e7eb' }}>
                        <img
                            src="/assets/hero.png"
                            alt="Nuestro Equipo Médico"
                            className="w-full h-full"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
                        <p className="absolute z-20 font-playfair italic text-xl" style={{
                            bottom: '2rem', left: '2rem', right: '2rem', color: 'rgba(255,255,255,0.95)'
                        }}>
                            "El compromiso con la vida es nuestra razón de ser, brindando soluciones humanas para cada paciente."
                        </p>
                    </div>
                </div>


            </div>

            <div className="w-full lg:w-1/2">
                <span className="font-semibold tracking-widest text-xs uppercase mb-4" style={{ color: 'var(--primary)', display: 'block' }}>Sobre Nosotros</span>
                <h2 className="text-4xl mb-8">¿Quiénes Somos?</h2>
                <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    Somos CMI - Consultorios Médicos Irigoyen — un centro médico ambulatorio que combina profesionales certificados, tecnología de última generación y calidez humana en el corazón de Nueva Córdoba.
                </p>
                {/* <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    Nuestro equipo está compuesto por profesionales certificados, dedicados a proporcionar soluciones diagnósticas precisas y tratamientos vanguardistas con gestión digital integral del paciente.
                </p> */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="glass-panel p-8">
                        <h3 className="text-xl mb-4 flex items-center gap-3">
                            <Target style={{ color: 'var(--primary)', width: '1.25rem', height: '1.25rem' }} /> Nuestra Misión
                        </h3>
                        <p style={{ color: 'var(--text-dim)' }}>Transformar la experiencia de salud mediante atención médica excepcional, tecnología de última generación e integridad humana en cada diagnóstico y tratamiento.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

// ─── Identity ─────────────────────────────────────────────
const Identity = () => {
    const [openItem, setOpenItem] = useState(null)

    const objectives = [
        { icon: <Stethoscope size={22} />, title: "Atención Primaria Integral", desc: "Desarrollo de atención médica primaria abarcando todas las etapas del ciclo de salud del paciente." },
        { icon: <Users size={22} />, title: "Múltiples Especialidades", desc: "Acceso a un amplio abanico de especialidades médicas bajo un mismo techo institucional." },
        { icon: <Wifi size={22} />, title: "Telemedicina", desc: "Implementación de tecnología para consultas remotas, seguimientos y gestión de turnos digitales." },
        { icon: <ShieldCheck size={22} />, title: "Calidad Asistencial", desc: "Protocolización médica rigurosa para garantizar estándares de excelencia en cada prestación." },
        { icon: <Cpu size={22} />, title: "Gestión Digital", desc: "Gestión digital integral del paciente con sistemas informáticos y plataformas de inteligencia artificial." },
        { icon: <Network size={22} />, title: "Redes de Prestadores", desc: "Gerenciamiento y administración de redes de prestadores y convenios con obras sociales y prepagas." },
    ]

    const services = [
        "Administración de convenios con obras sociales y prepagas.",
        "Gestión, explotación y administración de consultorios médicos y prestaciones ambulatorias.",
        "Facturación y auditoría médica y administrativa.",
        "Gerenciamiento y administración de redes de prestadores de salud.",
        "Contratación de profesionales de la salud y personal administrativo.",
        "Prestación directa de servicios médicos conforme habilitaciones vigentes.",
        "Desarrollo e implementación de sistemas informáticos, plataformas digitales y soluciones tecnológicas basadas en inteligencia artificial.",
    ]

    return (
        <section id="identidad" style={{ padding: '80px 5%', background: 'var(--bg-section-alt)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-semibold tracking-widest text-xs uppercase mb-4" style={{ color: 'var(--primary)', display: 'block' }}>Identidad Institucional</span>
                    <h2 className="text-4xl">Objetivos Estratégicos</h2>
                </div>

                {/* Objectives grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {objectives.map((obj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="glass-panel p-6 flex gap-4 items-start cursor-pointer"
                            style={{ transition: 'var(--transition)' }}
                        >
                            <div className="icon-square">
                                {obj.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-main)' }}>{obj.title}</h3>
                                <p className="text-sm" style={{ color: 'var(--text-dim)' }}>{obj.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    )
}

// ─── Specialties ──────────────────────────────────────────
const Specialties = () => {
    const list = [
        { name: "Clínica Médica", icon: <Stethoscope size={24} />, desc: "Atención integral de la salud del adulto con diagnóstico y seguimiento personalizado." },
        { name: "Pediatría", icon: <Baby size={24} />, desc: "Cuidado especializado de la salud de niños y adolescentes en todas las etapas." },
        { name: "Neurocirugía", icon: <Brain size={24} />, desc: "Expertos en cirugías complejas del cerebro y sistema nervioso central y periférico." },
        { name: "Cardiología", icon: <Heart size={24} />, desc: "Diagnóstico y tratamiento de enfermedades del corazón con tecnología de vanguardia." },
        { name: "Traumatología", icon: <Bone size={24} />, desc: "Prevención, diagnóstico y tratamiento de lesiones del sistema musculoesquelético." },
        { name: "Medicina del Deporte", icon: <Dumbbell size={24} />, desc: "Abordaje integral de lesiones deportivas y optimización del rendimiento físico." },
        { name: "Cirugía General", icon: <Scissors size={24} />, desc: "Procedimientos quirúrgicos de alta complejidad con los más altos estándares de seguridad." },
        { name: "Ginecología", icon: <User size={24} />, desc: "Atención integral de la salud femenina en todas las etapas de la vida." },
        { name: "Obstetricia", icon: <Baby size={24} />, desc: "Acompañamiento profesional durante el embarazo, parto y puerperio." },
        { name: "ORL", icon: <Ear size={24} />, desc: "Especialistas en el tratamiento avanzado de oído, nariz y garganta." },
        { name: "Diabetología", icon: <FlaskConical size={24} />, desc: "Manejo integral y seguimiento personalizado de la diabetes y sus complicaciones." },
        { name: "Nutrición", icon: <Apple size={24} />, desc: "Planes nutricionales personalizados para un rendimiento óptimo y salud duradera." },
        { name: "Psiquiatría", icon: <Brain size={24} />, desc: "Diagnóstico y tratamiento de trastornos mentales con un enfoque humano e integral." },
        { name: "Psicología", icon: <Smile size={24} />, desc: "Apoyo psicoterapéutico para el bienestar emocional y la salud mental." }
    ]

    return (
        <section id="servicios" style={{ padding: '80px 5%' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div className="text-center mb-16">
                    <span className="font-semibold tracking-widest text-xs uppercase mb-4" style={{ color: 'var(--primary)', display: 'block' }}>Servicios de Excelencia</span>
                    <h2 className="text-4xl">Servicios Médicos</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {list.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -6 }}
                            className="glass-panel p-8 text-center cursor-pointer"
                            style={{ transition: 'var(--transition)' }}
                        >
                            <div className="mx-auto mb-6" style={{
                                width: '4rem', height: '4rem', borderRadius: 'var(--radius-lg)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: 'var(--primary-subtle)', color: 'var(--primary)',
                                transition: 'var(--transition)'
                            }}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl mb-4" style={{ color: 'var(--text-main)' }}>{item.name}</h3>
                            <p className="text-sm mb-6" style={{ color: 'var(--text-dim)' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── Contact ──────────────────────────────────────────────
const Contact = () => (
    <section id="contacto" style={{ padding: '80px 5%', background: 'var(--bg-section-alt)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="text-center mb-16">
                <span className="font-semibold tracking-widest text-xs uppercase mb-4" style={{ color: 'var(--primary)', display: 'block' }}>Estamos para vos</span>
                <h2 className="text-4xl">Contactanos</h2>
            </div>

            <div className="glass-panel overflow-hidden relative" style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
                <div className="absolute top-0 right-0 z-0 hidden lg:block contact-decoration" style={{
                    width: '33%', height: '100%', transform: 'skewX(-12deg)', transformOrigin: 'top right'
                }} />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                    {/* Phone */}
                    <div className="glass-panel p-10 flex flex-col items-center text-center" style={{ transition: 'var(--transition)' }}>
                        <div className="icon-circle mb-6" style={{ width: '4rem', height: '4rem' }}>
                            <Phone size={22} />
                        </div>
                        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-dim)' }}>WhatsApp / Tel</p>
                        <a className="text-2xl font-semibold select-none" style={{ color: 'var(--text-main)' }}>351 707 0030</a>
                        <a className="text-2xl font-semibold select-none" style={{ color: 'var(--text-main)', marginTop: '0.25rem' }}>351 595 5800</a>
                    </div>

                    {/* Email */}
                    <div className="glass-panel p-10 flex flex-col items-center text-center" style={{ transition: 'var(--transition)' }}>
                        <div className="icon-circle mb-6" style={{ width: '4rem', height: '4rem' }}>
                            <Mail size={22} />
                        </div>
                        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-dim)' }}>Email</p>
                        <p className="text-xl font-semibold" style={{ color: 'var(--text-main)' }}>contacto@consultoriosirigoyen.com</p>
                    </div>

                    {/* Location */}
                    <div className="glass-panel p-10 flex flex-col items-center text-center" style={{ transition: 'var(--transition)' }}>
                        <div className="icon-circle mb-6" style={{ width: '4rem', height: '4rem' }}>
                            <MapPin size={22} />
                        </div>
                        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--text-dim)' }}>Ubicación</p>
                        <p className="text-lg font-semibold" style={{ color: 'var(--text-main)' }}>Hipólito Yrigoyen 31 Piso 8 <br /> Nueva Córdoba</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

// ─── Footer ───────────────────────────────────────────────
const Footer = () => (
    <footer className="footer-dark" style={{ padding: '3.5rem 0', marginTop: 0 }}>
        <div className="max-width-1400 px-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
                <img src="/assets/logo.png" alt="CMI - Consultorios Médicos Irigoyen" style={{ height: '108px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="text-sm" style={{ color: 'var(--text-on-dark-dim)' }}>© 2026 CMI - Consultorios Médicos Irigoyen. Todos los derechos reservados.</p>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--primary-light)' }}>Excelencia Médica en Nueva Córdoba</p>
            <div className="flex gap-6">
                <a href="#" style={{ color: 'var(--text-on-dark-dim)' }}>Instagram</a>
                <a href="#" style={{ color: 'var(--text-on-dark-dim)' }}>LinkedIn</a>
                <a href="#" style={{ color: 'var(--text-on-dark-dim)' }}>WhatsApp</a>
            </div>
        </div>
    </footer>
)

// ─── App ──────────────────────────────────────────────────
function App() {
    return (
        <div className="app-container" style={{ background: 'var(--bg-main)' }}>
            <Navbar />
            <Hero />
            <About />
            <Identity />
            <Specialties />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
