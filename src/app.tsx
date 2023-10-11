import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages";
import Navbar from "./components/navbar";
import FactsPage from "./pages/facts";
import WorksPage from "./pages/works";
import RolesPage from "./pages/roles";
import { AnimatePresence } from "framer-motion";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/facts",
        element: <FactsPage />,
    },
    {
        path: "/roles",
        element: <RolesPage />,
    },
    {
        path: "/works",
        element: <WorksPage />,
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
];

export default function App() {
    return (
        <>
            <div className="bg-black text-white">
                <BrowserRouter>
                    <div className="min-h-screen">
                        <RoutesWithTransition />
                        <Navbar />
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
}

function RoutesWithTransition() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                {routes.map((route, i) => (
                    <Route key={i} {...route} />
                ))}
            </Routes>
        </AnimatePresence>
    );
}
