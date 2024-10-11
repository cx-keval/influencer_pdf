import { IconInfoCircle, IconHeart, IconBrandLine } from "@tabler/icons-react";
import SectionHeader from "../components/SectionHeader";
import Chart from "react-apexcharts";
import { CXSocialIcon } from "../components/CXSocialIcon";

const METRICS = [
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
        value: 2.05,
        precision: 1,
        showCurrency: false,
        postFix: "%",
    },
];

const PageFour = () => {
    const series = [
        {
            name: "Posts",
            data: [4, 3, 2, 3, 6, 4, 2],
        },
    ];

    const options = {
        chart: {
            height: 200,
            type: "line",
            toolbar: {
                show: false,
            },
        },
        grid: {
            padding: {
                left: -6,
                right: -12,
                top: -10,
                bottom: -10,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 3,
                dataLabels: {
                    position: "top",
                    style: {
                        colors: ["#1e293b"],
                        fontSize: "10px",
                        fontFamily: "inherit",
                    },
                },
                columnWidth: "26%",
            },
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => val + "",
            offsetY: -18,
            style: {
                fontSize: "10px",
                fontFamily: "inherit",
                colors: ["#1e293b"],
            },
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            categories: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            position: "bottom",
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            labels: {
                style: {
                    fontSize: "12px",
                    fontFamily: "Satoshi",
                },
            },
        },
        yaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            },
        },
        title: {
            enabled: false,
        },
        colors: ["#3b82f6"],
    };

    return (
        <div className="flex flex-1 flex-col p-4">
            <div className="flex gap-4">
                <div className="flex-1">
                    <SectionHeader
                        title="Feeds Overview"
                        description="This section shows aggregate metrics of the influence’s feed"
                    />
                    <div className="mt-2 grid grid-cols-2 gap-4">
                        {METRICS.map(({ label, value, postFix }) => (
                            <div
                                key={label}
                                className="space-y-2 rounded-md border px-3 py-3 text-sm"
                            >
                                <p className="text-slate-400">{label}</p>
                                <p className="text-2xl font-semibold text-slate-600">
                                    {value}
                                    {postFix}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-2 flex items-center gap-1 rounded-sm bg-slate-50 px-2 py-1 text-sm text-slate-600">
                        <IconInfoCircle className="h-4 w-4" />
                        Metrics are calculated based on your most recent 24
                        feed.
                    </div>
                </div>

                <div className="flex-[1.75]">
                    <SectionHeader
                        title="Feed Posting Frequency"
                        description="This section shows how often an influencer posts to their feed"
                    />
                    <div className="mt-2 rounded-md border p-3">
                        <div
                            className="flex items-center rounded-md bg-slate-100 py-2"
                            id="posting_frequency_chart_width_ref"
                        >
                            <div className="flex-1 space-y-1 border-r px-3 last:border-r-0">
                                <p className="text-xs text-slate-400">
                                    Avg. Feed/Day
                                </p>
                                <p className="text-base font-medium">0.8</p>
                            </div>
                            <div className="flex-1 space-y-1 border-r px-4 last:border-r-0">
                                <p className="text-xs text-slate-400">
                                    Avg. Feed/Week
                                </p>
                                <p className="text-base font-medium">4.8</p>
                            </div>
                            <div className="flex-1 space-y-1 border-r px-4 last:border-r-0">
                                <p className="text-xs text-slate-400">
                                    Avg. Feed/Month
                                </p>
                                <p className="text-base font-medium">18</p>
                            </div>
                        </div>

                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            height={200}
                            width="100%"
                        />

                        <div className="mt-2 flex items-center gap-1 rounded-sm bg-slate-50 px-2 py-1 text-sm font-medium text-slate-600">
                            Day number indicates the count of posts made by the
                            influencer on that specific day.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <SectionHeader
                    title="Recent Feed"
                    description="This section shows latest 4 media posted by the influencer."
                />

                <div className="mt-2 grid grid-cols-4 gap-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

const Card = () => {
    return (
        <div className="flex flex-col gap-2 rounded-lg border p-2">
            <div className="relative flex-1 overflow-hidden rounded-md">
                <img
                    src="https://i.ytimg.com/vi/9lx11dy9J30/hqdefault.jpg"
                    className="z-[1] h-full w-full object-contain"
                    alt="thumbnail"
                />
                <div
                    aria-label="dark-overlay"
                    className="absolute inset-0 bg-gradient-to-t from-black from-0% via-transparent via-30% to-transparent to-100%"
                />

                <div className="absolute bottom-2 left-2 right-2 z-[10] flex items-center justify-between rounded-md text-xs text-white">
                    <div className="flex items-center gap-1">
                        <span className="item-center flex gap-1 font-medium text-white">
                            <CXSocialIcon
                                platform="instagram"
                                className="h-4 w-4"
                            />
                            Instagram
                        </span>
                    </div>
                    <span className="rounded-full bg-slate-950/50 px-2 font-medium text-white">
                        Feed
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-evenly rounded-md bg-slate-100 py-1 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-0.5">
                    <IconHeart className="h-4 w-4" />
                    76.1K
                </span>
                <span className="flex items-center gap-0.5">
                    <IconBrandLine className="h-4 w-4" />
                    1679
                </span>
                <span className="flex items-center gap-0.5">
                    <span>E.R.</span>
                    6.86%
                </span>
            </div>
        </div>
    );
};

export default PageFour;
