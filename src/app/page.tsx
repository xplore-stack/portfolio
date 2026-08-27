"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "./theme-context";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const children = el.querySelectorAll(".fade-up");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

function SunIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const containerRef = useFadeUp();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center">
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur border-b" : "bg-transparent"
        }`}
        style={scrolled ? { backgroundColor: "var(--nav-bg)", borderColor: "var(--nav-border)" } : {}}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
          <a href="#" className="text-lg font-bold gradient-text">Sahil Reza</a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="animated-underline hover:text-[var(--foreground)] transition-colors">
                {link.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="theme-toggle p-2 rounded-full hover:bg-[var(--tag-bg)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile right side */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="theme-toggle p-2 rounded-full hover:bg-[var(--tag-bg)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="flex flex-col gap-1.5 p-2 -mr-2 relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{ backgroundColor: "var(--foreground)", transform: mobileMenuOpen ? "rotate(45deg) translateY(8px)" : "" }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{ backgroundColor: "var(--foreground)", opacity: mobileMenuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 transition-all duration-300"
                style={{ backgroundColor: "var(--foreground)", transform: mobileMenuOpen ? "rotate(-45deg) translateY(-8px)" : "" }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden fixed inset-0 z-40 nav-blur transition-all duration-500"
        style={{
          backgroundColor: "var(--mobile-menu-bg)",
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl transition-all duration-300"
              style={{
                color: "var(--foreground)",
                transitionDelay: mobileMenuOpen ? `${i * 60}ms` : "0ms",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <main ref={containerRef} className="w-full max-w-4xl px-4 sm:px-6">
        {/* Hero */}
        <section className="glow relative min-h-[85vh] flex flex-col justify-center gap-5 py-20">
          <div className="relative z-10 flex flex-col gap-5">
            <div className="fade-up flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              <p className="text-sm tracking-wide uppercase" style={{ color: "var(--muted)" }}>Hello, I&apos;m</p>
            </div>
            <h1 className="fade-up text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight gradient-text">
              Sahil Reza
            </h1>
            <p className="fade-up text-lg sm:text-2xl font-light" style={{ color: "var(--muted-light)" }}>
              B.Tech VLSI Engineering Student
            </p>
            <p className="fade-up max-w-lg text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Electronic Engineering (VLSI Design & Technology) student at Galgotias College of
              Engineering and Technology, passionate about semiconductor design, digital systems,
              and building efficient hardware solutions.
            </p>
            <div className="fade-up flex flex-wrap gap-4 mt-2">
              <a
                href="#contact"
                className="group px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
                style={{ backgroundColor: "var(--foreground)", color: "var(--background)" }}
              >
                Get in Touch
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border rounded-full font-medium transition-all duration-300 text-sm sm:text-base hover:opacity-80"
                style={{ borderColor: "var(--card-border)", color: "var(--foreground)" }}
              >
                View Work
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 sm:py-24">
          <div className="section-divider mb-16 sm:mb-24" />
          <h2 className="fade-up text-xl sm:text-2xl font-bold mb-8">
            <span className="text-sm font-normal block mb-2" style={{ color: "var(--muted)" }}>01</span>
            About
          </h2>
          <div className="leading-relaxed max-w-2xl space-y-5 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            <p className="fade-up">
              I am a passionate B.Tech student specializing in VLSI Design & Technology at
              Galgotias College of Engineering and Technology, Greater Noida, Uttar Pradesh, India.
              I have a strong foundation in digital design, Verilog HDL, and semiconductor
              technologies.
            </p>
            <p className="fade-up">
              My interest lies in RTL design, CMOS circuit design, and FPGA-based prototyping. I
              enjoy working with tools like Cadence Virtuoso, Xilinx Vivado, and ModelSim to
              bring digital designs from concept to silicon. I am eager to contribute to the
              semiconductor industry and collaborate on innovative projects.
            </p>
            <p className="fade-up">
              When I&apos;m not debugging Verilog code, you can find me exploring new hardware
              architectures, participating in technical communities, and staying up to date with
              the latest in semiconductor technology.
            </p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-16 sm:py-24">
          <div className="section-divider mb-16 sm:mb-24" />
          <h2 className="fade-up text-xl sm:text-2xl font-bold mb-8">
            <span className="text-sm font-normal block mb-2" style={{ color: "var(--muted)" }}>02</span>
            Education
          </h2>
          <div className="flex flex-col gap-6 stagger-children">
            {[
              {
                degree: "B.Tech in Electronic Engineering (VLSI Design & Technology)",
                school: "Galgotias College of Engineering and Technology",
                location: "Greater Noida, Uttar Pradesh, India",
                year: "2022 - 2026",
              },
              {
                degree: "Higher Secondary (XII) - CBSE",
                school: "Delhi Public School",
                location: "Science Stream (Physics, Chemistry, Mathematics)",
                year: "2020 - 2022",
              },
              {
                degree: "Secondary (X) - CBSE",
                school: "Delhi Public School",
                location: "CGPA: 9.2 / 10",
                year: "2019 - 2020",
              },
            ].map((edu) => (
              <div
                key={edu.degree}
                className="fade-up group flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 p-4 sm:p-5 rounded-xl border border-transparent hover:border-[var(--card-border)] transition-all duration-300"
                style={{ ["--tw-border-opacity" as string]: 1 }}
              >
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">{edu.degree}</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>{edu.school}</p>
                  <p className="text-sm" style={{ color: "var(--muted-light)" }}>{edu.location}</p>
                </div>
                <span className="text-sm shrink-0" style={{ color: "var(--muted-light)" }}>{edu.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 sm:py-24">
          <div className="section-divider mb-16 sm:mb-24" />
          <h2 className="fade-up text-xl sm:text-2xl font-bold mb-8">
            <span className="text-sm font-normal block mb-2" style={{ color: "var(--muted)" }}>03</span>
            Skills
          </h2>
          <div className="space-y-8 stagger-children">
            {[
              {
                category: "HDL & Design",
                skills: ["Verilog", "VHDL", "SystemVerilog", "RTL Design", "VLSI Design", "Digital Electronics", "CMOS Technology"],
              },
              {
                category: "Tools & Software",
                skills: ["Cadence Virtuoso", "Xilinx Vivado", "ModelSim", "Quartus Prime", "MATLAB", "LTspice", "Keil uVision"],
              },
              {
                category: "Programming",
                skills: ["Python", "C", "C++", "MATLAB", "Assembly (ARM)"],
              },
              {
                category: "Concepts",
                skills: ["FPGA Prototyping", "Static Timing Analysis", "Power Analysis", "Logic Synthesis", "IC Design Flow", "PCB Design"],
              },
            ].map((group) => (
              <div key={group.category} className="fade-up">
                <h3 className="text-sm font-medium mb-3" style={{ color: "var(--muted-light)" }}>{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag px-3 py-1.5 rounded-lg text-xs sm:text-sm cursor-default"
                      style={{
                        backgroundColor: "var(--tag-bg)",
                        borderColor: "var(--tag-border)",
                        color: "var(--foreground)",
                        borderWidth: 1,
                        borderStyle: "solid",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 sm:py-24">
          <div className="section-divider mb-16 sm:mb-24" />
          <h2 className="fade-up text-xl sm:text-2xl font-bold mb-8">
            <span className="text-sm font-normal block mb-2" style={{ color: "var(--muted)" }}>04</span>
            Experience
          </h2>
          <div className="flex flex-col gap-6 stagger-children">
            <div
              className="fade-up card-hover p-5 sm:p-6 rounded-xl"
              style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">VLSI Design Intern</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>Semiconductor Lab, GCET</p>
                </div>
                <span className="text-sm shrink-0" style={{ color: "var(--muted-light)" }}>May 2025 - Jul 2025</span>
              </div>
              <ul className="mt-4 text-sm space-y-2 list-none" style={{ color: "var(--muted)" }}>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 text-xs">&#9679;</span>
                  <span>Designed and simulated a 8x1 multiplexer using CMOS technology in Cadence Virtuoso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 text-xs">&#9679;</span>
                  <span>Performed DC analysis and transient simulation to verify circuit functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 text-xs">&#9679;</span>
                  <span>Optimized layout for reduced power consumption and improved propagation delay</span>
                </li>
              </ul>
            </div>
            <div
              className="fade-up card-hover p-5 sm:p-6 rounded-xl"
              style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Technical Intern</h3>
                  <p className="text-sm" style={{ color: "var(--muted)" }}>Startup Project - IoT Based Smart Agriculture</p>
                </div>
                <span className="text-sm shrink-0" style={{ color: "var(--muted-light)" }}>Jan 2025 - Mar 2025</span>
              </div>
              <ul className="mt-4 text-sm space-y-2 list-none" style={{ color: "var(--muted)" }}>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 text-xs">&#9679;</span>
                  <span>Developed embedded system firmware using C for ESP32 microcontroller</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 text-xs">&#9679;</span>
                  <span>Integrated soil moisture and temperature sensors with real-time data logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1.5 text-xs">&#9679;</span>
                  <span>Designed PCB layout for sensor interfacing module using KiCad</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 sm:py-24">
          <div className="section-divider mb-16 sm:mb-24" />
          <h2 className="fade-up text-xl sm:text-2xl font-bold mb-8">
            <span className="text-sm font-normal block mb-2" style={{ color: "var(--muted)" }}>05</span>
            Projects
          </h2>
          <div className="flex flex-col gap-4 stagger-children">
            {[
              {
                title: "16-Bit RISC Processor Design",
                year: "2025",
                desc: "Designed a 16-bit RISC processor with a 5-stage pipeline architecture using Verilog. Implemented ALU, register file, control unit, and instruction memory.",
                tags: ["Verilog", "ModelSim", "Pipeline"],
              },
              {
                title: "CMOS Inverter Design",
                year: "2024",
                desc: "Designed and simulated a CMOS inverter using Cadence Virtuoso. Analyzed voltage transfer characteristics, noise margins, and propagation delays.",
                tags: ["Cadence Virtuoso", "CMOS", "Analog Design"],
              },
              {
                title: "4-Bit ALU in Verilog",
                year: "2024",
                desc: "Implemented a 4-bit ALU supporting 8 operations: ADD, SUB, AND, OR, XOR, NOT, SHIFT LEFT, and SHIFT RIGHT with 100% testbench coverage.",
                tags: ["Verilog", "Digital Design", "Testbench"],
              },
              {
                title: "FPGA-Based Traffic Light Controller",
                year: "2024",
                desc: "Designed a traffic light controller using Verilog FSM on Xilinx Basys 3 FPGA with automatic and manual modes.",
                tags: ["FPGA", "Verilog", "Xilinx Vivado"],
              },
              {
                title: "IoT Based Smart Agriculture System",
                year: "2023",
                desc: "Built an IoT monitoring system using ESP32 with soil moisture and DHT11 sensors, cloud dashboard, and real-time alerts.",
                tags: ["ESP32", "C", "IoT"],
              },
              {
                title: "Digital Clock using 7-Segment Display",
                year: "2023",
                desc: "Designed a digital clock on 7-segment displays using Verilog with configurable time setting via push buttons on FPGA.",
                tags: ["Verilog", "FPGA", "Digital Design"],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="fade-up card-hover p-5 sm:p-6 rounded-xl group"
                style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--card-border)" }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                  <span className="text-sm shrink-0" style={{ color: "var(--muted-light)" }}>{project.year}</span>
                </div>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--muted)" }}>
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: "var(--tag-bg)", color: "var(--muted)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-16 sm:py-24">
          <div className="section-divider mb-16 sm:mb-24" />
          <h2 className="fade-up text-xl sm:text-2xl font-bold mb-8">
            <span className="text-sm font-normal block mb-2" style={{ color: "var(--muted)" }}>06</span>
            Certifications
          </h2>
          <div className="flex flex-col gap-3 stagger-children">
            {[
              { name: "VLSI Design Fundamentals", issuer: "NPTEL / IIT", year: "2024" },
              { name: "Digital Design with Verilog", issuer: "Coursera", year: "2024" },
              { name: "FPGA Design using Xilinx Vivado", issuer: "Xilinx Training", year: "2023" },
              { name: "Introduction to Embedded Systems", issuer: "NPTEL / IIT", year: "2023" },
              { name: "Python for Data Science", issuer: "IBM / Coursera", year: "2022" },
            ].map((cert) => (
              <div
                key={cert.name}
                className="fade-up group flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-xl gap-2 sm:gap-4 transition-all duration-300"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
              >
                <div>
                  <h3 className="font-medium text-sm sm:text-base">{cert.name}</h3>
                  <p className="text-sm" style={{ color: "var(--muted-light)" }}>{cert.issuer}</p>
                </div>
                <span className="text-sm shrink-0" style={{ color: "var(--muted-light)" }}>{cert.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 sm:py-24">
          <div className="section-divider mb-16 sm:mb-24" />
          <h2 className="fade-up text-xl sm:text-2xl font-bold mb-8">
            <span className="text-sm font-normal block mb-2" style={{ color: "var(--muted)" }}>07</span>
            Achievements
          </h2>
          <ul className="space-y-4 text-sm sm:text-base stagger-children" style={{ color: "var(--muted)" }}>
            {[
              "Participated in National Level VLSI Design Competition at IIT Roorkee (2024)",
              'Won 2nd Prize in College Technical Paper Presentation on "Low Power VLSI Design"',
              'Published a technical paper on "CMOS Optimization Techniques" in College Journal',
              "Active member of IEEE Student Branch, GCET",
              "Solved 200+ problems on LeetCode (Rating: 1450)",
            ].map((item) => (
              <li key={item} className="fade-up flex items-start gap-3 group">
                <span className="text-emerald-400 mt-1 text-xs pulse-dot">&#9679;</span>
                <span className="group-hover:text-[var(--foreground)] transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24 mb-16 sm:mb-24">
          <div className="section-divider mb-16 sm:mb-24" />
          <h2 className="fade-up text-xl sm:text-2xl font-bold mb-4">
            <span className="text-sm font-normal block mb-2" style={{ color: "var(--muted)" }}>08</span>
            Contact
          </h2>
          <p className="fade-up mb-8 text-sm sm:text-base" style={{ color: "var(--muted)" }}>Feel free to reach out for collaborations, internships, or just a chat.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 stagger-children">
            <div className="fade-up space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--muted-light)" }}>Email</p>
                <a href="mailto:sahil.reza@example.com" className="hover:text-[var(--foreground)] transition-colors text-sm sm:text-base break-all animated-underline" style={{ color: "var(--muted)" }}>sahil.reza@example.com</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--muted-light)" }}>Phone</p>
                <a href="tel:+919876543210" className="hover:text-[var(--foreground)] transition-colors text-sm sm:text-base animated-underline" style={{ color: "var(--muted)" }}>+91 98765 43210</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--muted-light)" }}>Location</p>
                <p className="text-sm sm:text-base" style={{ color: "var(--muted)" }}>Greater Noida, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="fade-up space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--muted-light)" }}>LinkedIn</p>
                <a href="https://linkedin.com/in/sahil-reza" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors text-sm sm:text-base break-all animated-underline" style={{ color: "var(--muted)" }}>linkedin.com/in/sahil-reza</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--muted-light)" }}>GitHub</p>
                <a href="https://github.com/sahil-reza" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors text-sm sm:text-base break-all animated-underline" style={{ color: "var(--muted)" }}>github.com/sahil-reza</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--muted-light)" }}>LeetCode</p>
                <a href="https://leetcode.com/sahil-reza" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors text-sm sm:text-base break-all animated-underline" style={{ color: "var(--muted)" }}>leetcode.com/sahil-reza</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-4xl px-4 sm:px-6 py-8 border-t text-center text-sm" style={{ borderColor: "var(--divider)", color: "var(--muted-light)" }}>
        &copy; {new Date().getFullYear()} Sahil Reza. All rights reserved.
      </footer>
    </div>
  );
}
