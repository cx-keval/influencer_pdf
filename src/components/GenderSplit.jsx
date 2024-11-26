import Chart from "react-apexcharts";

const GenderSplit = () => {
    const genderSplitSeries = [75.21, Number((100 - 75.21).toFixed(2))];

    const genderSplitOptions = {
        series: genderSplitSeries,
        colors: ["#60a5fa", "#bfdbfe"],
        chart: {
            type: "donut",
            height: 180,
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: "76%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "12px",
                            fontFamily: "inherit",
                            fontWeight: 600,
                            color: "#475569",
                            offsetY: -10,
                        },
                        value: {
                            show: true,
                            fontSize: "16px",
                            fontFamily: "inherit",
                            fontWeight: 800,
                            color: "#475569",
                            offsetY: 0,
                            formatter: (val) => val + "%",
                        },
                    },
                },
            },
        },
        labels: ["Male", "Female"],
        legend: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    };

    return (
        <div className="col-span-1 space-y-2 rounded-lg border p-4">
            <p className="text-sm font-medium text-slate-600">Gender Split</p>

            <div className="grid grid-cols-2 rounded-md bg-slate-50 py-4">
                <div className="border-r px-4">
                    <p className="text-xs font-medium text-slate-400">
                        Male Audience
                    </p>
                    <p className="text-sm font-semibold text-slate-600">
                        {75.21}%
                    </p>
                </div>
                <div className="px-4">
                    <p className="text-xs font-medium text-slate-400">
                        Female Audience
                    </p>
                    <p className="text-sm font-semibold text-slate-600">
                        {Number((100 - 75.21).toFixed(2))}%
                    </p>
                </div>
            </div>

            <Chart
                type="donut"
                options={genderSplitOptions}
                series={genderSplitSeries}
                height={190}
            />

            <p className="text-center text-sm">
                Total Followers <strong>10M</strong>
            </p>

            <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-1 rounded-full border px-2 py-0.5 text-sm font-medium text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    Male
                </div>
                <div className="flex items-center justify-center gap-1 rounded-full border px-2 py-0.5 text-sm font-medium text-slate-600">
                    <span className="h-2 w-2 rounded-full bg-blue-200" />
                    Female
                </div>
            </div>
        </div>
    );
};

export default GenderSplit;
