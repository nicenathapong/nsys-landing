import { ReactNode } from "react";

export default function MainTemplate({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-cover bg-center bg-[url(./images/bg-dark-blue-aura.png)] p-8 pb-36">
            {children}
        </div>
    );
}
