// CustomEditor.js
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

class CustomEditor extends ClassicEditorBase {}

// Tambahkan plugin yang akan digunakan
CustomEditor.builtinPlugins = [
    Essentials,
    Bold,
    Italic,
    Paragraph
];

// Konfigurasi toolbar
CustomEditor.defaultConfig = {
    toolbar: {
        items: [
            'bold',
            'italic',
            'undo',
            'redo'
        ]
    },
    language: 'en'
};

export default CustomEditor;
