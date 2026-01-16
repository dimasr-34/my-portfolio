
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Halo! Saya asisten pintar Dimas. Ada yang bisa saya bantu terkait profil atau keahliannya?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const aiResponse = await getAIResponse(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "Koneksi terputus. Mohon pastikan internet Anda stabil." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] md:w-[400px] glass-card rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-indigo-600 p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                <i className="fas fa-robot text-white"></i>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm leading-none">Dimas AI Assistant</h4>
                <span className="text-[10px] text-indigo-200 uppercase font-black tracking-widest">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-slate-950/90 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-600/20' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-slate-900 border-t border-slate-800">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanyakan sesuatu..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-all text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-500 transition-all active:scale-90 disabled:opacity-50 shadow-lg shadow-indigo-600/20"
              >
                <i className="fas fa-paper-plane text-white text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl transition-all duration-500 border-4 border-slate-950 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-indigo-600 text-white hover:scale-110'
        }`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'}`}></i>
      </button>
    </div>
  );
};

export default AIAssistant;
