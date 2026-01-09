import React from "react";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Memulai Perjalanan React dengan TypeScript",
    author: "Ahmad Rizki",
    date: "9 Januari 2026",
    category: "Tutorial",
    excerpt: "Pelajari cara memulai project React dengan TypeScript dan Vite untuk performa maksimal.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Best Practices dalam Component Design",
    author: "Siti Nurhayati",
    date: "7 Januari 2026",
    category: "Best Practices",
    excerpt: "Temukan cara terbaik untuk merancang reusable components yang efisien dan mudah dimaintain.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "State Management dengan React Hooks",
    author: "Budi Santoso",
    date: "5 Januari 2026",
    category: "Tutorial",
    excerpt: "Kuasai useState, useEffect, dan custom hooks untuk mengelola state aplikasi React Anda.",
    image: "https://images.unsplash.com/photo-1516321318423-f06e85e504b3?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Optimasi Performance di React Apps",
    author: "Dewi Lestari",
    date: "3 Januari 2026",
    category: "Performance",
    excerpt: "Tingkatkan kecepatan aplikasi React dengan memoization, code splitting, dan lazy loading.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Testing React Components dengan Vitest",
    author: "Eka Putra",
    date: "1 Januari 2026",
    category: "Testing",
    excerpt: "Pelajari cara melakukan unit testing pada React components menggunakan Vitest.",
    image: "https://images.unsplash.com/photo-1516534775068-bb57e39c2f57?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Styling React Components dengan Tailwind CSS",
    author: "Rahmat Hidayat",
    date: "30 Desember 2025",
    category: "Styling",
    excerpt: "Desain UI yang cantik dan responsif dengan Tailwind CSS untuk project React Anda.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop"
  }
];

export const App: React.FC = () => {
  return (
    <div className="app">
      <header className="blog-header">
        <div className="header-content">
          <h1>My Tech Blog</h1>
          <p>Berbagi tutorial, tips, dan pengalaman tentang React dan Web Development</p>
        </div>
      </header>
      
      <main className="blog-container">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" />
                <span className="category-badge">{post.category}</span>
              </div>
              <div className="blog-content">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="author">Oleh {post.author}</span>
                  <span className="date">{post.date}</span>
                </div>
                <button className="read-more-btn">Baca Selengkapnya →</button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

