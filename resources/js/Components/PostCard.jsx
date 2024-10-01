import React, { useState } from 'react';


const PostCard = () => {
    const [postDatas, setPostDatas] = useState([
        {
            id: 1,
            title: "Mutans and Humans",
            postedAt: "Min, 01 January 2009",
            publisher: "Eric Lansher",
        }
    ])
    return (
        <>
            {
                postDatas.map((post) => {
                return (
                    <div key={post.id} className="mt-4 bg-white p-4 rounded-md shadow-md flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md">
                                <i className="fas fa-text-height text-2xl text-gray-500"></i>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-gray-700">{post.title}</h3>
                                <span className="text-orange-500">Draf</span> <span className="text-gray-500">• {post.postedAt}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700">{post.publisher}</span>
                            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-500">0</span>
                                <i className="fas fa-comment text-gray-500"></i>
                                <span className="text-gray-500">0</span>
                                <i className="fas fa-eye text-gray-500"></i>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default PostCard
