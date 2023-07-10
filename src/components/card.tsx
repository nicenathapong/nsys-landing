import { ReactNode } from "react";
import { Link } from "react-router-dom";

export function FactCard({
    title,
    content,
}: {
    title: string;
    content: string;
}) {
    return (
        <BaseCard>
            <p className="text-white/40">{title}</p>
            <h1 className="text-xl font-semibold">{content}</h1>
        </BaseCard>
    );
}

export function BaseCard({ children }: { children: ReactNode }) {
    return (
        <div className="transition duration-500 ease-in-out hover:scale-[1.02] bg-white/5 border border-white/10 p-6 shadow-md">
            {children}
        </div>
    );
}

export function RoleCard({
    role,
    org,
    description,
    isFormer,
}: {
    role: string;
    org: { name: string; image: string; url: string };
    description: string;
    isFormer?: boolean;
}) {
    return (
        <BaseCard>
            <h1 className="text-xl">
                {isFormer && "former"} <span className="font-bold">{role}</span>{" "}
                at{" "}
                <Link to={org.url} className="font-bold">
                    {org.name}
                </Link>
            </h1>
            <p>{description}</p>
        </BaseCard>
    );
}

export function WorkCard({
    org,
    title,
    description,
    url,
    image,
}: {
    org: {
        name: string;
        url: string;
    };
    title: string;
    description: string;
    url: string;
    image: string;
}) {
    return (
        <BaseCard>
            <div className="flex justify-between">
                <div>
                    <Link to={url} className="text-xl font-bold underline">
                        {title}
                    </Link>
                    <p>{description}</p>
                </div>
                <Link to={org.url} className="text-sm underline">
                    {org.name}
                </Link>
            </div>
        </BaseCard>
    );
}
