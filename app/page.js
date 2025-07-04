"use client"; // This directive is necessary for state and effects.

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import { Github, Linkedin, Mail, ShieldCheck, Code, Cpu, Server, BrainCircuit, ArrowRight, FileText, Instagram, Sun, Moon, ArrowUp, Home, User, Award, Briefcase } from 'lucide-react';

// --- SVG Icons for services not in lucide-react ---
const WhatsAppIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const DiscordIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v19.056c0 1.368-1.104 2.472-2.46 2.472h-15.08c-1.356 0-2.46-1.104-2.46-2.472v-19.056c0-1.368 1.104-2.472 2.46-2.472h15.08zm-2.883 5.882s-.486-.546-.846-.93c-.576-.612-1.104-1.02-1.104-1.02s-.24-.252-.516-.42c-.228-.144-.384-.228-.384-.228-1.32-.84-3.516-.84-3.516-.84l-.168.18c-1.416.9-2.928 3.42-2.928 3.42s-1.2.12-2.292.852c-1.044.708-1.596 1.98-1.596 1.98s-2.472 7.884-2.58 8.292c-.036.12-.084.264-.084.264s.252.564.444.828c.192.264.408.456.408.456s.384.324 1.032.66c.648.336 1.284.552 1.284.552s.336.144.732.072c.396-.072.792-.384.792-.384s.24-.264.408-.516c.168-.252.288-.504.288-.504s-1.896-1.2-2.256-2.052c-.36-.852-.516-1.992-.516-1.992s.216-.06.408-.132c.192-.072.396-.18.588-.3c.192-.12.384-.264.552-.444.168-.18.312-.384.432-.612.12-.228.204-.48.204-.48s-.024-.012-.048-.024c-.024-.012-.06-.036-.084-.048c-.024-.012-.036-.012-.036-.012s-2.136-1.044-2.232-3.156c-.096-2.112.864-3.864.864-3.864s.48-.696 1.524-.936c1.044-.24 2.16-.024 2.16-.024s.12.084.228.18c.108.096.192.216.192.216s-1.164.384-1.896 1.2c-.732.816-1.2,1.692-1.2,1.692s-.036.084.012.192c.048.108.132.204.228.288.096.084.204.144.324.18.12.036.252.036.384.012.132-.024.264-.072.384-.144.12-.072.228-.168.324-.288.096-.12.168-.264.168-.264s.744-1.14 2.292-1.332c1.548-.192 2.892.48 2.892.48s.12.096.18.204c.06.108.084.24.084.24s-1.236.42-2.028 1.332c-.792.912-1.272 1.8-1.272 1.8s-.012.144.036.288c.048.144.156.264.288.36.132.096.276.156.432.18.156.024.324.012.492-.024.168-.036.336-.096.492-.18.156-.084.3-.204.42-.348.12-.144.204-.3.204-.3s.564-1.008.828-1.932c.264-.924.3-1.836.3-1.836s-.024.012-.036.012z"/>
    </svg>
);

// --- Theme Toggle Component ---
const ThemeToggle = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative group flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 focus:bg-gray-700/80 transition-all duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Toggle Theme
            </span>
        </button>
    );
};

// --- Back to Top Button Component ---
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-24 right-5 z-50">
            <button
                type="button"
                onClick={scrollToTop}
                className={`p-3 rounded-full bg-teal-500 text-white shadow-lg transition-opacity duration-300 hover:bg-teal-600 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                aria-label="Go to top"
            >
                <ArrowUp size={24} />
            </button>
        </div>
    );
};

// --- Dock Navbar Component ---
const DockNavbar = () => {
    const handleScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace(/.*#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const navItems = [
        { href: '#home', icon: <Home size={20} />, label: 'Home' },
        { href: '#about', icon: <User size={20} />, label: 'About' },
        { href: '#skills', icon: <Code size={20} />, label: 'Skills' },
        { href: '#projects', icon: <Briefcase size={20} />, label: 'Projects' },
        { href: '#certifications', icon: <Award size={20} />, label: 'Certs' },
    ];
    
    const socialItems = [
        { href: 'https://github.com/XsakesenseiX', icon: <Github size={20} />, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/muhammad-iqbal-6b3b68298', icon: <Linkedin size={20} />, label: 'LinkedIn' },
    ];

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center justify-center gap-1 md:gap-2 bg-gray-900/80 dark:bg-black/50 backdrop-blur-md p-2 md:p-3 rounded-full border border-gray-700/50 shadow-lg">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="relative group flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 focus:bg-gray-700/80 transition-all duration-300"
                    >
                        {item.icon}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {item.label}
                        </span>
                    </a>
                ))}
                
                <div className="h-6 md:h-8 w-px bg-gray-600 mx-1 md:mx-2"></div>

                {socialItems.map((item) => (
                     <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 focus:bg-gray-700/80 transition-all duration-300"
                    >
                        {item.icon}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {item.label}
                        </span>
                    </a>
                ))}
                
                <ThemeToggle />

            </div>
        </div>
    );
};


// --- Main App Component ---
export default function App() {
  const backgroundImageUrl = '';

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans relative transition-colors duration-300">
      {/* Background Image and Blur Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed z-0 opacity-10 dark:opacity-100"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 w-full h-full bg-gray-900/80 backdrop-blur-sm"></div>
      </div>
      
      {/* Page Content */}
      <div className="relative z-10">
        <main className="px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <InterestsSection />
          <ContactSection />
        </main>
        <Footer />
        <DockNavbar />
        <BackToTopButton />
      </div>
    </div>
  );
}

// --- Hero Section ---
const HeroSection = () => {
    const handleScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace(/.*#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <Image
            src="/profile.jpg"
            alt="Muhammad Iqbal"
            width={128}
            height={128}
            className="rounded-full mx-auto border-4 border-gray-200 dark:border-gray-700 shadow-lg"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-gray-50 dark:to-gray-400 pb-4">
          Cybersecurity Engineer & Programmer
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Building secure systems and analyzing digital threats. Specializing in threat detection, automation, and secure backend development.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="inline-flex items-center gap-2 bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/20">
            Explore Projects <ArrowRight size={20}/>
          </a>
          <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="inline-flex items-center gap-2 bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300">
            View My Research <ShieldCheck size={20}/>
          </a>
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="bg-gray-100/50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            My journey into the world of technology wasn't born from a desire to defend, but to create. I began as a programmer, captivated by the elegant logic and boundless potential of code. It was through the process of building applications and systems from scratch that I encountered a profound truth: to truly secure a creation, one must first master the art of its deconstruction. This realization marked my pivot into the field of cybersecurity and became the guiding principle for my entire approach. I believe the most resilient defenses are not built by just following a checklist, but by those who can truly understand an attacker's mindset—not as an abstract adversary, but as a creative problem-solver who exposes the flaws we overlook.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            This core philosophy actively shapes my focus on several key domains. My fascination with malware analysis stems directly from this; I see each sample not just as a piece of malicious code, but as a complex puzzle and a story of intent. Deconstructing it reveals invaluable lessons in defense. I am similarly drawn to the burgeoning field of IoT security, which I view as the new frontier of vulnerability. It's a critical intersection where the digital and physical worlds collide, presenting unique and urgent challenges that demand a new way of thinking about security. Ultimately, ethical hacking and vulnerability research are where my passion finds its most direct expression—the active, hands-on process of questioning assumptions and testing boundaries to fortify systems against real-world attacks before they happen.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            The common thread weaving through all these interests is my unwavering commitment to expanding my programming toolkit. For me, learning languages like Python for its rapid scripting capabilities, C/C++ for its low-level control, and newer languages like Go or Rust for their modern concurrency and memory safety, is not just about accumulating skills. It's about acquiring new lenses through which to view and solve problems. Each language provides a different level of abstraction and power, essential for everything from automating security tasks to performing deep binary analysis. I am driven by the relentless pace of technological evolution and am eager to apply this multidisciplinary passion to solve complex challenges and contribute to building a more secure digital future.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Skills Section ---
const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:-translate-y-1">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-teal-500/10 p-2 rounded-full text-teal-500 dark:text-teal-400">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2">
          <ArrowRight size={14} className="text-teal-500" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  const skillSets = [
    { icon: <ShieldCheck size={24} />, title: "Cybersecurity", skills: ["Malware Analysis", "Web Security & Vulnerability Assessment", "Intrusion Detection Systems (IDS)", "Network Security", "Firewall Configuration"] },
    { icon: <Code size={24} />, title: "Programming & Backend", skills: ["Python", "JavaScript", "Flask Framework", "TypeScript"] },
    { icon: <Server size={24} />, title: "Infrastructure & Ops", skills: ["Linux & Windows Server", "Server Management", "Automation Scripting", "Git & Version Control"] },
    { icon: <BrainCircuit size={24} />, title: "AI & Data", skills: ["AI", "Data Analysis (NSL-KDD)", "IoT Concepts", "Automation"] },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillSets.map((set, index) => (<SkillCard key={index} {...set} />))}
        </div>
      </div>
    </section>
  );
};

// --- Projects Section (NEW DESIGN) ---
const ProjectCard = ({ title, description, tags, image, link }) => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 group">
            <div className="relative overflow-hidden h-48">
                <Image 
                    src={image} 
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-teal-600 dark:text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-teal-500 hover:underline">
                        View Project <ArrowRight size={16} />
                    </a>
                )}
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    const projects = [
        { 
            id: 'research', 
            title: "Enrichment Prevention Label for IDS Dataset", 
            description: "A research project to programmatically add firewall-based prevention labels to the NSL-KDD dataset, dramatically reducing incident response time.",
            tags: ["Firewall", "Cybersecurity", "Data Analysis"], 
            image: "/research.jpeg", // ADD YOUR IMAGE TO /public/project-ids.png
            link: "https://github.com/XsakesenseiX/ids-research-repo"
        },
        { 
            id: 'whatsapp-bot', 
            title: "Automated WhatsApp Community Hotline", 
            description: "Developed a WhatsApp bot using JavaScript and Typescript to provide instant, automated responses for a computer engineering hotline at AMIKOM University, improving accessibility.",
            tags: ["JavaScript", "TypeScript", "WhatsApp API"], 
            image: "/whatsapp.jpeg", // ADD YOUR IMAGE TO /public/project-bot.png
            link: "https://github.com/XsakesenseiX/botwa_tekkom"
        }
    ];

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="text-center mb-12">
                    <span className="inline-block bg-gray-200 dark:bg-gray-700 text-sm font-medium px-4 py-1 rounded-full mb-4">My Projects</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Check out my latest work</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Here are a few of my favorite projects I&apos;ve worked on.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Certifications Section ---
const CertificationsSection = () => {
  const certifications = [
    { title: "CCNA 1", issuer: "CISCO", date: "2024", link: "/certificate/ccna1.pdf" },
    { title: "CCNA 2", issuer: "CISCO", date: "2024", link: "/certificate/ccna2.pdf" },
    { title: "CCNA 3", issuer: "CISCO", date: "2024", link: "/certificate/ccna3.pdf" },
    { title: "Fundamental Python", issuer: "Coding Studio", date: "2023", link: "/certificate/python_cs.pdf" },
    { title: "Fundamental Command Linux", issuer: "Coding Studio", date: "2023", link: "/certificate/linux_cs.pdf" },
    { title: "Fundamental Jaringan Komputer", issuer: "Coding Studio", date: "2023", link: "/certificate/jarkom_cs.pdf" },
    { title: "Fundamental Algoritma", issuer: "Coding Studio", date: "2023", link: "/certificate/algoritma_cs.pdf" }
  ];
  return (
    <section id="certifications" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Licenses & Certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 group-hover:text-teal-500 dark:group-hover:text-teal-300">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{cert.issuer}</p>
                </div>
                <div className="text-right"><p className="text-gray-500 dark:text-gray-500">{cert.date}</p><ArrowRight size={20} className="text-gray-400 dark:text-gray-600 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-transform duration-300 group-hover:translate-x-1 mt-2" /></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Interests Section ---
const InterestsSection = () => {
  const interests = ["Malware Analyst", "AI", "IoT", "Web Exploitation", "Automation Program"];
  return (
    <section id="interests" className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Areas of Interest</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, index) => (<div key={index} className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3"><p className="text-lg text-gray-700 dark:text-gray-300">{interest}</p></div>))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!</p>
        <a href="mailto:iqbal.mulachela.work@gmail.com" className="inline-flex items-center gap-3 bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-teal-600 transition-all duration-300 text-lg">
          <Mail size={22} /> Say Hello
        </a>
         <div className="mt-12">
            <a href="/muhammad-iqbal-resume.pdf" download className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors">
                <FileText size={20} />Download My Resume
            </a>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github />, href: 'https://github.com/XsakesenseiX' },
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/muhammad-iqbal-6b3b68298' },
    { name: 'Instagram', icon: <Instagram />, href: 'https://instagram.com/baaalle' },
    { name: 'Discord', icon: <DiscordIcon />, href: '#', tooltip: '_lilblyat_' },
    { name: 'WhatsApp', icon: <WhatsAppIcon />, href: 'https://wa.me/6287885522980' },
  ];
  return (
    <footer className="py-20 text-center border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-center items-center gap-6 mb-4">
            {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 relative group" title={link.tooltip ? `${link.name}: ${link.tooltip}` : link.name}>
                    {link.icon}
                </a>
            ))}
        </div>
      <p className="text-gray-500 dark:text-gray-500">&copy; {new Date().getFullYear()} Muhammad Iqbal. All rights reserved.</p>
    </footer>
  );
};