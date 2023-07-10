import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import Navbar from "./components/navbar";
import FactsPage from "./pages/facts";
import WorksPage from "./pages/works";
import RolesPage from "./pages/roles";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/facts",
        element: <FactsPage />
    },
    {
        path: "/roles",
        element: <RolesPage />
    },
    {
        path: "/works",
        element: <WorksPage />
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
                        <Routes>
                            {routes.map((r) => (
                                <Route {...r} />
                            ))}
                        </Routes>
                        <Navbar />
                    </div>
                </BrowserRouter>
            </div>
        </>
    );
}
