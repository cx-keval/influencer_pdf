import SectionHeader from "../components/SectionHeader";
import Chart from "react-apexcharts";

const PageFive = () => {
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
            height: 245,
            width: 245,
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
                        formatter: (val) => parseFloat(val).toFixed(0) + "",
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
        // fill: {
        //     type: "solid",
        //     colors: getColors(credibility),
        // },
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
        <div className="flex-1 p-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <SectionHeader
                        title="Audience Overview"
                        description="This section shows aggregate metrics of the influencer’s audience"
                    />

                    <div className="mt-2 grid grid-cols-2 gap-4">
                        <div className="rounded-lg border p-4">
                            <p className="text-sm font-medium text-slate-400">
                                Country
                            </p>
                            <p className="mt-2 text-lg font-semibold text-slate-600">
                                90.37%
                            </p>
                            <p className="text-sm font-medium text-slate-600">
                                India
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <p className="text-sm font-medium text-slate-400">
                                City
                            </p>
                            <p className="mt-2 text-lg font-semibold text-slate-600">
                                9.37%
                            </p>
                            <p className="text-sm font-medium text-slate-600">
                                Mumbai
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <p className="text-sm font-medium text-slate-400">
                                Gender
                            </p>
                            <p className="mt-2 text-lg font-semibold text-slate-600">
                                77.24%
                            </p>
                            <p className="text-sm font-medium text-slate-600">
                                Male
                            </p>
                        </div>
                        <div className="rounded-lg border p-4">
                            <p className="text-sm font-medium text-slate-400">
                                Age Group
                            </p>
                            <p className="mt-2 text-lg font-semibold text-slate-600">
                                45.56%
                            </p>
                            <p className="text-sm font-medium text-slate-600">
                                25-34
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <SectionHeader
                        title="Audience Credibility"
                        description="This metric assesses the authenticity and reliability of the influencer's audience."
                    />

                    <div className="mt-2 flex gap-4 rounded-lg border p-4">
                        <div className="flex flex-1 items-center justify-center overflow-hidden">
                            <Chart
                                type="radialBar"
                                height={245}
                                width={245}
                                options={credibilityOptions}
                                series={[
                                    parseFloat((credibility * 100).toFixed(2)),
                                ]}
                            />
                        </div>
                        <div className="flex-[1.25]">
                            <p className="text-xs font-medium text-slate-600">
                                Credibility Percentage
                            </p>

                            <div className="flex items-center gap-2 py-1.5">
                                <span className="font-semibold">77%</span>

                                <span className="rounded-full bg-green-100 px-2 py-0.5 text-sm text-green-500">
                                    Excellent
                                </span>
                            </div>

                            <p className="text-sm text-slate-400">
                                This percentage reflects the creator's
                                reliability and trustworthiness, showcasing
                                their credibility in professional terms.
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
                                    <span className="text-sm font-medium text-slate-600">
                                        144.8M
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-600">
                                        Active Followers
                                    </span>
                                    <span className="text-sm font-medium text-slate-600">
                                        71.8M
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-600">
                                        Inactive Followers
                                    </span>
                                    <span className="text-sm font-medium text-slate-600">
                                        69.4M
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionHeader
                title="Audience Geography"
                description="This section provides detailed insights into the geographic locations of the influencer's audience."
                className="mt-4"
            />

            <div className="mt-2 grid grid-cols-3 gap-4">
                <div className="space-y-6 rounded-lg border p-4 pb-6">
                    <p className="text-sm font-medium text-slate-600">
                        Top Country
                    </p>

                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="space-y-1.5 text-sm font-medium text-slate-600"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <img
                                        src="https://flagcdn.com/w320/in.png"
                                        alt="flag"
                                        className="h-3.5 w-auto shrink-0 object-contain"
                                    />
                                    <p>Country {i + 1}</p>
                                </div>

                                <p>12.39%</p>
                            </div>

                            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                                <div
                                    className="h-full bg-blue-500"
                                    style={{ width: `${-(i * 20) + 150}px` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6 rounded-lg border p-4 pb-6">
                    <p className="text-sm font-medium text-slate-600">
                        Top City
                    </p>

                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="space-y-1.5 text-sm font-medium text-slate-600"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <p>Country {i + 1}</p>
                                </div>

                                <p>12.39%</p>
                            </div>

                            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                                <div
                                    className="h-full bg-blue-500"
                                    style={{ width: `${-(i * 20) + 150}px` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6 rounded-lg border p-4 pb-6">
                    <p className="text-sm font-medium text-slate-600">
                        Top Language
                    </p>

                    {Array.from({ length: 5 }).map((_, i) => (
                        <div
                            key={i}
                            className="space-y-1.5 text-sm font-medium text-slate-600"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <p>Language {i + 1}</p>
                                </div>

                                <p>12.39%</p>
                            </div>

                            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                                <div
                                    className="h-full bg-blue-500"
                                    style={{ width: `${-(i * 20) + 150}px` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageFive;
