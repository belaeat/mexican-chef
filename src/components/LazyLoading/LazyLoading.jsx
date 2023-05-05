import React, { lazy } from 'react';

const LazyComponent = lazy(() => import('../ChefsPage/ChefsPage'))

const LazyLoading = () => {
    return (
        <div>
            <Suspense fallback={<div className="radial-progress text-yellow-300" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>70%</div>}>
                <LazyComponent />
            </Suspense>
        </div>
    );
};

export default LazyLoading;