import ProfileItemCard from "../components/ProfileItemCard";
import SectionHeader from "../components/SectionHeader";
import Chart from "react-apexcharts";

const PageSix = () => {
    const genderSplitSeries = [75.21, Number((100 - 75.21).toFixed(2))];

    const genderSplitOptions = {
        series: genderSplitSeries,
        colors: ["#60a5fa", "#bfdbfe"],
        chart: {
            type: "donut",
            height: 200,
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

    // -------------------------------------------

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
        <div className="flex-1 p-4">
            <SectionHeader
                title="Audience Demography"
                description="This section provides a breakdown of the influencer's audience by age and gender."
            />

            <div className="mt-2 grid grid-cols-3 gap-4">
                <div className="col-span-1 space-y-2 rounded-lg border p-4">
                    <p className="text-sm font-medium text-slate-600">
                        Gender Split
                    </p>

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
                        height={200}
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

                <div className="col-span-2 flex flex-col space-y-2 rounded-lg border p-4">
                    <p className="text-sm font-medium text-slate-600">
                        Age Split
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
                        Day number indicates the count of posts made by the
                        influencer on that specific day.
                    </p>
                </div>
            </div>

            <SectionHeader
                title="Top Followers"
                description="This section lists the most influential followers (top 8)of the influencer."
                className="mt-4"
            />

            <div className="mt-2 grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <ProfileItemCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default PageSix;
