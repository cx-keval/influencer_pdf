import { beautify } from "../utils";
import SectionHeader from "./SectionHeader";

const STATS = [
    {
        label: "Followers",
        value: 2_500_000,
        precision: 1,
        postFix: "",
    },
    {
        label: "Total Post",
        value: 24,
        precision: 1,
        postFix: "",
    },
    {
        label: "Avg Views",
        value: 1_250_000,
        precision: 1,
        postFix: "",
    },
    {
        label: "Avg Likes",
        value: 19500,
        precision: 1,
        postFix: "",
    },
    {
        label: "Avg Comments",
        value: 5500,
        precision: 1,
        postFix: "",
    },
    {
        label: "Engagement Rate",
        value: 8.76542,
        precision: 3,
        postFix: "%",
    },
];

const OverviewStats = ({ platform }) => {
    return (
        <div className="flex flex-col gap-2">
            <SectionHeader
                title="Influencer Overview"
                description="Provides a summary of an influencer's profile engagement metrics."
            />

            <div className="grid flex-1 grid-cols-3 gap-4">
                {STATS.filter(({ label }) => {
                    if (platform === "instagram") {
                        return true;
                    } else {
                        return label !== "Avg Views";
                    }
                }).map(({ label, precision, value, postFix }) => (
                    <div
                        key={label}
                        className="flex flex-col justify-center gap-2 rounded-md border p-4"
                    >
                        <p className="font-medium text-slate-400">{label}</p>
                        <p className="text-2xl font-semibold text-slate-600">{`${beautify(value, precision)}${postFix}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OverviewStats;
