import { ReactNode } from "react";
import AnimatedPage from "../components/pages/animated";

export default function MainTemplate({ children }: { children: ReactNode }) {
    return (
        <div className="relative min-h-screen bg-cover bg-center p-8 pb-48">
            <div className="absolute top-0 left-0 w-full h-full z-0 aona-gradient-1"></div>
            <div className="absolute top-0 left-0 w-full h-full z-10 aona-gradient-2"></div>
            <AnimatedPage>
                <div className="relative z-20">{children}</div>
            </AnimatedPage>
        </div>
    );
}
