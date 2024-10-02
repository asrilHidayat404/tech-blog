import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import Navbar from './Components/HomeComponents/Navbar';
import Footer from './Components/HomeComponents/Footer';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title ? title : "Ciak"} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        const isDashboard = props.initialPage.component === 'Dashboard';
        root.render(
        <>
            {!isDashboard && <Navbar />} {/* Render Navbar jika bukan halaman dashboard */}
            <App {...props} />
            {!isDashboard && <Footer />} {/* Render Footer jika bukan halaman dashboard */}
        </>
    );
    },
    progress: {
        color: '#4B5563',
    },
});
