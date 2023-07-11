import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

export function FactCard({
    title,
    content,
    isLoveEasterEgg,
}: {
    title: string;
    content: string;
    isLoveEasterEgg?: boolean;
}) {
    return (
        <BaseCard>
            <p className="text-white/40">{title}</p>
            {isLoveEasterEgg ? (
                <Link to="https://m307.dev" className="text-xl font-semibold transition duration-500 ease-in-out hover:text-blue-500">
                    {content}
                </Link>
            ) : (
                <h1 className="text-xl font-semibold">{content}</h1>
            )}
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
                <Link to={org.url} className="font-bold underline">
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
    const [isShowImage, setShowImage] = useState(false);

    return (
        <div className="transition duration-500 ease-in-out hover:scale-[1.02] bg-white/5 h-fit border border-white/10 shadow-md">
            <div className="p-6">
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
            </div>
            <button
                type="button"
                className="w-full bg-white/5 text-xs py-1.5 transition duration-500 ease-in-out hover:bg-white/10"
                onClick={(e) => {
                    e.preventDefault();
                    setShowImage(!isShowImage);
                }}
            >
                {isShowImage ? "Close" : "Open"} preview
            </button>
            {isShowImage && (
                <div
                    className="bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className="h-full p-4 flex justify-center backdrop-blur-sm bg-black/20">
                        <img
                            className="max-h-[200px] w-auto shadow-md"
                            src={image}
                            alt={`${title}_preview`}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
