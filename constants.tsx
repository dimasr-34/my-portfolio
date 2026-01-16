
import { Project, Skill, Experience } from './types';

export const SOCIAL_MEDIA = [
  {
    name: "Instagram",
    url: "https://instagram.com/Dimas_rokhim",
    icon: "fab fa-instagram",
    color: "hover:text-pink-500"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "fab fa-linkedin",
    color: "hover:text-blue-600"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/081331095617",
    icon: "fab fa-whatsapp",
    color: "hover:text-green-500"
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sistem Klasterisasi Stok Obat (K-Means)",
    description: "Implementasi algoritma K-Means untuk klasterisasi pengelolaan persediaan stok obat pada RSIA Bhakti Persada Barat menggunakan web-based reporting. Membantu efisiensi prediksi stok hingga 40%.",
    tags: ["PHP", "MySQL", "Data Analysis", "K-Means"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 2,
    title: "Website Desa Ngrukem",
    description: "Membangun website desa sebagai media informasi publik, profil desa, layanan masyarakat, dan pengelolaan hosting/domain secara mandiri.",
    tags: ["Web Dev", "Public Service", "CMS"],
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 3,
    title: "Administrasi Surat Digital",
    description: "Aplikasi web untuk manajemen surat masuk/keluar, fitur pencarian, arsip digital, dan pelacakan status surat di Desa Totokan guna digitalisasi birokrasi.",
    tags: ["PHP", "JavaScript", "Database"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "IT Implementation & Troubleshooting", level: 95, icon: "fa-screwdriver-wrench" },
  { name: "Web Development (PHP, JS, Laravel)", level: 90, icon: "fa-code" },
  { name: "Database Design (MySQL, PostgreSQL)", level: 85, icon: "fa-database" },
  { name: "Data Science (K-Means, Python)", level: 82, icon: "fa-chart-pie" },
  { name: "System Integration & API", level: 88, icon: "fa-circle-nodes" },
  { name: "Project Management & Leadership", level: 90, icon: "fa-users-gear" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "PT Data Integrasi Inovasi (Tangerang, Banten)",
    role: "IT Implementator",
    period: "November 2025 - Saat ini",
    description: "Melakukan instalasi, konfigurasi, dan maintenance sistem aplikasi perusahaan di sisi klien. Bertanggung jawab atas integrasi database, pelatihan user (UAT), serta troubleshooting teknis untuk memastikan kelancaran operasional IT klien."
  },
  {
    company: "Senapati Digital",
    role: "Project Web Developer",
    period: "2024-2025",
    description: "Mengembangkan berbagai solusi web kustom untuk klien, mulai dari company profile hingga sistem manajemen internal. Fokus pada kode yang clean, responsif, dan skalabel."
  },
  {
    company: "Pemerintah Desa Totokan",
    role: "IT Support & Developer (Magang)",
    period: "2022",
    description: "Mendukung digitalisasi administrasi desa melalui pengembangan aplikasi surat digital dan memberikan dukungan teknis harian bagi staf kantor desa."
  }
];

export const EDUCATION = [
  {
    institution: "Universitas Muhammadiyah Ponorogo",
    degree: "S1 Teknik Informatika",
    period: "2020 - 2025",
    gpa: "3.30",
    description: "Fokus pada pengembangan perangkat lunak dan analisis data. Aktif dalam penelitian algoritma K-Means untuk optimasi stok obat sebagai tugas akhir."
  }
];

export const ORGANIZATIONS = [
  { 
    name: "GenBI Indonesia (Generasi Baru Indonesia)", 
    role: "Anggota Divisi Sosial", 
    period: "2021 - 2023",
    desc: "Penerima beasiswa Bank Indonesia yang aktif dalam program pemberdayaan ekonomi masyarakat dan aksi sosial."
  },
  { 
    name: "BEM Fakultas Teknik UM Ponorogo", 
    role: "Staff Departemen Internal", 
    period: "2022 - 2023",
    desc: "Mengelola koordinasi antar himpunan mahasiswa di lingkup fakultas teknik."
  },
  { 
    name: "HIMAKA (Himpunan Mahasiswa Informatika)", 
    role: "Anggota Bidang Hubungan Masyarakat", 
    period: "2021 - 2023",
    desc: "Menjembatani komunikasi antara mahasiswa informatika dengan pihak prodi dan alumni."
  }
];
