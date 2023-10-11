import { ReactNode } from "react";
import AnimatedPage from "../components/pages/animated";

export default function MainTemplate({ children }: { children: ReactNode }) {
    return (
        <div
            className="min-h-screen bg-cover bg-center p-8 pb-48"
            style={{
                backgroundImage: "url(/images/bg-dark-blue-aura.png)",
            }}
        >
            <AnimatedPage>{children}</AnimatedPage>
        </div>
    );
}
