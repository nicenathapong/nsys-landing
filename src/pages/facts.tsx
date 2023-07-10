import { FactCard } from "../components/card";
import { PageTitle } from "../components/text";
import { facts } from "../constants/facts";
import MainTemplate from "../templates/main";

export default function FactsPage() {
    return (
        <MainTemplate>
            <PageTitle title="Facts" description="สิ่งน่ารู้เกี่ยวกับฉัน" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facts.map((f, idx) => (
                    <FactCard key={idx} {...f} />
                ))}
            </div>
        </MainTemplate>
    );
}
