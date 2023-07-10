import { ReactNode } from "react";

export default function MainTemplate({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-cover bg-center p-8 pb-36" style={{
            backgroundImage: "url(./images/bg-dark-blue-aura.png)"
        }}>
            {children}
        </div>
    );
}
