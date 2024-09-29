import React from 'react'

const SideBar = () => {
    return (
        <div className="w-64 bg-white shadow-md">
            <div className="flex items-center justify-between p-4 border-b">
                <i className="fas fa-bars text-xl"></i>
                <i className="fab fa-blogger text-orange-500 text-3xl"></i>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold">Simple Short Stories</h2>
                <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md">+ POSTINGAN BARU</button>
            </div>
            <nav className="mt-4">
                <ul>
                    <li className="flex items-center p-4 text-orange-500">
                        <i className="fas fa-file-alt mr-2"></i>
                        <span>Postingan</span>
                    </li>
                    <li className="flex items-center p-4">
                        <i className="fas fa-chart-bar mr-2"></i>
                        <span>Statistik</span>
                    </li>
                    <li className="flex items-center p-4">
                        <i className="fas fa-comments mr-2"></i>
                        <span>Komentar</span>
                    </li>
                    <li className="flex items-center p-4">
                        <i className="fas fa-dollar-sign mr-2"></i>
                        <span>Penghasilan</span>
                    </li>
                    <li className="flex items-center p-4">
                        <i className="fas fa-file mr-2"></i>
                        <span>Halaman</span>
                    </li>
                    <li className="flex items-center p-4">
                        <i className="fas fa-th-large mr-2"></i>
                        <span>Tata Letak</span>
                    </li>
                    <li className="flex items-center p-4">
                        <i className="fas fa-paint-brush mr-2"></i>
                        <span>Tema</span>
                    </li>
                    <li className="flex items-center p-4">
                        <i className="fas fa-cog mr-2"></i>
                        <span>Setelan</span>
                    </li>
                    <li className="flex items-center p-4">
                        <i className="fas fa-book mr-2"></i>
                        <span>Daftar Bacaan</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar
