import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect } from 'react';

const Write = () => {
    const [editorData, setEditorData] = useState('');
    useEffect( () => {
        console.log(editorData)
    }, [editorData])
    return (
        <div className="mt-28 px-10">
            <h2>CKEditor Example</h2>
            <CKEditor
                config={{
                    toolbar: [
                        'heading', '|',
                        'alignment', // Tambahkan alignment ke toolbar
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
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                }}
            />
            <div>
                <h3>Editor Content</h3>
                <div>{editorData}</div>
            </div>
        </div>
    );
};

export default Write;
