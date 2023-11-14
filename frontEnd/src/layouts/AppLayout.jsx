import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function LoadingScreen() {
    return (
        <div>loading...</div>
    );
}

export default function AppLayout() {
    const location = useLocation();

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [location]);

    return (
        <>
        <h1>hhhh</h1>
            <Suspense fallback={<LoadingScreen />}>
                <Outlet />
            </Suspense>
        </>
    );
}
