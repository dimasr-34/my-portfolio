import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '6281331095617';

    const text = `
Halo, saya tertarik untuk menghubungi Anda.

Nama: ${name}
Email: ${email}
Pesan:
${message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto glass-card rounded-[40px] overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          <div className="lg:w-1/3 bg-indigo-600 p-12 text-white">
            <h3 className="text-3xl font-black mb-8">Mari Berkolaborasi.</h3>
            <p className="text-indigo-100">
              Hubungi saya langsung via WhatsApp.
            </p>
          </div>

          <div className="lg:w-2/3 p-12 bg-slate-900">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Lengkap"
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-slate-200"
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-slate-200"
                />
              </div>

              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Pesan"
                className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-slate-200"
              />

              <button
                type="submit"
                className="w-full py-5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl active:scale-95"
              >
                Kirim via WhatsApp
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
