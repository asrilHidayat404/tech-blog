import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useForm } from '@inertiajs/react';

const Write = () => {
    const [title, setTitle] = useState(''); // State untuk judul
    const [category, setCategory] = useState(''); // State untuk kategori
    const [content, setContent] = useState(''); // State untuk konten
    const [thumbnail, setThumbnail] = useState()
    const { post } = useForm();

    useEffect(() => {
        console.log({ title, category, content, thumbnail }); // Menampilkan data di console
    }, [title, category, content]);

    const submitPost = (e) => {
        e.preventDefault();

        // Mengirim data ke server
        post(route('write'), {
            title,
            category,
            content,
        });
    };

    return (
        <div className="mt-28 px-10">
            <p>

            </p>
            <div className="w-full flex justify-between">
                <h2>CKEditor Example</h2>
            </div>
            <form onSubmit={submitPost}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Thumbnail
                    </label>
                    <input
                        type="file"
                        id="thumbnail"
                        onChange={(e) => setThumbnail(e.target)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Judul
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Kategori
                    </label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Konten
                    </label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={content}
                        config={{
                            toolbar: [
                                'heading', '|',
                                'alignment',
                                'bold', 'italic', '|',
                                'bulletedList', 'numberedList', '|',
                                'blockQuote', '|',
                                'undo', 'redo'
                            ],
                            alignment: {
                                options: [
                                    'left', 'right', 'center', 'justify'
                                ]
                            }
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setContent(data);
                        }}
                    />
                </div>
                <button type="submit" className="p-3 px-7 bg-orange-500 text-white">
                    Post Now
                </button>
            </form>
            <div>
                <h3>Preview Konten</h3>
                <h4>{title}</h4>
                <h5>Kategori: {category}</h5>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Write;
