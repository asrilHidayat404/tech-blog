import Footer from '@/Components/HomeComponents/Footer';
import Hero from '@/Components/HomeComponents/Hero';
import MainContent from '@/Components/HomeComponents/MainContent';
import Navbar from '@/Components/HomeComponents/Navbar';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {


    return (
        <>
            <Navbar />
            <Hero />
            <MainContent />
            <Footer />
        </>
    );
}
