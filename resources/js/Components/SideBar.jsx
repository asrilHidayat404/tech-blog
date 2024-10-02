import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

const SideBar = ({ isOpen, setIsOpen }) => {
    const [postOpen, setPostOpen] = useState(false)
    const links = [
        { label: "Postingan", classIcon: "fas fa-file-alt mr-2", href: "postingan", key: "posting" },
        { label: "Statistik", classIcon: "fas fa-chart-bar mr-2", href: "statistik", key: "statistik" },
        { label: "Komentar", classIcon: "fas fa-comments mr-2", href: "komentar", key: "komentar" },
        { label: "Penghasilan", classIcon: "fas fa-dollar-sign mr-2", href: "penghasilan", key: "penghasilan" },
        { label: "Halaman", classIcon: "fas fa-file mr-2", href: "halaman", key: "halaman" },
        { label: "Tata Letak", classIcon: "fas fa-th-large mr-2", href: "tata-letak", key: "tata-letak" },
        { label: "Tema", classIcon: "fas fa-paint-brush mr-2", href: "tema", key: "tema" },
        { label: "Setelan", classIcon: "fas fa-cog mr-2", href: "setelan", key: "setelan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
        { label: "Daftar Bacaan", classIcon: "fas fa-book mr-2", href: "daftar-bacaan", key: "daftar-bacaan" },
    ];

    return (
        <>
            {/* Sidebar untuk layar besar */}
            <div className={`lg:w-64 w-64 bg-white shadow-md fixed inset-y-0 left-0 z-40 ${isOpen ? 'block' : 'hidden'} lg:block scrollable overflow-auto`}>
                <div className="flex items-center justify-between p-4 border-b lg:hidden">
                    <div
                        className="w-8 h-8 flex flex-col justify-between items-center p-0 cursor-pointer"
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        <span className="block w-full text-3xl duration-300">x</span>
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold">Simple Short Stories</h2>
                    <button
                        className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md"
                        onClick={() => setPostOpen(prev => !prev)}
                    >+ POSTINGAN BARU</button>
                    {
                        postOpen && (<div className='w-full text-center bg-gray-200 mt-2 p-1 shadow-lg'>
                            <ul>
                                <li className="w-full"><Link href='/write'>New</Link></li>
                            </ul>
                        </div>)
                    }
                </div>
                <nav className="mt-4">
                    <ul>
                        {links.map((link, i) => (
                            <Link href={`/dashboard/${link.href}`} key={i} className="flex items-center p-4">
                                <i className={link.classIcon}></i>
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Tombol untuk toggle sidebar di mobile */}
        </>
    );
};

export default SideBar;
