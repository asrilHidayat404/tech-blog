import { Link } from '@inertiajs/react';
import React, { useContext, useEffect, useState } from 'react';
import { PostDatas } from '@/Pages/Welcome';
import Card from '../Card';

const MainContent = () => {
    const [posts, setPosts] = useState([])
    const post = useContext(PostDatas)
    useEffect( () => {
        setPosts(post)
    }, [])
    return (
        <div className="container mx-auto py-8 flex flex-wrap gap-2 justify-evenly">
            <h2 className="text-3xl font-bold mb-6 w-full lg:text-left text-center">Latest Articles</h2>
            {
                posts?.map(post => {
                    return (
                        <div key={post.id} className='w-full lg:w-fit md:w-fit lg:p-0 p-3'>
                            <Card post={post} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MainContent;
