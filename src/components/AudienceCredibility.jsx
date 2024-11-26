import SectionHeader from "./SectionHeader";
import Chart from "react-apexcharts";

const AudienceCredibility = () => {
    const credibility = 0.77;

    const getColors = (credibility) => {
        if (parseFloat(credibility * 100) > 75) {
            return ["#2AF14A"];
        } else if (parseFloat(credibility * 100) > 50) {
            return ["#EEF22C"];
        } else if (parseFloat(credibility * 100) > 25) {
            return ["#FF7E47"];
        } else {
            return ["#C30000"];
        }
    };

    const credibilityOptions = {
        series: [parseFloat((credibility * 100).toFixed(2))],
        chart: {
            height: 200,
            width: 200,
            type: "radialBar",
            toolbar: {
                show: false,
            },
            parentHeightOffset: 0,
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
                        show: true,
                        offsetY: -10,
                        color: "#808080",
                        fontSize: "13px",
                        fontFamily: "inherit",
                        fontWeight: "400",
                    },
                    value: {
                        formatter: (val) => parseFloat(val).toFixed(0) + "",
                        offsetY: 10,
                        color: "#475569",
                        fontSize: "30px",
                        fontFamily: "inherit",
                        fontWeight: "600",
                        show: true,
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            colors: getColors(credibility),
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
        labels: ["Audience Credibility"],
    };

    return (
        <div>
            <SectionHeader
                title="Audience Credibility"
                description="This metric assesses the authenticity and reliability of the influencer's audience."
            />

            <div className="mt-2 flex gap-4 rounded-lg border p-4">
                <div className="flex flex-1 items-center justify-center overflow-hidden">
                    <Chart
                        type="radialBar"
                        height={200}
                        width={200}
                        options={credibilityOptions}
                        series={[parseFloat((credibility * 100).toFixed(2))]}
                    />
                </div>
                <div className="flex-[1.25]">
                    <p className="text-xs font-medium text-slate-600">
                        Credibility Percentage
                    </p>

                    <div className="flex items-center gap-2 py-1.5">
                        <span className="text-lg font-bold">77%</span>

                        <span className="rounded bg-green-50 px-2 py-0.5 text-sm text-green-500">
                            Excellent
                        </span>
                    </div>

                    <p className="text-xs text-slate-400">
                        This percentage reflects the creator's reliability and
                        trustworthiness, showcasing their credibility in
                        professional terms.
                    </p>

                    <hr className="my-2" />

                    <p className="mt-2 text-xs font-medium text-slate-400">
                        Detail Breakdown
                    </p>

                    <div className="mt-1 space-y-2 rounded-lg bg-slate-50 p-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-600">
                                Total Followers
                            </span>
                            <span className="font-semibold text-slate-900">
                                144.8M
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-600">
                                Active Followers
                            </span>
                            <span className="font-semibold text-slate-900">
                                71.8M
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-600">
                                Inactive Followers
                            </span>
                            <span className="font-semibold text-slate-900">
                                69.4M
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudienceCredibility;
