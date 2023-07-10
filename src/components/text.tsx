export function PageTitle({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="mb-8">
            <h1 className="font-bold text-6xl mb-2">{title}</h1>
            <p className="font-semibold text-2xl">{description}</p>
        </div>
    );
}
