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
    User
} from 'lucide-react'

// Sections components
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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
            <div className="max-width-1400 px-8 flex justify-between items-center mx-auto">
                <div className="text-2xl font-bold flex items-center gap-2">
                    <Activity className="text-primary" />
                    <span className="font-playfair italic">CMI</span><span className="text-primary text-sm font-sans tracking-widest ml-2">CONSULTORIOS IRIGOYEN</span>
                </div>

                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary tracking-wide transition-colors">
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                </div>

                {/* Mobile menu toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed inset-0 h-screen bg-slate-900 z-40 flex flex-col items-center justify-center gap-8 text-2xl pt-20"
                    >
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-primary"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

const Hero = () => (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden" id="hero">
        <div className="hero-bg" />
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
        >
            <span className="px-4 py-1 rounded-full border border-primary/30 text-xs font-semibold tracking-widest text-primary mb-6 inline-block bg-primary/5 uppercase">
                Excelencia médica personalizada
            </span>
            <h1 className="text-6xl md:text-8xl mb-8 leading-tight">
                Tu salud es nuestra <br />
                <span className="text-primary italic">prioridad absoluta</span>
            </h1>
            <p className="text-text-dim text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Contamos con especialistas de primer nivel y la tecnología más avanzada para brindarte la atención que tú y tu familia merecen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-10">Nuestros Servicios</button>
                <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all text-lg font-medium">Sobre Nosotros</button>
            </div>
        </motion.div>

        {/* Floating elements for "high-end" vibe */}
        <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/4 left-[10%] opacity-20 hidden lg:block"
        >
            <div className="w-32 h-32 rounded-full border-2 border-primary/20 blur-sm" />
        </motion.div>
        <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-[15%] opacity-20 hidden lg:block"
        >
            <div className="w-64 h-64 rounded-full border-2 border-primary/10 blur-md" />
        </motion.div>
    </section>
)

const About = () => (
    <section id="nosotros" className="py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden glass-panel p-4 relative z-10">
                    <div className="w-full h-full rounded-[30px] bg-slate-800 relative overflow-hidden">
                        <img
                            src="/assets/hero.png"
                            alt="Nuestro Equipo Médico"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent z-10" />
                        <p className="absolute bottom-8 left-8 right-8 z-20 text-white/90 font-playfair italic text-xl">
                            "El compromiso con la vida es nuestra razón de ser, brindando soluciones humanas para cada paciente."
                        </p>
                    </div>
                </div>
                <div className="absolute -bottom-8 -right-8 glass-panel p-6 z-20 max-w-xs animate-fade hidden sm:block">
                    <div className="flex gap-4 items-center">
                        <div className="p-3 bg-primary/20 rounded-xl text-primary"><Users /></div>
                        <div>
                            <p className="text-3xl font-bold">+15k</p>
                            <p className="text-xs text-text-dim uppercase tracking-widest font-semibold">Pacientes Felices</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-4 block">Sobre Nosotros</span>
                <h2 className="text-4xl md:text-5xl mb-8">¿Quiénes Somos?</h2>
                <p className="text-text-dim text-lg mb-6">
                    CMI - Consultorios Médicos Irigoyen es un centro de salud líder en Nueva Córdoba, fundado con el objetivo de humanizar la práctica de la medicina. Durante más de una década, hemos combinado la calidez humana con el rigor científico.
                </p>
                <p className="text-text-dim text-lg mb-8">
                    Nuestro equipo está compuesto por profesionales certificados internacionalmente, dedicados a proporcionar soluciones diagnósticas precisas y tratamientos vanguardistas.
                </p>
                <div className="grid grid-cols-1 gap-6">
                    <div className="glass-panel p-8">
                        <h3 className="text-2xl mb-4 flex items-center gap-3"><Target className="text-primary w-6 h-6" /> Nuestra Misión</h3>
                        <p className="text-text-dim text-lg">Transformar la vida de nuestros pacientes mediante una atención médica excepcional, basada en la integridad y el respeto constante por el bienestar humano.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

const Specialties = () => {
    const list = [
        { name: "Clínica Médica", icon: <Stethoscope />, desc: "Atención integral de la salud del adulto con diagnóstico y seguimiento personalizado." },
        { name: "Pediatría", icon: <Baby />, desc: "Cuidado especializado de la salud de niños y adolescentes en todas las etapas." },
        { name: "Neurocirugía", icon: <Brain />, desc: "Expertos en cirugías complejas del cerebro y sistema nervioso central y periférico." },
        { name: "Cardiología", icon: <Heart />, desc: "Diagnóstico y tratamiento de enfermedades del corazón con tecnología de vanguardia." },
        { name: "Traumatología", icon: <Bone />, desc: "Prevención, diagnóstico y tratamiento de lesiones del sistema musculoesquelético." },
        { name: "Medicina del Deporte", icon: <Dumbbell />, desc: "Abordaje integral de lesiones deportivas y optimización del rendimiento físico." },
        { name: "Cirugía General", icon: <Scissors />, desc: "Procedimientos quirúrgicos de alta complejidad con los más altos estándares de seguridad." },
        { name: "Ginecología", icon: <User />, desc: "Atención integral de la salud femenina en todas las etapas de la vida." },
        { name: "Obstetricia", icon: <Baby />, desc: "Acompañamiento profesional durante el embarazo, parto y puerperio." },
        { name: "ORL", icon: <Ear />, desc: "Especialistas en el tratamiento avanzado de oído, nariz y garganta." },
        { name: "Diabetología", icon: <FlaskConical />, desc: "Manejo integral y seguimiento personalizado de la diabetes y sus complicaciones." },
        { name: "Nutrición", icon: <Apple />, desc: "Planes nutricionales personalizados para un rendimiento óptimo y salud duradera." },
        { name: "Psiquiatría", icon: <Brain />, desc: "Diagnóstico y tratamiento de trastornos mentales con un enfoque humano e integral." },
        { name: "Psicología", icon: <Smile />, desc: "Apoyo psicoterapéutico para el bienestar emocional y la salud mental." }
    ]

    return (
        <section id="servicios" className="py-24 bg-slate-900/50">
            <div className="text-center mb-16">
                <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-4 block">Servicios de Excelencia</span>
                <h2 className="text-4xl md:text-5xl">Servicios Médicos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {list.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -10 }}
                        className="glass-panel p-8 text-center group cursor-pointer"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl mb-4">{item.name}</h3>
                        <p className="text-text-dim text-sm mb-6">{item.desc}</p>
                        <div className="flex items-center justify-center gap-1 text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            SABER MÁS <ChevronRight size={14} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

const Contact = () => (
    <section id="contacto" className="py-24">
        <div className="glass-panel p-12 lg:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 z-0 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                <div className="glass-panel p-10 flex flex-col items-center text-center group hover:bg-primary/5 transition-all">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"><Phone /></div>
                    <p className="text-xs text-text-dim uppercase tracking-widest mb-2">WhatsApp / Tel</p>
                    <p className="text-2xl font-semibold">351 707 0030</p>
                </div>

                <div className="glass-panel p-10 flex flex-col items-center text-center group hover:bg-primary/5 transition-all">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"><Mail /></div>
                    <p className="text-xs text-text-dim uppercase tracking-widest mb-2">Email</p>
                    <p className="text-xl font-semibold">contacto@consultoriosirigoyen.com</p>
                </div>

                <div className="glass-panel p-10 flex flex-col items-center text-center group hover:bg-primary/5 transition-all">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"><MapPin /></div>
                    <p className="text-xs text-text-dim uppercase tracking-widest mb-2">Ubicación</p>
                    <p className="text-lg font-semibold">Hipólito Yrigoyen 31 Piso 8 <br /> Nueva Córdoba</p>
                </div>
            </div>
        </div>
    </section>
)

const Footer = () => (
    <footer className="py-12 border-t border-white/5 mt-20">
        <div className="max-width-1400 px-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold flex items-center gap-2">
                <Activity className="text-primary" />
                <span className="font-playfair italic">CMI</span><span className="text-primary text-sm font-sans tracking-widest ml-2">CONSULTORIOS IRIGOYEN</span>
            </div>
            <p className="text-text-dim text-sm">© 2026 CMI - Consultorios Médicos Irigoyen. Todos los derechos reservados.</p>
            <p className="text-primary text-xs font-semibold uppercase tracking-widest">Excelencia Médica en Nueva Córdoba</p>
            <div className="flex gap-6">
                <a href="#" className="text-text-dim hover:text-primary">Instagram</a>
                <a href="#" className="text-text-dim hover:text-primary">LinkedIn</a>
                <a href="#" className="text-text-dim hover:text-primary">WhatsApp</a>
            </div>
        </div>
    </footer>
)

function App() {
    return (
        <div className="app-container selection:bg-primary selection:text-white">
            <Navbar />
            <Hero />
            <About />
            <Specialties />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
