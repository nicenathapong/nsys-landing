import { WorkCard } from "../components/card";
import { PageTitle } from "../components/text";
import { works } from "../constants/works";
import MainTemplate from "../templates/main";

export default function WorksPage() {
    return (
        <MainTemplate>
            <PageTitle title="Works" description="ผลงานต่างๆ ของฉัน" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {works.map((w, idx) => (
                    <WorkCard key={idx} {...w} />
                ))}
            </div>
        </MainTemplate>
    );
}
