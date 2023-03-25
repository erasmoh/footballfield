"use client"

import { lazy, Suspense } from "react";

const PlayersForm = lazy(() => import("../PlayersForm/PlayersForm"));
const Footer = lazy(() => import("../Footer/Footer"));

const HomePage = () => {
    return (
        <div className="container" data-testid="footbalfield">
            <Suspense fallback={<div>Loading...</div>}>
                <PlayersForm />
                <Footer />
            </Suspense>
        </div>
    );
};

export default HomePage;