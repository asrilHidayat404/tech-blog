import DashboardHeader from '@/Components/DashboardHeader';
import PostCard from '@/Components/PostCard';
import SideBar from '@/Components/SideBar';
import { useState } from 'react';

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:ml-64"> {/* Tambahkan lg:ml-64 agar konten utama bergeser ketika sidebar terbuka di layar besar */}
                <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Semua (1)</h2>
                        <span className="text-blue-500">KELOLA</span>
                    </div>
                    <div>
                        <PostCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
