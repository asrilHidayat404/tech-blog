import Footer from '@/Components/HomeComponents/Footer';
import Hero from '@/Components/HomeComponents/Hero';
import MainContent from '@/Components/HomeComponents/MainContent';
import { createContext } from 'react';

export const PostDatas = createContext()

export default function Home({posts}) {

    return (
        <>
            <Hero />
            <PostDatas.Provider value={posts}>
                <MainContent />
            </PostDatas.Provider>
        </>
    );
}

