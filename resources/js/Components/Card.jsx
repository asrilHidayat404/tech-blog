import { Link } from '@inertiajs/react'
import React from 'react'

const Card = ({ post }) => {
    console.log(post.thumbnail)
    return (
        <div className="bg-white flex flex-col justify-between rounded-lg overflow-hidden shadow-xl p-2 lg:w-64 md:w-64 lg:min-h-[400px] min-h-[200px] mb-4">
            <div className='lg:inline-block flex flex-col gap-4'>
                <img src={`storage/${post.thumbnail}`} className='rounded-lg' alt="" />
                <h3 className="lg:text-lg text-lg font-semibold mb-1">
                    {post.limit_title}
                </h3>
                <p className="text-gray-700 mb-1 lg:inline-block">
                    {post.limit_excerpt}
                </p>
                    <span className="text-xs text-gray-500">
                        {post.upload_time} - {post.category ? post.category.category_name : 'No Category'}
                    </span>
            </div>
            <div className="mt-2 my-3 flex items-center">
                <Link href={`/read/${post.slug}`} className="font-extrabold hover:bg-blue-600 p-2 rounded-lg bg-blue-500 text-white text-center text-xs">Read More</Link>
            </div>
        </div>
    )
}

export default Card
