import { RoleCard } from "../components/card";
import { PageTitle } from "../components/text";
import MainTemplate from "../templates/main";
import { roles } from "../constants/roles";

export default function RolesPage() {
    return (
        <MainTemplate>
            <PageTitle title="Roles" description="บทบาทต่างๆ ของฉัน" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roles.map((r, idx) => (
                    <RoleCard key={idx} {...r} />
                ))}
            </div>
        </MainTemplate>
    );
}
