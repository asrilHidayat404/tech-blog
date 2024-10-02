import { useForm } from '@inertiajs/react';
import React from 'react'

const DashboardHeader = ({ isOpen, setIsOpen }) => {
    const { post } = useForm();

    const LogOut = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
            {/* <button
                className="lg:hidden top-8 left-4 bg-orange-500 text-white p-2 rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
            </button> */}
            <button
                className="lg:hidden -left-2 p-2 rounded-full shadow-lg relative w-10 h-10 flex items-center justify-center bg-orange-500"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="hamburger">
                    <span className="block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ease-in-out"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ease-in-out"></span>
                    <span className="block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out"></span>
                </div>
            </button>

            <input
                type="text"
                placeholder="Telusuri postingan"
                className="w-1/2 lg:inline hidden p-2 border rounded-md"
            />
            <div className="flex items-center space-x-4">
                <i className="fas fa-info-circle text-xl"></i>
                <i className="fas fa-question-circle text-xl"></i>
                <i className="fas fa-th text-xl"></i>
                <div className="w-12 h-12">
                    <img src="https://avatars.mds.yandex.net/get-shedevrum/12363575/4485e12ecbe311eebc2d5e02d8de8a56/orig" alt="atemin" className=' rounded-full' />
                </div>
                <form onClick={LogOut} action="">
                    <button
                        className="bg-orange-600 text-white py-3 px-5 hover:bg-orange-400 rounded-lg"
                        type="submit"
                    >
                        Logout
                    </button>
                </form>
            </div>
        </header>
    )
}

export default DashboardHeader
