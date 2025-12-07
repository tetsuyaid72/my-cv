import { EducationItem, ExperienceItem, SkillItem, SoftSkillItem, ProjectItem } from './types';

export const PERSONAL_DATA = {
  name: "Muhammad Hasbuna",
  role: "Staf Kepala Desa",
  location: "Martapura Barat, Kab. Banjar",
  email: "hasbunastore72@gmail.com",
  whatsapp: "6289691268646",
  whatsappUrl: "https://wa.me/6289691268646",
  about: "Saya, Muhammad Hasbuna, saat ini bekerja sebagai Staf Kepala Desa di Martapura, Kabupaten Banjar. Saya terbiasa menangani pelayanan publik, pengelolaan administrasi desa, serta membantu berbagai kebutuhan dan program masyarakat. Selain administrasi, saya juga mulai mempelajari vibe coding untuk mendukung digitalisasi layanan dan profil desa.",
  heroHeadline: "Sedang mencari perkerjaan baru bidang administrasi, pelayanan publik, maupun pekerjaan lain yang relevan dengan keterampilan saya.",
  heroDescription: "Saya Seorang Staf Kepala Desa dengan pengalaman dalam pelayanan publik, koordinasi administrasi, dan pengelolaan kebutuhan masyarakat desa. Terbiasa bekerja secara terstruktur, komunikatif, dan responsif dalam mendukung kelancaran berbagai program pemerintahan desa."
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    school: "MA Hidayatullah Martapura",
    level: "Madrasah Aliyah - IPA",
    year: "Lulus 2018",
    description: "Aktif dalam kegiatan keagamaan dan pengembangan disiplin diri."
  },
  {
    school: "MTs Al-Hamidiyah",
    level: "Madrasah Tsanawiyah",
    year: "Lulus 2015"
  },
  {
    school: "MI Al-Hamidiyah",
    level: "Madrasah Ibtidaiyah",
    year: "Lulus 2012"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Membantu Administrasi Lingkungan Desa",
    period: "Periode Fleksibel",
    description: [
      "Mengelola surat-menyurat dan pengarsipan data warga.",
      "Melayani kebutuhan administrasi warga dengan ramah dan responsif.",
      "Berkoordinasi dengan perangkat desa untuk kelancaran program desa."
    ]
  },
  {
    role: "Usaha Pribadi (Online Shop & Freelance)",
    period: "Berjalan",
    description: [
      "Mengelola operasional toko online dan komunikasi pelanggan.",
      "Melakukan promosi produk melalui media sosial.",
      "Menjaga kepuasan pelanggan melalui pelayanan yang cepat."
    ]
  },
  {
    role: "Organisasi Kepemudaan & Masyarakat",
    period: "Aktif",
    description: [
      "Terlibat aktif dalam kegiatan sosial kemasyarakatan.",
      "Mengkoordinir tim dalam event-event desa.",
      "Membangun komunikasi efektif antar pemuda desa."
    ]
  }
];

export const HARD_SKILLS: SkillItem[] = [
  { name: "Microsoft Word", level: 85 },
  { name: "Canva", level: 80 },
  { name: "Microsoft Excel", level: 75 },
  { name: "Vibe Coding (Web Basics)", level: 70 },
];

export const SOFT_SKILLS: SoftSkillItem[] = [
  {
    name: "Komunikasi",
    description: "Interaksi jelas & sopan dengan warga.",
    icon: "MessageCircle"
  },
  {
    name: "Teamwork",
    description: "Solid dalam kerjasama tim organisasi.",
    icon: "Users"
  },
  {
    name: "Problem Solving",
    description: "Solusi praktis untuk kebutuhan administrasi.",
    icon: "Puzzle"
  }
];

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    title: "Website Pelayanan Desa Sederhana",
    description: "Konsep website statis untuk informasi layanan administrasi desa kepada warga.",
    image: "/images/p1.png",
    demoLink: "https://pelayanan-desa-tangkas.vercel.app/",
    repoLink: "https://github.com/tetsuyaid72/DesaTangkas.git",
    detailLink: "#"
  },
  {
    title: "Website E-Commerce UMKM",
    description: "Sistem katalog dan promosi produk UMKM desa dengan tampilan modern, responsif, dan mudah digunakan.",
    image: "/images/p2.png",
    demoLink: "https://ayamkaget.vercel.app/",
    repoLink: "https://github.com/tetsuyaid72/Ayam-kaget.git",
    detailLink: "#"
  },
  {
    title: "Website Landing Page Sederhana",
    description: "Landing page interaktif untuk menampilkan informasi produk dan layanan dengan desain yang bersih dan profesional",
    image: "/images/p3.png",
    demoLink: "https://humaini-jewellery.vercel.app/",
    repoLink: "https://github.com/tetsuyaid72/Humaini.git",
    detailLink: "#"
  }
];