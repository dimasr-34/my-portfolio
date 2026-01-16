
import React from 'react';
import { SOCIAL_MEDIA } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-48 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Container Badge dengan Overflow Hidden untuk Marquee */}
        <div className="reveal active inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 rounded-full border border-indigo-400/20 max-w-[280px] sm:max-w-md overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            <span className="mx-4">Dimas Rokhim Dwi Saputra | Informatics Engineering</span>
            <span className="mx-4">Dimas Rokhim Dwi Saputra | Informatics Engineering</span>
          </div>
        </div>

        <h1 className="reveal active [transition-delay:200ms] text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
          Welcome Integrated <br />
          <span className="gradient-text">To my portfolio</span>
        </h1>
        <p className="reveal active [transition-delay:400ms] max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Lulusan Teknik Informatika yang kini berfokus sebagai <span className="text-indigo-400 font-semibold">IT Implementator</span> di PT Data Integrasi Inovasi, Tangerang, Banten.
        </p>

        {/* Social Media Links */}
        <div className="mt-12 flex justify-center gap-6">
          {SOCIAL_MEDIA.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className={`text-3xl text-slate-400 transition-all duration-300 ${social.color}`}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
