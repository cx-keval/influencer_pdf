import { CXSocialIcon } from "../components/CXSocialIcon";
import SectionHeader from "../components/SectionHeader";
import Chart from "react-apexcharts";
import { beautify } from "../utils";

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
        label: "Following",
        value: 1876,
        precision: 1,
        postFix: "",
    },
    {
        label: "Engagement Rate",
        value: 8.76542,
        precision: 3,
        postFix: "%",
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
];

const PageTwo = () => {
    const socialScoreOptions = {
        series: [77],
        chart: {
            height: 250,
            type: "radialBar",
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -180,
                endAngle: 180,
                hollow: {
                    margin: 0,
                    size: "80%",
                    background: "#fff",
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.2,
                    },
                },
                track: {
                    background: "#fff",
                    strokeWidth: "70%",
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 1,
                        opacity: 0.35,
                    },
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -16,
                        show: true,
                        color: "#808080",
                        fontSize: "14px",
                        fontFamily: "inherit",
                        fontWeight: "400",
                    },
                    value: {
                        formatter: (val) => `${parseFloat(val).toFixed(0)}`,
                        offsetY: 4,
                        color: "#475569",
                        fontSize: "30px",
                        fontFamily: "inherit",
                        fontWeight: "600",
                        show: true,
                    },
                },
            },
        },
        legend: {
            show: false,
        },
        fill: {
            type: "gradient",
            colors: ["#3b82f6", "#60a5fa"],
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.1,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Score"],
    };

    return (
        <div className="flex-1 p-4">
            <div className="grid grid-cols-2 items-stretch gap-4">
                <div className="space-y-4 rounded-md border p-4">
                    <div className="flex items-stretch gap-4">
                        <img
                            src="https://yt3.googleusercontent.com/ytc/AIdro_lISfErzX3mYCJTAcWWzz572I6wZQvr2JWEudZx1A=s480-c-k-c0x00ffffff-no-rj"
                            alt="profile"
                            className="w-[150px] rounded-md"
                        />

                        <div className="flex flex-1 flex-col gap-4 overflow-hidden">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex-1 overflow-hidden">
                                    <p className="truncate text-lg font-medium text-slate-600">
                                        Ashish Chanchlani
                                    </p>
                                    <p className="truncate font-medium text-slate-400">
                                        @ashishchanchlani
                                    </p>
                                </div>

                                <div className="flex items-center gap-1 rounded-full border px-3 py-1 font-semibold text-slate-600">
                                    <CXSocialIcon platform="instagram" />
                                    Instagram
                                </div>
                            </div>

                            <div className="flex flex-1 items-stretch gap-4">
                                <div className="flex-1 space-y-1 overflow-hidden rounded-md border p-2">
                                    <p className="flex items-center gap-1 text-sm text-slate-400">
                                        Email
                                    </p>
                                    <p className="whitespace-normal break-words text-sm font-medium text-slate-600">
                                        Pranjal.pranjalgupta.gupta@gmail.com
                                    </p>
                                </div>
                                <div className="flex-1 space-y-1 overflow-hidden rounded-md border p-2">
                                    <p className="flex items-center gap-1 text-sm text-slate-400">
                                        Phone Number
                                    </p>
                                    <p className="whitespace-normal break-words text-sm font-medium text-slate-600">
                                        9876543210
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-md bg-slate-50 p-4">
                        <p className="line-clamp-4 text-sm font-medium text-slate-600">
                            Remember, these are general reasons, and the actual
                            time taken for check clearance might vary based on
                            specific circumstances, bank policies, and any
                            changes in the banking system. Always check with
                            your bank for precise information regarding check
                            clearance times. Remember, these are general
                            reasons, and the actual time taken for check
                            clearance might vary based on specific
                            circumstances, bank policies, and any changes in the
                            banking system. Always check with your bank for
                            precise information regarding check clearance times.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <SectionHeader
                        title="Social Score"
                        description={`The "Social Score" section offers a comprehensive analysis of overall impact and reach.`}
                    />

                    <div className="flex flex-1 items-center gap-4 rounded-md border p-4 pl-0">
                        <div className="flex h-full flex-1 items-center justify-center border-r">
                            <Chart
                                width={150}
                                options={socialScoreOptions}
                                series={[77]}
                                height={150}
                                type="radialBar"
                            />
                        </div>

                        <div className="flex-[2.25] space-y-2">
                            <p className="font-medium text-slate-600">
                                Score Insights
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                                <div className="flex gap-1">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-green-500" />
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-slate-600">
                                            Influencer Credibility
                                        </p>
                                        <p className="text-slate-400">
                                            Highly credible, widely respected.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-red-500" />
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-slate-600">
                                            Avg. views to follower ratio
                                        </p>
                                        <p className="text-slate-400">
                                            Limited reach per follower.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-slate-600">
                                            Engagement Rate
                                        </p>
                                        <p className="text-slate-400">
                                            Strong engagement, resonates well
                                            with audience.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-green-500" />
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-slate-600">
                                            Weekly Post Frequency
                                        </p>
                                        <p className="text-slate-400">
                                            Highly active, consistently
                                            engaging.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-500" />
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-slate-600">
                                            Last 6 Months Growth Rate
                                        </p>
                                        <p className="text-slate-400">
                                            Moderate growth, shows potential.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-red-500" />
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-slate-600">
                                            Followers
                                        </p>
                                        <p className="text-slate-400">
                                            Smaller audience, niche influence
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionHeader
                title="Influencer Overview"
                description="Provides a summary of an influencer's profile engagement metrics."
                className="mt-4"
            />

            <div className="mt-2 grid grid-cols-4 gap-4">
                {STATS.map(({ label, precision, value, postFix }) => (
                    <div
                        key={label}
                        className="space-y-1 rounded-md border p-4"
                    >
                        <p className="text-sm font-medium text-slate-400">
                            {label}
                        </p>
                        <p className="text-xl font-semibold text-slate-600">{`${beautify(value, precision)}${postFix}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageTwo;
