// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Arya Wijaya | Portofolio Kreatif",
  description: "Portofolio kreatif seorang desainer grafis dan developer web profesional dengan pengalaman lebih dari 8 tahun",
  language: "id",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  brandName: string;
  links: NavLink[];
  searchPlaceholder: string;
  searchHint: string;
  searchAriaLabel: string;
  closeSearchAriaLabel: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "ARYA WIJAYA",
  links: [
    { label: "Beranda", href: "#hero" },
    { label: "Proyek", href: "#projects" },
    { label: "Layanan", href: "#services" },
    { label: "Tentang", href: "#about" },
    { label: "Kontak", href: "#contact" },
  ],
  searchPlaceholder: "Cari proyek, layanan, atau topik...",
  searchHint: "Tekan Enter untuk mencari atau ESC untuk menutup",
  searchAriaLabel: "Cari",
  closeSearchAriaLabel: "Tutup pencarian",
};

// ============================================================
// Hero Section
// ============================================================

export interface HeroConfig {
  date: string;
  titleLine1: string;
  titleLine2: string;
  readTime: string;
  description: string;
  ctaText: string;
  image: string;
  imageAlt: string;
}

export const heroConfig: HeroConfig = {
  date: "Desainer & Developer",
  titleLine1: "Menciptakan",
  titleLine2: "Karya Digital",
  readTime: "8+ tahun pengalaman",
  description: "Saya adalah desainer grafis dan developer web yang berdedikasi untuk menciptakan pengalaman digital yang memukau. Dengan perpaduan estetika modern dan teknologi terkini, setiap proyek adalah karya seni yang fungsional.",
  ctaText: "Lihat Portofolio",
  image: "/hero-portrait.jpg",
  imageAlt: "Arya Wijaya - Desainer & Developer",
};

// ============================================================
// Latest Articles (Horizontal Scroll) - Projects
// ============================================================

export interface ArticleItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

export interface LatestArticlesConfig {
  sectionTitle: string;
  articles: ArticleItem[];
}

export const latestArticlesConfig: LatestArticlesConfig = {
  sectionTitle: "Proyek Terbaru",
  articles: [
    {
      id: 1,
      title: "E-Commerce Luxury",
      subtitle: "Platform belanja premium dengan UI elegan",
      image: "/project-1.jpg",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Brand Identity",
      subtitle: "Identitas visual untuk startup teknologi",
      image: "/project-2.jpg",
      category: "Branding",
    },
    {
      id: 3,
      title: "Mobile App Design",
      subtitle: "Aplikasi fintech dengan UX intuitif",
      image: "/project-3.jpg",
      category: "UI/UX Design",
    },
    {
      id: 4,
      title: "Corporate Website",
      subtitle: "Website perusahaan dengan animasi modern",
      image: "/project-4.jpg",
      category: "Web Development",
    },
    {
      id: 5,
      title: "Editorial Design",
      subtitle: "Majalah digital dengan layout kreatif",
      image: "/project-5.jpg",
      category: "Design",
    },
  ],
};

// ============================================================
// Art Category Section - Services
// ============================================================

export interface EventItem {
  date: string;
  title: string;
  location: string;
}

export interface GridArticle {
  id: number;
  title: string;
  category: string;
  readTime: string;
}

export interface ArtCategoryConfig {
  sectionTitle: string;
  categoriesLabel: string;
  eventsLabel: string;
  categories: string[];
  events: EventItem[];
  featuredImage: string;
  featuredImageAlt: string;
  featuredLabel: string;
  featuredTitle: string;
  featuredDescription: string;
  featuredCtaText: string;
  gridArticles: GridArticle[];
  readSuffix: string;
}

export const artCategoryConfig: ArtCategoryConfig = {
  sectionTitle: "Layanan Profesional",
  categoriesLabel: "Kategori",
  eventsLabel: "Jadwal Konsultasi",
  categories: ["Web Development", "UI/UX Design", "Branding", "Digital Marketing"],
  events: [
    { date: "Senin", title: "Konsultasi Gratis", location: "Online Meeting" },
    { date: "Rabu", title: "Review Proyek", location: "Video Call" },
    { date: "Jumat", title: "Workshop Design", location: "Live Session" },
  ],
  featuredImage: "/featured-service.jpg",
  featuredImageAlt: "Layanan Unggulan",
  featuredLabel: "Layanan Unggulan",
  featuredTitle: "Website Premium dengan Teknologi Modern",
  featuredDescription: "Saya menyediakan layanan pembuatan website premium menggunakan teknologi terkini seperti React, Next.js, dan Tailwind CSS. Setiap website dirancang dengan memperhatikan performa, SEO, dan pengalaman pengguna yang optimal. Dari konsep hingga deployment, saya memastikan setiap detail sempurna.",
  featuredCtaText: "Pelajari Lebih Lanjut",
  gridArticles: [
    { id: 1, title: "Desain UI/UX yang Memukau", category: "UI/UX Design", readTime: "Responsive" },
    { id: 2, title: "Identitas Brand yang Kuat", category: "Branding", readTime: "Konsisten" },
    { id: 3, title: "Optimasi SEO Profesional", category: "Digital Marketing", readTime: "Terukur" },
    { id: 4, title: "Maintenance Berkala", category: "Web Development", readTime: "Aman" },
  ],
  readSuffix: "",
};

// ============================================================
// Lifestyle Section - Skills
// ============================================================

export interface LifestyleArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  rotation: number;
  position: { x: number; y: number };
  baseZIndex?: number;
}

export interface LifestyleConfig {
  sectionTitle: string;
  viewMoreText: string;
  articles: LifestyleArticle[];
}

export const lifestyleConfig: LifestyleConfig = {
  sectionTitle: "Keahlian & Skill",
  viewMoreText: "Lihat Semua Skill",
  articles: [
    {
      id: 1,
      title: "React & Next.js",
      excerpt: "Pengembangan aplikasi modern dengan framework React",
      image: "/skill-1.jpg",
      rotation: -5,
      position: { x: 0, y: 0 },
    },
    {
      id: 2,
      title: "UI/UX Design",
      excerpt: "Desain antarmuka yang intuitif dan menarik",
      image: "/skill-2.jpg",
      rotation: 4,
      position: { x: 120, y: -20 },
    },
    {
      id: 3,
      title: "Graphic Design",
      excerpt: "Desain grafis profesional dengan Adobe Suite",
      image: "/skill-3.jpg",
      rotation: -3,
      position: { x: 200, y: 30 },
    },
    {
      id: 4,
      title: "Motion Graphics",
      excerpt: "Animasi dan motion design yang memukau",
      image: "/skill-4.jpg",
      rotation: 6,
      position: { x: 80, y: 40 },
    },
    {
      id: 5,
      title: "3D Modeling",
      excerpt: "Modeling 3D untuk visualisasi produk",
      image: "/skill-5.jpg",
      rotation: -4,
      position: { x: 180, y: -10 },
    },
  ],
};

// ============================================================
// Design Section - Portfolio Gallery
// ============================================================

export interface DesignItem {
  id: number;
  title: string;
  quote: string;
  image: string;
  size: string;
  gridColumn?: number;
}

export interface DesignConfig {
  sectionTitle: string;
  viewMoreText: string;
  items: DesignItem[];
}

export const designConfig: DesignConfig = {
  sectionTitle: "Galeri Karya",
  viewMoreText: "Jelajahi Semua Karya",
  items: [
    {
      id: 1,
      title: "Minimalist Brand",
      quote: "Less is more",
      image: "/gallery-1.jpg",
      size: "wide",
    },
    {
      id: 2,
      title: "Tech Dashboard",
      quote: "Data visualization",
      image: "/gallery-2.jpg",
      size: "normal",
    },
    {
      id: 3,
      title: "Fashion Editorial",
      quote: "Elegance defined",
      image: "/gallery-3.jpg",
      size: "tall",
    },
    {
      id: 4,
      title: "Mobile Banking",
      quote: "Finance simplified",
      image: "/gallery-4.jpg",
      size: "normal",
    },
    {
      id: 5,
      title: "Restaurant Brand",
      quote: "Culinary art",
      image: "/gallery-5.jpg",
      size: "wide",
    },
    {
      id: 6,
      title: "Crypto Platform",
      quote: "Future of finance",
      image: "/gallery-6.jpg",
      size: "normal",
    },
  ],
};

// ============================================================
// Green Tribe Section - Testimonials
// ============================================================

export interface TribeMember {
  id: number;
  name: string;
  role: string;
  title: string;
  excerpt: string;
  avatar: string;
}

export interface GreenTribeConfig {
  sectionTitle: string;
  sectionDescription: string;
  readMoreText: string;
  joinTitle: string;
  joinDescription: string;
  emailPlaceholder: string;
  subscribeText: string;
  memberCountText: string;
  videoSrc: string;
  videoPoster: string;
  members: TribeMember[];
}

export const greenTribeConfig: GreenTribeConfig = {
  sectionTitle: "Testimoni Klien",
  sectionDescription: "Apa kata klien tentang hasil kerja saya",
  readMoreText: "Baca Selengkapnya",
  joinTitle: "Berlangganan Newsletter",
  joinDescription: "Dapatkan tips desain dan update proyek terbaru langsung ke email Anda",
  emailPlaceholder: "Alamat email Anda",
  subscribeText: "Berlangganan",
  memberCountText: "500+ klien telah bekerja sama",
  videoSrc: "",
  videoPoster: "/video-poster.jpg",
  members: [
    {
      id: 1,
      name: "Budi Santoso",
      role: "CEO",
      title: "StartupTech Indonesia",
      excerpt: "Arya memberikan hasil yang melebihi ekspektasi. Website kami sekarang terlihat profesional dan modern.",
      avatar: "/client-1.jpg",
    },
    {
      id: 2,
      name: "Dewi Kusuma",
      role: "Marketing Director",
      title: "Luxury Brands Co",
      excerpt: "Kerjasama yang sangat menyenangkan. Arya memahami visi kami dengan sempurna.",
      avatar: "/client-2.jpg",
    },
    {
      id: 3,
      name: "Rudi Hartono",
      role: "Founder",
      title: "Creative Studio",
      excerpt: "Desain yang dibuat sangat kreatif dan unik. Sangat direkomendasikan!",
      avatar: "/client-3.jpg",
    },
    {
      id: 4,
      name: "Siti Rahayu",
      role: "Product Manager",
      title: "FinTech Solutions",
      excerpt: "UX design yang intuitif membuat aplikasi kami mudah digunakan oleh pengguna.",
      avatar: "/client-4.jpg",
    },
  ],
};

// ============================================================
// Authors Section - Team/Collaborators
// ============================================================

export interface Author {
  id: number;
  name: string;
  role: string;
  avatar: string;
  articles: number;
  social: { instagram: string; twitter: string };
}

export interface AuthorsConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  articlesSuffix: string;
  authors: Author[];
}

export const authorsConfig: AuthorsConfig = {
  sectionTitle: "Tim & Kolaborator",
  sectionSubtitle: "Geser atau klik untuk melihat profil",
  articlesSuffix: "proyek",
  authors: [
    {
      id: 1,
      name: "Arya Wijaya",
      role: "Lead Designer & Developer",
      avatar: "/team-1.jpg",
      articles: 127,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 2,
      name: "Maya Indah",
      role: "UI/UX Designer",
      avatar: "/team-2.jpg",
      articles: 89,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 3,
      name: "Dika Pratama",
      role: "Full Stack Developer",
      avatar: "/team-3.jpg",
      articles: 64,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 4,
      name: "Lina Susanti",
      role: "Motion Designer",
      avatar: "/team-4.jpg",
      articles: 52,
      social: { instagram: "#", twitter: "#" },
    },
    {
      id: 5,
      name: "Fajar Nugroho",
      role: "3D Artist",
      avatar: "/team-5.jpg",
      articles: 38,
      social: { instagram: "#", twitter: "#" },
    },
  ],
};

// ============================================================
// Instagram Gallery Section - Social Media
// ============================================================

export interface InstagramImage {
  id: number;
  image: string;
  likes: number;
}

export interface InstagramGalleryConfig {
  handle: string;
  handleUrl: string;
  description: string;
  followText: string;
  likesSuffix: string;
  images: InstagramImage[];
}

export const instagramGalleryConfig: InstagramGalleryConfig = {
  handle: "@aryawijaya.design",
  handleUrl: "https://instagram.com",
  description: "Ikuti saya di Instagram untuk melihat proses kreatif dan update proyek terbaru",
  followText: "Ikuti",
  likesSuffix: "suka",
  images: [
    { id: 1, image: "/social-1.jpg", likes: 1247 },
    { id: 2, image: "/social-2.jpg", likes: 892 },
    { id: 3, image: "/social-3.jpg", likes: 2156 },
    { id: 4, image: "/social-4.jpg", likes: 1567 },
    { id: 5, image: "/social-5.jpg", likes: 983 },
    { id: 6, image: "/social-6.jpg", likes: 1876 },
    { id: 7, image: "/social-7.jpg", likes: 743 },
    { id: 8, image: "/social-8.jpg", likes: 1623 },
    { id: 9, image: "/social-9.jpg", likes: 1109 },
    { id: 10, image: "/social-10.jpg", likes: 2054 },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterConfig {
  brandWatermark: string;
  newsletterTitle: string;
  newsletterDescription: string;
  emailPlaceholder: string;
  subscribeText: string;
  subscribeSuccessMessage: string;
  categoriesLabel: string;
  categories: string[];
  pagesLabel: string;
  pages: string[];
  legalLabel: string;
  legalLinks: string[];
  socialLabel: string;
  socialLinks: {
    instagram: string;
    twitter: string;
    youtube: string;
  };
  backToTopText: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  brandWatermark: "ARYA",
  newsletterTitle: "Tetap Terhubung",
  newsletterDescription: "Berlangganan newsletter untuk mendapatkan update proyek dan tips desain",
  emailPlaceholder: "Alamat email Anda",
  subscribeText: "Berlangganan",
  subscribeSuccessMessage: "Terima kasih telah berlangganan!",
  categoriesLabel: "Layanan",
  categories: ["Web Development", "UI/UX Design", "Branding", "Digital Marketing"],
  pagesLabel: "Halaman",
  pages: ["Beranda", "Proyek", "Layanan", "Tentang", "Kontak"],
  legalLabel: "Legal",
  legalLinks: ["Kebijakan Privasi", "Syarat & Ketentuan"],
  socialLabel: "Ikuti Saya",
  socialLinks: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
  backToTopText: "Kembali ke Atas",
  copyright: "© 2024 Arya Wijaya. Hak Cipta Dilindungi.",
  credit: "Dibuat dengan ❤ di Indonesia",
};
