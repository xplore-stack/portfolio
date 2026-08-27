export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center">
      <nav className="w-full max-w-4xl flex items-center justify-between py-6 px-4">
        <span className="text-lg font-bold">SR</span>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main className="w-full max-w-4xl px-4">
        {/* Hero */}
        <section className="py-24 flex flex-col gap-4">
          <p className="text-zinc-500 text-sm">Hello, I&apos;m</p>
          <h1 className="text-5xl font-bold tracking-tight">Sahil Reza</h1>
          <p className="text-2xl text-zinc-400">B.Tech VLSI Engineering Student</p>
          <p className="text-zinc-500 max-w-lg">
            Electronic Engineering (VLSI Design & Technology) student at Galgotias College of
            Engineering and Technology, passionate about semiconductor design, digital systems,
            and building efficient hardware solutions.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#contact" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
              Get in Touch
            </a>
            <a href="#projects" className="px-6 py-3 border border-zinc-700 rounded-full font-medium hover:border-zinc-500 transition-colors">
              View Work
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <div className="text-zinc-400 leading-relaxed max-w-2xl space-y-4">
            <p>
              I am a passionate B.Tech student specializing in VLSI Design & Technology at
              Galgotias College of Engineering and Technology, Greater Noida, Uttar Pradesh, India.
              I have a strong foundation in digital design, Verilog HDL, and semiconductor
              technologies.
            </p>
            <p>
              My interest lies in RTL design, CMOS circuit design, and FPGA-based prototyping. I
              enjoy working with tools like Cadence Virtuoso, Xilinx Vivado, and ModelSim to
              bring digital designs from concept to silicon. I am eager to contribute to the
              semiconductor industry and collaborate on innovative projects.
            </p>
            <p>
              When I&apos;m not debugging Verilog code, you can find me exploring new hardware
              architectures, participating in technical communities, and staying up to date with
              the latest in semiconductor technology.
            </p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-16 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">B.Tech in Electronic Engineering (VLSI Design & Technology)</h3>
                <p className="text-zinc-400 text-sm">Galgotias College of Engineering and Technology</p>
                <p className="text-zinc-500 text-sm">Greater Noida, Uttar Pradesh, India</p>
              </div>
              <span className="text-zinc-500 text-sm">2022 - 2026</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Higher Secondary (XII) - CBSE</h3>
                <p className="text-zinc-400 text-sm">Delhi Public School</p>
                <p className="text-zinc-500 text-sm">Science Stream (Physics, Chemistry, Mathematics)</p>
              </div>
              <span className="text-zinc-500 text-sm">2020 - 2022</span>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Secondary (X) - CBSE</h3>
                <p className="text-zinc-400 text-sm">Delhi Public School</p>
                <p className="text-zinc-500 text-sm">CGPA: 9.2 / 10</p>
              </div>
              <span className="text-zinc-500 text-sm">2019 - 2020</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-zinc-500 mb-3">HDL & Design</h3>
              <div className="flex flex-wrap gap-2">
                {["Verilog", "VHDL", "SystemVerilog", "RTL Design", "VLSI Design", "Digital Electronics", "CMOS Technology"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-900 rounded-lg text-sm text-zinc-300 border border-zinc-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-500 mb-3">Tools & Software</h3>
              <div className="flex flex-wrap gap-2">
                {["Cadence Virtuoso", "Xilinx Vivado", "ModelSim", "Quartus Prime", "MATLAB", "LTspice", "Keil uVision"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-900 rounded-lg text-sm text-zinc-300 border border-zinc-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-500 mb-3">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "C++", "MATLAB", "Assembly (ARM)"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-900 rounded-lg text-sm text-zinc-300 border border-zinc-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-500 mb-3">Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {["FPGA Prototyping", "Static Timing Analysis", "Power Analysis", "Logic Synthesis", "IC Design Flow", "PCB Design"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-zinc-900 rounded-lg text-sm text-zinc-300 border border-zinc-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">VLSI Design Intern</h3>
                  <p className="text-zinc-400 text-sm">Semiconductor Lab, GCET</p>
                </div>
                <span className="text-zinc-500 text-sm">May 2025 - Jul 2025</span>
              </div>
              <ul className="mt-3 text-zinc-400 text-sm space-y-1 list-disc list-inside">
                <li>Designed and simulated a 8x1 multiplexer using CMOS technology in Cadence Virtuoso</li>
                <li>Performed DC analysis and transient simulation to verify circuit functionality</li>
                <li>Optimized layout for reduced power consumption and improved propagation delay</li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Technical Intern</h3>
                  <p className="text-zinc-400 text-sm">Startup Project - IoT Based Smart Agriculture</p>
                </div>
                <span className="text-zinc-500 text-sm">Jan 2025 - Mar 2025</span>
              </div>
              <ul className="mt-3 text-zinc-400 text-sm space-y-1 list-disc list-inside">
                <li>Developed embedded system firmware using C for ESP32 microcontroller</li>
                <li>Integrated soil moisture and temperature sensors with real-time data logging</li>
                <li>Designed PCB layout for sensor interfacing module using KiCad</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="flex flex-col gap-4">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">16-Bit RISC Processor Design</h3>
                <span className="text-zinc-500 text-sm">2025</span>
              </div>
              <p className="text-zinc-400 text-sm mt-2">
                Designed a 16-bit RISC processor with a 5-stage pipeline architecture using Verilog.
                Implemented ALU, register file, control unit, and instruction memory. Verified
                functionality through comprehensive testbench simulation on ModelSim.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Verilog</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">ModelSim</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Pipeline</span>
              </div>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">CMOS Inverter Design</h3>
                <span className="text-zinc-500 text-sm">2024</span>
              </div>
              <p className="text-zinc-400 text-sm mt-2">
                Designed and simulated a CMOS inverter using Cadence Virtuoso. Analyzed voltage
                transfer characteristics (VTC), noise margins, and propagation delays. Optimized
                transistor sizing for balanced rise/fall times.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Cadence Virtuoso</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">CMOS</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Analog Design</span>
              </div>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">4-Bit ALU in Verilog</h3>
                <span className="text-zinc-500 text-sm">2024</span>
              </div>
              <p className="text-zinc-400 text-sm mt-2">
                Implemented a 4-bit ALU using Verilog HDL supporting 8 operations: ADD, SUB, AND,
                OR, XOR, NOT, SHIFT LEFT, and SHIFT RIGHT. Verified through testbench with 100%
                coverage on ModelSim.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Verilog</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Digital Design</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Testbench</span>
              </div>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">FPGA-Based Traffic Light Controller</h3>
                <span className="text-zinc-500 text-sm">2024</span>
              </div>
              <p className="text-zinc-400 text-sm mt-2">
                Designed a traffic light controller using Verilog FSM and implemented it on Xilinx
                Basys 3 FPGA board. Features automatic and manual modes with pedestrian signal
                support.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">FPGA</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Verilog</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Xilinx Vivado</span>
              </div>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">IoT Based Smart Agriculture System</h3>
                <span className="text-zinc-500 text-sm">2023</span>
              </div>
              <p className="text-zinc-400 text-sm mt-2">
                Built an IoT-based monitoring system using ESP32, soil moisture sensors, and DHT11
                temperature sensor. Data is logged to a cloud dashboard with real-time alerts for
                irrigation control.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">ESP32</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">C</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">IoT</span>
              </div>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">Digital Clock using 7-Segment Display</h3>
                <span className="text-zinc-500 text-sm">2023</span>
              </div>
              <p className="text-zinc-400 text-sm mt-2">
                Designed a digital clock displaying hours, minutes, and seconds on 7-segment displays
                using Verilog. Implemented on FPGA with configurable time setting via push buttons.
              </p>
              <div className="flex gap-2 mt-3">
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Verilog</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">FPGA</span>
                <span className="text-xs px-2 py-1 bg-zinc-800 rounded">Digital Design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-16 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <div className="flex flex-col gap-4">
            {[
              { name: "VLSI Design Fundamentals", issuer: "NPTEL / IIT", year: "2024" },
              { name: "Digital Design with Verilog", issuer: "Coursera", year: "2024" },
              { name: "FPGA Design using Xilinx Vivado", issuer: "Xilinx Training", year: "2023" },
              { name: "Introduction to Embedded Systems", issuer: "NPTEL / IIT", year: "2023" },
              { name: "Python for Data Science", issuer: "IBM / Coursera", year: "2022" },
            ].map((cert) => (
              <div key={cert.name} className="flex justify-between items-center p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
                <div>
                  <h3 className="font-medium">{cert.name}</h3>
                  <p className="text-zinc-500 text-sm">{cert.issuer}</p>
                </div>
                <span className="text-zinc-500 text-sm">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 border-t border-zinc-800">
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <ul className="text-zinc-400 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">&#9679;</span>
              <span>Participated in National Level VLSI Design Competition at IIT Roorkee (2024)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">&#9679;</span>
              <span>Won 2nd Prize in College Technical Paper Presentation on &quot;Low Power VLSI Design&quot;</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">&#9679;</span>
              <span>Published a technical paper on &quot;CMOS Optimization Techniques&quot; in College Journal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">&#9679;</span>
              <span>Active member of IEEE Student Branch, GCET</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white mt-1">&#9679;</span>
              <span>Solved 200+ problems on LeetCode (Rating: 1450)</span>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 border-t border-zinc-800 mb-24">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <p className="text-zinc-400 mb-6">Feel free to reach out for collaborations, internships, or just a chat.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <p className="text-zinc-500 text-sm">Email</p>
                <a href="mailto:sahil.reza@example.com" className="text-zinc-300 hover:text-white transition-colors">sahil.reza@example.com</a>
              </div>
              <div>
                <p className="text-zinc-500 text-sm">Phone</p>
                <a href="tel:+919876543210" className="text-zinc-300 hover:text-white transition-colors">+91 98765 43210</a>
              </div>
              <div>
                <p className="text-zinc-500 text-sm">Location</p>
                <p className="text-zinc-300">Greater Noida, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-zinc-500 text-sm">LinkedIn</p>
                <a href="https://linkedin.com/in/sahil-reza" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">linkedin.com/in/sahil-reza</a>
              </div>
              <div>
                <p className="text-zinc-500 text-sm">GitHub</p>
                <a href="https://github.com/sahil-reza" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">github.com/sahil-reza</a>
              </div>
              <div>
                <p className="text-zinc-500 text-sm">LeetCode</p>
                <a href="https://leetcode.com/sahil-reza" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-white transition-colors">leetcode.com/sahil-reza</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-4xl px-4 py-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
        &copy; {new Date().getFullYear()} Sahil Reza. All rights reserved.
      </footer>
    </div>
  );
}
