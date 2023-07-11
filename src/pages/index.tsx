import "../styles/index.css";

export default function HomePage() {
    return (
        <>
            <div
                className="relative h-screen overflow-hidden px-4"
            >
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover bg-aura-animate"
                    src="/images/bg-dark-blue-aura.png"
                    alt="bg-dark-blue-aura"
                />
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-left bg-photo"
                    src="/images/IMG_9260.jpg"
                    alt="IMG_9260"
                />

                <div className="relative h-full flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-8xl sm:text-9xl font-bold main-text-animate drop-shadow-md mb-8">
                            nSys
                        </h1>
                        <p className="text-2xl font-thin description-text-animate">
                            <span className="whitespace-nowrap">
                                Hope and Crazy
                            </span>{" "}
                            <span className="whitespace-nowrap">
                                are the way to Success 😁
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
