import { IconInfoCircle } from "@tabler/icons-react";
import { beautify, capitalizeWord } from "../utils";
import SectionHeader from "./SectionHeader";

const METRICS = [
    {
        label: "Avg. Views",
        value: 1000,
        precision: 1,
        showCurrency: false,
        postFix: "",
    },
    {
        label: "Avg. Likes",
        value: 248,
        precision: 1,
        showCurrency: false,
        postFix: "",
    },
    {
        label: "Avg. Comments",
        value: 786,
        precision: 1,
        showCurrency: false,
        postFix: "",
    },
    {
        label: "Engagement Rate",
        value: 2.4678,
        precision: 3,
        showCurrency: false,
        postFix: "%",
    },
];

const ContentStatsOverview = ({ type }) => {
    return (
        <div className="flex-1">
            <SectionHeader
                title={`${capitalizeWord(type)} Overview`}
                description={`This section shows aggregate metrics of the influence’s ${type}.`}
            />
            <div className="mt-2 grid grid-cols-2 gap-4">
                {METRICS.filter(({ label }) =>
                    type === "feed" ? label !== "Avg. Views" : true
                ).map(({ label, value, postFix, precision }) => (
                    <div
                        key={label}
                        className="space-y-2 rounded-md border px-3 py-3 text-sm"
                    >
                        <p className="text-slate-400">{label}</p>
                        <p className="text-2xl font-semibold text-slate-600">
                            {beautify(value, precision)}
                            {postFix}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-2 flex items-center gap-1 rounded-sm bg-slate-50 px-2 py-1 text-sm text-slate-600">
                <IconInfoCircle className="h-4 w-4" />
                Metrics are calculated based on your most recent 24 {type}.
            </div>
        </div>
    );
};

export default ContentStatsOverview;
