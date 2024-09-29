import SideBar from '@/Components/SideBar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

// export default function Dashboard() {
//     return (
//         <AuthenticatedLayout
//             header={
//                 <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                     <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
//                         <div className="p-6 text-gray-900 dark:text-gray-100">
//                             You're logged in!
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }

export default function Dashboard () {
    const {post} = useForm()
    const LogOut = (e) => {
        e.preventDefault()
        post(route('logout'));
    }
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideBar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between p-4 bg-white shadow-md">
                    <input type="text" placeholder="Telusuri postingan" className="w-1/2 p-2 border rounded-md" />
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-info-circle text-xl"></i>
                        <i className="fas fa-question-circle text-xl"></i>
                        <i className="fas fa-th text-xl"></i>
                        <div className="w-8 h-8 rounded-full bg-gray-300">coy</div>
                        <form onClick={LogOut} action="">
                            <button className='bg-orange-600 text-white py-3 px-5 hover:bg-orange-400 rounded-lg' type='submit'>Logout</button>
                        </form>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Semua (1)</h2>
                        <span className="text-blue-500">KELOLA</span>
                    </div>
                    <div className="mt-4 bg-white p-4 rounded-md shadow-md flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md">
                                <i className="fas fa-text-height text-2xl text-gray-500"></i>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-gray-700">(Tanpa judul)</h3>
                                <span className="text-orange-500">Draf</span> <span className="text-gray-500">• Min 10.03</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">Asril Hidayat</span>
                            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-500">0</span>
                                <i className="fas fa-comment text-gray-500"></i>
                                <span className="text-gray-500">0</span>
                                <i className="fas fa-eye text-gray-500"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
