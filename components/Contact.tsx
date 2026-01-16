
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto glass-card rounded-[40px] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-indigo-600 p-12 text-white">
            <h3 className="text-3xl font-black mb-8 leading-tight">Mari Berkolaborasi.</h3>
            <p className="text-indigo-100 mb-12">
              Tertarik dengan profil saya atau memiliki proyek yang ingin didiskusikan? Saya siap membantu mewujudkan solusi digital Anda.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>dimasrokhim1@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className="fas fa-phone"></i>
                </div>
                <span>+62 813 3109 5617</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <i className="fas fa-location-dot"></i>
                </div>
                <span>Magetan, Jawa Timur</span>
              </div>
            </div>

            <div className="mt-20 flex gap-4">
            </div>
          </div>
          
          <div className="lg:w-2/3 p-12 bg-slate-900">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Nama Lengkap</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 transition-all text-slate-200" placeholder="Masukkan nama Anda" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                  <input type="email" className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 transition-all text-slate-200" placeholder="email@contoh.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Pesan</label>
                <textarea rows={5} className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-500 transition-all text-slate-200" placeholder="Apa yang bisa saya bantu?"></textarea>
              </div>
              <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
