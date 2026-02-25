"use client";

import React from 'react';
import { 
  Network, Server, BarChart3, Terminal, Cpu, Mail, Linkedin, 
  MapPin, GraduationCap, Briefcase, Award, CheckCircle2, Users, Clock, Globe,
  ArrowUpRight, ExternalLink, Shield, Github, Search, X, 
  Code2, Database, Settings, BookOpen, Microscope, Zap, ChevronDown, Binary
} from 'lucide-react';

export default function MarinaFullPortfolio() {
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);
  
  // Fungsi scroll halus untuk navigasi
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-sans selection:bg-blue-500/30">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* --- FLOATING NAVIGATION --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full hidden md:flex items-center gap-8 shadow-2xl">
        <button onClick={() => scrollTo('home')} className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition">Home</button>
        <button onClick={() => scrollTo('projects')} className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition">Projects</button>
        <button onClick={() => scrollTo('experience')} className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition">Experience</button>
        <button onClick={() => scrollTo('education')} className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition">Education</button>
        <button onClick={() => scrollTo('contact')} className="text-[10px] font-black uppercase tracking-widest hover:text-blue-500 transition">Contact</button>
      </nav>

      {/* --- LAYOUT 1: SUMMARY (HERO) --- */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10 border-b border-white/5">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Isi Summary Kamu */}
        <div className="flex-1 bg-white/[0.03] backdrop-blur-xl rounded-[4rem] p-10 md:p-16 border border-white/10 relative overflow-hidden order-2 md:order-1">
          {/* ... */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.85]">
            Marina <br/><span className="text-blue-600">Irdayanti.</span>
          </h1>
            
            <p className="text-slate-400 leading-relaxed text-base md:text-xl font-medium max-w-xl">
              Information Technology professional specializing in <span className="text-white font-bold">Informatics Engineering</span>. 
              Expert in managing complex network infrastructures, digital transformation, and strategic technical alignment 
              to drive business objectives.
            </p>
            
            <div className="flex gap-8 mt-10">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Location</span>
              <span className="text-sm font-bold text-white">Surabaya, ID</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Current Role</span>
              <span className="text-sm font-bold text-white">Asst. Network Engineer</span>
            </div>
          </div>
        </div>

        {/* Kolom Foto (Kanan - Bingkai Bulat) */}
        <div className="flex-shrink-0 order-1 md:order-2">
          <div className="relative group">
            {/* Glow Effect di belakang foto */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full group-hover:bg-blue-600/30 transition-all"></div>
            
            {/* Bingkai Bulat */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 p-2 backdrop-blur-sm overflow-hidden group">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/20">
                <img 
                  src="/foto-profil.jpg" 
                  onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Marina+Irdayanti&background=1e293b&color=fff&size=512"; }}
                />
              </div>
            </div>
            
            {/* Badge Melingkar Kecil (Opsional) */}
            <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-4 rounded-full shadow-xl border-4 border-[#05070a]">
              <Shield size={24} strokeWidth={2.5} />
            </div>
          </div>
        </div>

      </div>
      
      <div className="absolute bottom-10 animate-bounce text-slate-600">
        <ChevronDown size={24} />
      </div>
    </section>

      {/* --- LAYOUT 2: PROJECTS (ALLURE NEXUS) --- */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10 border-b border-white/5 bg-[#0a0c10]">
        <div className="max-w-6xl w-full">
          
          {/* Header Section sesuai referensi */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 px-4 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 text-white">
                <Shield size={24}/>
              </div>
              <div>
                <h2 className="text-3xl font-black italic tracking-tighter text-white uppercase leading-none">Projects.</h2>
                <p className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-[0.2em]">Featured Development Showcase</p>
              </div>
            </div>
            <div className="bg-blue-600/10 border border-blue-500/20 px-6 py-2 rounded-full flex items-center gap-3 text-blue-400 font-black text-xs cursor-default">
              Parallax View <ChevronDown size={14} className="animate-pulse" />
            </div>
          </div>

          {/* Project Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Kartu Utama - Allure Nexus */}
            <div className="md:col-span-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-10 md:p-14 relative overflow-hidden group shadow-2xl">
              <div className="relative z-20 h-full flex flex-col justify-between">
                <div className="max-w-md">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-blue-900 text-[10px] font-black uppercase tracking-widest mb-6 shadow-xl">
                    <Globe size={12} /> Asset Management System
                  </div>
                  <h3 className="text-6xl font-black italic mb-4 tracking-tighter text-white uppercase leading-none italic">Allure Nexus</h3>
                  <p className="text-blue-100/80 text-sm md:text-base mb-8 font-medium leading-relaxed">
                    Smart Asset Management System yang mengintegrasikan <span className="text-white font-bold underline decoration-blue-400">Role-Based Access Control</span> dengan sinkronisasi database real-time.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-2.5 bg-black/30 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-wider border border-white/10 text-white">React + TypeScript</span>
                  <span className="px-5 py-2.5 bg-black/30 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-wider border border-white/10 text-white">Spring Boot + MySQL</span>
                </div>
              </div>

              {/* PARALLAX IMAGE COMPONENT */}
              <div className="absolute right-[-10%] top-[10%] w-[60%] h-[80%] hidden md:block z-10">
                <div className="relative w-full h-full rounded-3xl border-4 border-black shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden">
                    {/* Efek Parallax: Background-attachment fixed membuat gambar seolah tertinggal saat scroll */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bbda38a5f452?q=80&w=1200')",
                        backgroundAttachment: "fixed" 
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Kartu Sidebar - Core Architecture */}
            <div className="md:col-span-4 bg-white rounded-[3rem] p-10 flex flex-col justify-between shadow-xl text-slate-900">
              <div className="space-y-8">
                <h4 className="text-slate-900 font-black text-xl uppercase tracking-tighter italic border-b border-slate-100 pb-4">Core Architecture</h4>
                <div className="space-y-6">
                  {[
                    { label: 'Admin Dashboard', icon: <Users size={18}/> },
                    { label: 'Radin & User Panel', icon: <Briefcase size={18}/> },
                    { label: 'Real-time Borrowing Logs', icon: <Clock size={18}/> },
                    { label: 'Dynamic Statistics', icon: <BarChart3 size={18}/> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                        {item.icon}
                      </div>
                      <span className="text-xs font-black text-slate-700 uppercase tracking-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://github.com/midy777/allurenexus" className="w-full py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-sm mt-8">
                <Github size={16}/> Source Code//marinairdayanti
              </a>
            </div>
          </div>

          {/* Gallery Grid sesuai gambar bawah */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { id: 'Dashboard', img: './allure-4.png', label: 'Admin Dashboard' },
              { id: 'Login', img: './allure-6.png', label: 'Login' },
              { id: 'User Activity', img: './allure-5.png', label: 'User Activity' }
            ].map((item) => (
              <div key={item.id} className="bg-white rounded-[2.5rem] p-8 shadow-sm group hover:-translate-y-2 transition-all duration-500">
                  <div className="bg-blue-600 text-white w-fit px-4 py-1.5 rounded-lg text-[10px] font-black uppercase mb-6 flex items-center gap-2">
                    <Globe size={12}/> /{item.id}
                  </div>
                  <div className="w-full h-48 rounded-[2rem] overflow-hidden mb-6 border border-slate-100 relative shadow-inner">
                    <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-110" />
                  </div>
                  <h4 className="text-slate-900 font-black text-sm uppercase mb-2 italic">{item.label}</h4>
                  {/* 3. UPDATE TOMBOL INI */}
                  <button 
                    onClick={() => setSelectedImg(item.img)}
                    className="py-2.5 px-6 bg-blue-600 text-white rounded-full text-[9px] font-black uppercase w-fit tracking-widest hover:bg-blue-700 transition shadow-lg active:scale-95"
                  >
                    Preview Detail
                  </button>
                  {/* TAMBAHKAN KODE MODAL INI DI PALING BAWAH SEBELUM PENUTUP DIV UTAMA: */}
                  {selectedImg && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                      {/* Latar belakang hitam transparan untuk menutup modal */}
                      <div 
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedImg(null)}
                      ></div>
                      
                      <div className="relative z-[110] max-w-5xl w-full flex flex-col items-center">
                        <button 
                          onClick={() => setSelectedImg(null)}
                          className="absolute -top-12 right-0 text-white hover:text-blue-500 transition-colors"
                        >
                          <X size={32} />
                        </button>
                        <img 
                          src={selectedImg} 
                          className="max-w-full max-h-[80vh] rounded-3xl shadow-2xl border border-white/10 animate-in zoom-in duration-300"
                          alt="Preview"
                        />
                      </div>
                    </div>
                  )}
                          </div>
                        ))}
                      </div>

        </div>
      </section>

      {/* --- LAYOUT 3: EXPERIENCE --- */}
      <section id="experience" className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10 border-b border-white/5">
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-4 mb-12 px-4">
             <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center"><Briefcase size={24}/></div>
             <h2 className="text-4xl font-black italic tracking-tighter">Professional Journey.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* PT Techno Science */}
            <div className="md:col-span-3 bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 border-l-4 border-l-blue-600">
              <div className="flex justify-between items-start mb-4">
                 <h4 className="font-black text-blue-500 text-[10px] uppercase tracking-widest italic">Apr 2025 - Present</h4>
                 <Server size={22} className="text-blue-500"/>
              </div>
              <h3 className="text-xl font-black italic text-white mb-1">Assistant Network Engineer</h3>
              <p className="text-[10px] font-bold text-slate-500 mb-6 uppercase tracking-widest">PT Techno Science ITS</p>
              <p className="text-xs text-slate-400 leading-relaxed italic font-medium">Monitoring operasional DC/DRC, manajemen 150+ perangkat, dan uptime sistem 99%.</p>
            </div>

            {/* DHL */}
            <div className="md:col-span-3 bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 border-l-4 border-l-yellow-500">
              <div className="flex justify-between items-start mb-4">
                 <h4 className="font-black text-yellow-500 text-[10px] uppercase tracking-widest italic">Jan 2023 - Jan 2024</h4>
                 <Settings size={22} className="text-yellow-500"/>
              </div>
              <h3 className="text-xl font-black italic text-white mb-1">G1000 Development Officer</h3>
              <p className="text-[10px] font-bold text-slate-500 mb-6 uppercase tracking-widest">DHL Supply Chain Indonesia</p>
              <p className="text-xs text-slate-400 leading-relaxed italic font-medium">UAT Specialist, WMS implementation, dan otomatisasi proses bisnis via Power Platform.</p>
            </div>

            {/* ACADEMIC CODING & RESEARCH (Pembaruan Visual Tanggal) */}
            <div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 hover:bg-purple-500/10 transition-colors group relative overflow-hidden">
                {/* Label Tahun yang Lebih Jelas */}
                <div className="absolute top-6 right-8">
                    <span className="text-[12px] font-black text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 italic tracking-widest">
                        Jan 2020 — May 2020
                    </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl group-hover:bg-purple-500 group-hover:text-white transition">
                        <Code2 size={24}/>
                    </div>
                    <h4 className="font-black italic text-white text-xl">Teaching Assistant</h4>
                </div>
                
                <p className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em] mb-3">Academic Coding Specialist</p>
                <p className="text-[12px] text-slate-400 font-medium italic leading-relaxed">
                    Membimbing mahasiswa dalam logika pemrograman dan rekayasa perangkat lunak.
                </p>
            </div>

            <div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 hover:bg-emerald-500/10 transition-colors group relative overflow-hidden">
                {/* Label Tahun yang Lebih Jelas */}
                <div className="absolute top-6 right-8">
                    <span className="text-[12px] font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 italic tracking-widest">
                        June 2020 — July 2020
                    </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition">
                        <Microscope size={24}/>
                    </div>
                    <h4 className="font-black italic text-white text-xl">Research Intern</h4>
                </div>
                
                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-[0.2em] mb-3">HUMIC – Telkom University</p>
                <p className="text-[12px] text-slate-400 font-medium italic leading-relaxed">
                    Riset web Tele-Emergency dan Tele-Almanac berbasis data medis digital.
                </p>
            </div>

            <div className="md:col-span-2 bg-slate-900 border border-blue-500/20 rounded-[2.5rem] p-8 group relative overflow-hidden">
                {/* Label Tahun yang Lebih Jelas */}
                <div className="absolute top-6 right-8 z-20">
                    <span className="text-[12px] font-black text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 italic tracking-widest">
                        Jan 2024 — Sept 2024 
                    </span>
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition">
                        <BarChart3 size={24}/>
                    </div>
                    <h4 className="font-black italic text-white text-xl">Data Analyst</h4>
                </div>
                
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em] mb-3 relative z-10">Freelance Research</p>
                <p className="text-[12px] text-slate-300 font-medium italic leading-relaxed relative z-10">
                    Programming riset dan analisis data statistik akademik.
                </p>
                <Binary className="absolute -right-4 -bottom-4 opacity-5" size={100}/>
            </div>
          </div>
        </div>
      </section>

      {/* --- LAYOUT 4: EDUCATION --- */}
      <section id="education" className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl w-full">
          <div className="bg-white/[0.03] border border-white/10 rounded-[4rem] p-12">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              
              {/* Kolom 1: Institusi & Gelar */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/20"><GraduationCap size={32}/></div>
                  <h2 className="text-4xl font-black italic tracking-tighter">Education.</h2>
                </div>
                
                <div className="space-y-10">
                  {/* S2 - ITS */}
                  <div className="group">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2 italic">Master's Degree</h4>
                    <h3 className="text-2xl font-bold leading-tight mb-1 text-white">Teknik Informatika</h3>
                    <p className="text-blue-500 font-black italic text-xl group-hover:translate-x-1 transition-transform">ITS Surabaya</p>
                    <p className="text-[11px] font-bold text-slate-500 mt-2 tracking-widest uppercase">GPA 3.50 / 4.00 • 2022 - 2024</p>
                  </div>

                  <div className="h-[1px] bg-white/5 w-2/3"></div>

                  {/* S1 - Telkom University */}
                  <div className="group">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2 italic">Bachelor's Degree</h4>
                    <h3 className="text-2xl font-bold leading-tight mb-1 text-white">Teknik Informatika</h3>
                    <p className="text-slate-400 font-black italic text-xl group-hover:translate-x-1 transition-transform">Telkom University</p>
                    <p className="text-[11px] font-bold text-slate-500 mt-2 tracking-widest uppercase">GPA 3.35 / 4.00 • 2017 - 2021</p>
                  </div>
                </div>
              </div>

              {/* Kolom 2: Thesis & Research */}
              <div className="md:pl-12 md:border-l border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-8 italic">Scientific Research</h4>
                
                <div className="space-y-12">
                  <div>
                    <p className="text-[9px] font-bold text-blue-400 uppercase mb-3 tracking-widest">Master Thesis</p>
                    <p className="text-lg font-black leading-snug italic text-slate-200">
                      "Textual Entailment Detection in Health-Related Question and Answer Data with 
Imbalanced Datasets."
                    </p>
                  </div>

                  <div className="h-[1px] bg-white/5 w-full"></div>

                  <div>
                    <p className="text-[9px] font-bold text-slate-500 uppercase mb-3 tracking-widest">Bachelor Thesis</p>
                    <p className="text-base font-bold text-slate-400 leading-snug italic">
                      "Traffic Transportation Simulation using Cellular Automata Model."
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolom 3: Certifications */}
              <div className="md:pl-12 md:border-l border-white/5">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8 italic">Professional Certifications</h4>
                <div className="space-y-3">
                  {[
                    { title: 'Network Security', org: 'Cisco (2024)' },
                    { title: 'Secure Computer User', org: 'EC-Council' },
                    { title: 'Data Analytics', org: 'RevoU (2022)' },
                    { title: 'Career Prep', org: 'Jago Karir (2026)' }
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:border-blue-500/50 transition">
                      <CheckCircle2 size={16} className="text-emerald-500"/>
                      <div>
                          <div className="text-slate-200">{cert.title}</div>
                          <div className="text-[8px] text-slate-500 mt-1">{cert.org}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- LAYOUT 5: CONTACT --- */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-6 relative z-10">
        <div className="max-w-4xl w-full text-center">
           <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter mb-10 leading-none opacity-90">Let's <span className="text-blue-600">Talk.</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="mailto:marina.98.irdayanti@gmail.com" className="bg-white text-black rounded-[3rem] p-10 flex flex-col items-center justify-center hover:bg-blue-600 hover:text-white transition-all group duration-500 shadow-2xl">
                 <Mail size={48} className="mb-4 group-hover:scale-110 transition"/>
                 <p className="font-black text-lg md:text-xl italic tracking-tighter">marina.98.irdayanti@gmail.com</p>
              </a>
              <div className="grid grid-rows-2 gap-4">
                <a href="https://www.linkedin.com/in/marina-irdayanti/" target="_blank" className="bg-white/[0.03] border border-white/10 text-white rounded-[2.5rem] p-6 flex items-center justify-center gap-4 hover:bg-blue-600 transition duration-500 group">
                   <Linkedin size={24} className="group-hover:scale-110 transition"/>
                   <span className="font-black italic text-lg tracking-tighter">LinkedIn Profile</span>
                </a>
                <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 flex items-center justify-center gap-3">
                   <MapPin size={20} className="text-slate-500"/>
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Surabaya, East Java, ID</span>
                </div>
              </div>
           </div>
           <footer className="mt-24">
              <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] italic">© 2026 — Designed with Precision by Marina Irdayanti.</p>
           </footer>
        </div>
      </section>

    </div>
  );
}