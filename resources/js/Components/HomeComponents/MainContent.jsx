import { Link } from '@inertiajs/react';
import React from 'react';

const articles = [
    {
      id: 1,
      title: 'Membangun Aplikasi Web dengan React',
      slug: 'membangun-aplikasi-web-dengan-react',
      excerpt: 'Pelajari cara membangun aplikasi web menggunakan React dari awal hingga akhir.',
      date: '2024-09-26',
      category: 'Web Development',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      title: 'Panduan Lengkap Mobile Development',
      slug: 'panduan-lengkap-mobile-development',
      excerpt: 'Ketahui cara mengembangkan aplikasi mobile untuk Android dan iOS dengan mudah.',
      date: '2024-09-27',
      category: 'Mobile Development',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Data Science: Memahami Big Data',
      slug: 'data-science-memahami-big-data',
      excerpt: 'Eksplorasi konsep dan teknik dalam data science untuk menganalisis big data.',
      date: '2024-09-28',
      category: 'Data Science',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      title: 'Tips Sukses dalam Machine Learning',
      slug: 'tips-sukses-dalam-machine-learning',
      excerpt: 'Pelajari bagaimana cara sukses menerapkan machine learning dalam proyek Anda.',
      date: '2024-09-29',
      category: 'Machine Learning',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      title: 'Mengoptimalkan SEO untuk Website',
      slug: 'mengoptimalkan-seo-untuk-website',
      excerpt: 'Temukan strategi SEO terbaik untuk meningkatkan visibilitas website Anda.',
      date: '2024-09-30',
      category: 'SEO',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      title: 'Tren Teknologi Terbaru 2024',
      slug: 'tren-teknologi-terbaru-2024',
      excerpt: 'Jelajahi tren teknologi yang akan mendominasi tahun 2024.',
      date: '2024-10-01',
      category: 'Trends',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      title: 'Dasar-dasar Cybersecurity',
      slug: 'dasar-dasar-cybersecurity',
      excerpt: 'Pelajari langkah-langkah dasar untuk melindungi data Anda secara online.',
      date: '2024-10-02',
      category: 'Cybersecurity',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      title: 'Memahami Internet of Things (IoT)',
      slug: 'memahami-internet-of-things',
      excerpt: 'Pelajari bagaimana IoT mengubah cara kita berinteraksi dengan teknologi sehari-hari.',
      date: '2024-10-03',
      category: 'IoT',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 9,
      title: 'Memanfaatkan Cloud Computing',
      slug: 'memanfaatkan-cloud-computing',
      excerpt: 'Temukan bagaimana cloud computing dapat meningkatkan efisiensi bisnis Anda.',
      date: '2024-10-04',
      category: 'Cloud',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 10,
      title: 'Strategi Pemasaran Digital yang Efektif',
      slug: 'strategi-pemasaran-digital-yang-efektif',
      excerpt: 'Pelajari strategi pemasaran digital yang dapat meningkatkan penjualan Anda.',
      date: '2024-10-05',
      category: 'Digital Marketing',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 11,
      title: 'Mengembangkan Aplikasi Berbasis Web',
      slug: 'mengembangkan-aplikasi-berbasis-web',
      excerpt: 'Langkah-langkah dalam mengembangkan aplikasi berbasis web dari awal.',
      date: '2024-10-06',
      category: 'Web Development',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 12,
      title: 'Memahami Kecerdasan Buatan',
      slug: 'memahami-kecerdasan-buatan',
      excerpt: 'Pelajari konsep dasar dan aplikasi kecerdasan buatan dalam kehidupan sehari-hari.',
      date: '2024-10-07',
      category: 'Artificial Intelligence',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];



const MainContent = () => {
  return (
    <div className="container mx-auto py-8 flex flex-wrap gap-2 justify-evenly">
      <h2 className="text-3xl font-bold mb-6 w-full lg:text-left text-center">Latest Articles</h2>
      {articles?.map((article) => (
        <div key={article.id} className="bg-white_navy rounded-lg overflow-hidden shadow-md p-2 lg:w-64 w-44 mb-4">
          <img src={article?.image} alt={article.title} className="w-full rounded-lg h-32 object-cover mb-2" />
          <div>
            <h3 className="lg:text-lg text-sm font-semibold mb-1">{article.title}</h3>
            <p className="text-gray-700 mb-1 hidden lg:inline-block">{article.excerpt}</p>
            <span className="text-xs text-gray-500">{article.date} - {article.category}</span>
          </div>
          <div className="mt-2 my-3 flex items-center">
            <Link href={`/read/${article.slug}`} className="font-extrabold hover:bg-blue-600 p-2 rounded-lg bg-blue-500 text-white text-center text-xs">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
