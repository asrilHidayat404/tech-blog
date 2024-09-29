import Footer from '@/Components/HomeComponents/Footer';
import Hero from '@/Components/HomeComponents/Hero';
import MainContent from '@/Components/HomeComponents/MainContent';
import Navbar from '@/Components/HomeComponents/Navbar';
import { Head, Link } from '@inertiajs/react';
import { createContext } from 'react';

export const PostDatas = createContext()

export default function Welcome({posts}) {

    return (
        <>
            <Navbar />
            <Hero />
            <PostDatas.Provider value={posts}>
                <MainContent />
            </PostDatas.Provider>
            <Footer />
        </>
    );
}

