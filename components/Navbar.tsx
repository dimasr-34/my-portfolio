
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark-mode');
    } else {
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const formattedDate = currentTime.toLocaleDateString('id-ID', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });

  const formattedTime = currentTime.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Biarkan browser menangani hash navigation, tapi tutup menu mobile jika terbuka
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="glass-card rounded-2xl border border-white/10 px-6 py-3 flex justify-between items-center shadow-2xl pointer-events-auto">
          
          {/* Left Side: Logo & Desktop Menu */}
          <div className="flex items-center gap-10">
            <a href="#home" className="text-2xl font-black gradient-text tracking-tighter shrink-0">
              PORTFOLIO.
            </a>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-indigo-400 ${
                    activeSection === link.id ? 'text-indigo-400' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Tools (Clock & Theme) */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end justify-center border-r border-slate-700/50 pr-4 h-10">
              <span className="text-[9px] font-black text-indigo-500 uppercase tracking-widest leading-none mb-1">
                {formattedDate}
              </span>
              <span className="text-xs font-mono font-bold text-slate-200 leading-none">
                {formattedTime}
              </span>
            </div>

            <button 
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/20 transition-all border border-indigo-500/20 shadow-inner"
              title="Toggle Light/Dark"
            >
              <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
            </button>

            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-slate-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 glass-card rounded-2xl border border-white/10 p-6 animate-in slide-in-from-top-4 duration-300 pointer-events-auto">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-bold uppercase tracking-widest ${
                    activeSection === link.id ? 'text-indigo-400' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">{formattedDate}</span>
                  <span className="text-sm font-mono text-indigo-400 font-bold">{formattedTime}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
