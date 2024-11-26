import Chart from "react-apexcharts";

const AgeSplit = () => {
    const gendersPerAge = [
        {
            code: "13-17",
            male: 0.099419,
            female: 0.02801,
        },
        {
            code: "18-24",
            male: 0.392917,
            female: 0.099436,
        },
        {
            code: "25-34",
            male: 0.231122,
            female: 0.064183,
        },
        {
            code: "35-44",
            male: 0.053665,
            female: 0.008803,
        },
        {
            code: "45-64",
            male: 0.020311,
            female: 0.001921,
        },
    ];

    const ageGenderBarSeries = [
        {
            name: "Male",
            data: gendersPerAge?.map((item) => (item.male * 100).toFixed(1)),
        },
        {
            name: "Female",
            data: gendersPerAge?.map((item) => (item.female * 100).toFixed(1)),
        },
    ];

    const ageGenderBarOptions = {
        series: ageGenderBarSeries,
        chart: {
            type: "bar",
            height: 200,
            width: "100%",
            toolbar: {
                show: false,
            },
        },
        colors: ["#60a5fa", "#bfdbfe"],
        yaxis: {
            labels: {
                formatter: (val) => val + "%",
            },
        },
        xaxis: {
            categories: gendersPerAge?.map((e) => e.code),
            labels: {
                style: {
                    fontSize: 12,
                    fontFamily: "inherit",
                },
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 2,
                columnWidth: "55%",
                endingShape: "rounded",
                dataLabels: {
                    position: "top",
                },
            },
        },
        stroke: {
            colors: ["transparent"],
            width: 4,
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => val + "%",
            offsetY: -20,
            offsetX: 2,
            style: {
                fontSize: "10px",
                fontFamily: "inherit",
                fontWeight: 500,
                colors: ["#475569"],
            },
            background: {
                enabled: true,
                foreColor: "#000",
                padding: 5,
                borderRadius: 4,
                borderWidth: 0,
                borderColor: "#000",
                opacity: 0.15,
            },
        },
        tooltip: {
            enabled: true,
            style: {
                fontSize: 12,
                fontFamily: "inherit",
            },
        },
        legend: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
    };

    return (
        <div className="col-span-2 flex flex-col space-y-2 rounded-lg border p-4">
            <p className="flex items-center justify-between text-sm font-medium text-slate-600">
                Age Split
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
            </p>

            <div className="flex-1">
                <Chart
                    type="bar"
                    series={ageGenderBarSeries}
                    options={ageGenderBarOptions}
                    height={"100%"}
                    width="100%"
                />
            </div>

            <p className="rounded bg-slate-50 px-2 py-0.5 text-sm font-medium text-slate-600">
                Day number indicates the count of posts made by the influencer
                on that specific day.
            </p>
        </div>
    );
};

export default AgeSplit;
