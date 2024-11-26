import { capitalizeWord } from "../utils";
import SectionHeader from "./SectionHeader";
import Chart from "react-apexcharts";

const PostingFrequency = ({ type, platform }) => {
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
        <div className="flex-[1.75]">
            <SectionHeader
                title={`${capitalizeWord(type)} Posting Frequency`}
                description={`This section shows how often an influencer posts ${capitalizeWord(platform)} ${capitalizeWord(type)}.`}
            />
            <div className="mt-2 rounded-md border p-3">
                <div
                    className="flex items-center rounded-md bg-slate-100 py-2"
                    id="posting_frequency_chart_width_ref"
                >
                    <div className="flex-1 space-y-1 border-r px-3 last:border-r-0">
                        <p className="text-xs text-slate-400">
                            Avg. {capitalizeWord(type)}/Day
                        </p>
                        <p className="text-base font-medium">0.8</p>
                    </div>
                    <div className="flex-1 space-y-1 border-r px-4 last:border-r-0">
                        <p className="text-xs text-slate-400">
                            Avg. {capitalizeWord(type)}/Week
                        </p>
                        <p className="text-base font-medium">4.8</p>
                    </div>
                    <div className="flex-1 space-y-1 border-r px-4 last:border-r-0">
                        <p className="text-xs text-slate-400">
                            Avg. {capitalizeWord(type)}/Month
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
    );
};

export default PostingFrequency;
