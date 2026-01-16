
import { GoogleGenAI } from "@google/genai";

export const getAIResponse = async (prompt: string) => {
  // Selalu inisialisasi di dalam fungsi atau pastikan API_KEY tersedia dari environment
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemContext = `
    Anda adalah asisten AI untuk portofolio Dimas Rokhim Dwi Saputra.
    
    PROFIL LENGKAP DIMAS:
    - Pekerjaan: IT Implementator di PT Data Integrasi Inovasi, Tangerang (Feb 2024 - Sekarang).
    - Pendidikan: S1 Teknik Informatika UM Ponorogo (IPK 3.30).
    - Keahlian Teknis: IT Implementation, Troubleshooting, Web Dev (PHP/JS), SQL, K-Means Clustering, System Integration.
    - Pengalaman Organisasi: GenBI (Penerima Beasiswa BI), BEM Fakultas Teknik (Internal), HIMAKA (Humas).
    - Proyek Unggulan: Sistem Klasterisasi Stok Obat RSIA Bhakti Persada, Website Desa Ngrukem, Digitalisasi Surat Desa Totokan.
    - Karakter: Profesional, Leadership kuat, detail-oriented, dan solutif.
    - Kontak: dimasrokhim1@gmail.com | +6281331095617 | Magetan/Tangerang.

    TUGAS ANDA:
    Jawab pertanyaan pengunjung dengan ramah, profesional, dan informatif. Gunakan Bahasa Indonesia yang santun namun modern.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: systemContext,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
    
    return response.text || "Maaf, saya tidak mendapatkan jawaban. Silakan coba lagi.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kendala koneksi dengan AI. Anda dapat menghubungi Dimas langsung melalui kontak di bawah.";
  }
};
