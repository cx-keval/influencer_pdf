import SectionHeader from "./SectionHeader";

const AudienceOverview = ({ platform }) => {
    return (
        <div>
            <SectionHeader
                title="Audience Overview"
                description="This section shows aggregate metrics of the influencer’s audience"
            />

            <div
                className={`mt-2 grid gap-4 ${platform === "instagram" ? "grid-cols-2" : "grid-cols-4"}`}
            >
                <div className="rounded-lg border p-4">
                    <p className="text-sm font-medium text-slate-400">
                        Country
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-600">
                        90.37%
                    </p>
                    <p className="text-sm font-medium text-slate-600">India</p>
                </div>
                <div className="rounded-lg border p-4">
                    <p className="text-sm font-medium text-slate-400">City</p>
                    <p className="mt-2 text-lg font-semibold text-slate-600">
                        9.37%
                    </p>
                    <p className="text-sm font-medium text-slate-600">Mumbai</p>
                </div>
                <div className="rounded-lg border p-4">
                    <p className="text-sm font-medium text-slate-400">Gender</p>
                    <p className="mt-2 text-lg font-semibold text-slate-600">
                        77.24%
                    </p>
                    <p className="text-sm font-medium text-slate-600">Male</p>
                </div>
                <div className="rounded-lg border p-4">
                    <p className="text-sm font-medium text-slate-400">
                        Age Group
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-600">
                        45.56%
                    </p>
                    <p className="text-sm font-medium text-slate-600">25-34</p>
                </div>
            </div>
        </div>
    );
};

export default AudienceOverview;
