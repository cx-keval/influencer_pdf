import SectionHeader from "./SectionHeader";
import Chart from "react-apexcharts";

const SocialScore = ({ platform }) => {
    const socialScoreOptions = {
        series: [77],
        chart: {
            height: 300,
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
                    size: "75%",
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
        <div className="flex flex-col gap-2">
            <SectionHeader
                title="Social Score"
                description={`The "Social Score" section offers a comprehensive analysis of overall impact and reach.`}
            />

            <div className="flex flex-1 items-center gap-4 rounded-md border p-4 pl-0">
                <div className="flex h-full flex-1 items-center justify-center border-r">
                    <Chart
                        width={225}
                        options={socialScoreOptions}
                        series={[77]}
                        height={300}
                        type="radialBar"
                    />
                </div>

                <div className="grid flex-[2.5] shrink-0 grid-cols-3 gap-4">
                    <div className="space-y-1 rounded-md border p-4">
                        <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-slate-400">
                                Followers
                            </span>
                            <span className="rounded bg-orange-50 px-2 py-0.5 text-sm capitalize text-orange-500">
                                Fair
                            </span>
                        </div>

                        <p className="text-xl font-semibold">12K</p>

                        <p className="text-sm font-normal capitalize text-slate-400">
                            significant audience, considerable influence.
                        </p>
                    </div>
                    {/* ---------------- */}
                    <div className="space-y-1 rounded-md border p-4">
                        <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-slate-400">
                                Audience Credibility
                            </span>
                            <span className="rounded bg-green-50 px-2 py-0.5 text-sm capitalize text-green-500">
                                Excellent
                            </span>
                        </div>

                        <p className="text-xl font-semibold">125K</p>

                        <p className="text-sm font-normal capitalize text-slate-400">
                            highly credible, widely respected
                        </p>
                    </div>
                    {/* ---------------- */}
                    <div className="space-y-1 rounded-md border p-4">
                        <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-slate-400">
                                Last 6 Month Growth Rate
                            </span>
                            <span className="rounded bg-blue-50 px-2 py-0.5 text-sm capitalize text-blue-500">
                                Good
                            </span>
                        </div>

                        <p className="text-xl font-semibold">7.126%</p>

                        <p className="text-sm font-normal capitalize text-slate-400">
                            moderate growth, shows potential.
                        </p>
                    </div>

                    <div className="space-y-1 rounded-md border p-4">
                        <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-slate-400">
                                Weekly Post Frequency
                            </span>
                            <span className="rounded bg-green-50 px-2 py-0.5 text-sm capitalize text-green-500">
                                Excellent
                            </span>
                        </div>

                        <p className="text-xl font-semibold">10</p>

                        <p className="text-sm font-normal capitalize text-slate-400">
                            highly active, consistently engaging.
                        </p>
                    </div>

                    <div className="space-y-1 rounded-md border p-4">
                        <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-slate-400">
                                Engagement rate
                            </span>
                            <span className="rounded bg-red-50 px-2 py-0.5 text-sm capitalize text-red-500">
                                Low
                            </span>
                        </div>

                        <p className="text-xl font-semibold">1.1%</p>

                        <p className="text-sm font-normal capitalize text-slate-400">
                            poor engagement, needs improvement.
                        </p>
                    </div>

                    <div className="space-y-1 rounded-md border p-4">
                        <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-slate-400">
                                View to follow Ratio
                            </span>
                            <span className="rounded bg-blue-50 px-2 py-0.5 text-sm capitalize text-blue-500">
                                Good
                            </span>
                        </div>

                        <p className="text-xl font-semibold">1.82</p>

                        <p className="text-sm font-normal capitalize text-slate-400">
                            limited reach per follower.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialScore;
