import moment from "moment";
import {
    GrowthRateBarChart,
    GrowthRateLineChart,
    SectionHeader,
} from "../components";
import { beautify } from "../utils";

const statHistory = [
    {
        month: "2024-05",
        followers: 257500000,
        avgLikes: 4420345,
        following: 0,
        avgComments: 23606,
        avgViews: 98349883,
        totalViews: 48720714424,
    },
    {
        month: "2024-06",
        followers: 277333333,
        avgLikes: 5105793,
        following: 0,
        avgComments: 34025,
        avgViews: 107776827,
        totalViews: 51950097069,
    },
    {
        month: "2024-07",
        followers: 303400000,
        avgLikes: 6001680,
        following: 0,
        avgComments: 50434,
        avgViews: 138578229,
        totalViews: 54799429103,
    },
    {
        month: "2024-08",
        followers: 310000000,
        avgLikes: 7011302,
        following: 0,
        avgComments: 92825,
        avgViews: 175680060,
        totalViews: 56932977390,
    },
    {
        month: "2024-09",
        followers: 315250000,
        avgLikes: 6205094,
        following: 0,
        avgComments: 47472,
        avgViews: 140930142,
        totalViews: 58692493363,
    },
    {
        month: "2024-10",
        followers: 320800000,
        avgLikes: 4348877,
        following: 0,
        avgComments: 14909,
        avgViews: 108684663,
        totalViews: 61016443819,
    },
    {
        month: "2024-11",
        followers: 331000000,
        avgLikes: 4387542,
        following: 0,
        avgComments: 7534,
        avgViews: 110978204,
        totalViews: 64567048687,
    },
];

const followersOrSubscribersGrowthSeries = [
    {
        name: "Followers",
        data: statHistory.map(({ month, followers }) => ({
            x: new Date(month),
            y: followers,
        })),
    },
];

const followersOrSubscribersGrowthOptions = {
    series: followersOrSubscribersGrowthSeries,
    chart: {
        type: "area",
        height: 230,
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
        width: 1,
    },
    xaxis: {
        labels: {
            style: {
                fontSize: "10px",
                fontFamily: "inherit",
            },
            formatter: (month) => moment(month).format("MMM 'YY"),
        },
    },
    yaxis: {
        labels: {
            formatter: (value) => beautify(value, 1),
            style: {
                fontSize: "10px",
                fontFamily: "inherit",
            },
        },
        title: {
            style: {
                fontWeight: 700,
                fontFamily: "inherit",
            },
        },
    },
    tooltip: {
        x: {
            format: "dd MMM yyyy",
        },
        style: {
            fontFamily: "inherit",
        },
    },
    colors: ["#3b82f6"],
    legend: {
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "10px",
        fontFamily: "Poppins",
        fontWeight: 400,
        markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: "#fff",
            fillColors: undefined,
            radius: 12,
            offsetX: 0,
            offsetY: 0,
            onClick: undefined,
            onDblClick: undefined,
            showNullDataPoints: true,
            hover: {
                size: undefined,
                sizeOffset: 3,
            },
        },
        itemMargin: {
            horizontal: 10,
            vertical: 0,
        },
    },
    grid: {
        borderColor: "#f1f1f1",
    },
};

// -----

const getWidth = (length) => {
    if (length < 11) {
        return `${length * 3}%`;
    } else {
        return "60%";
    }
};

const likesGrowthSeries = [
    {
        name: "Likes",
        data: statHistory.map(({ avgLikes }) => avgLikes),
    },
];

const likesGrowthOptions = {
    series: likesGrowthSeries,
    chart: {
        type: "bar",
        height: 230,
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: true,
        },
    },
    colors: ["#3b82f6", "#60a5fa", "#93c5fd"],
    xaxis: {
        categories: statHistory.map(({ month }) =>
            moment(month).format("MMM 'YY")
        ),
        labels: {
            style: {
                fontSize: "10px",
                fontFamily: "inherit",
            },
        },
    },
    yaxis: {
        labels: {
            formatter: (val) => beautify(val),
            style: {
                fontSize: "10px",
                fontFamily: "inherit",
            },
        },
    },
    dataLabels: {
        enabled: true,
        formatter: (val) => beautify(val),
        offsetY: -20,
        style: {
            enabled: true,
            fontSize: "10px",
            fontFamily: "inherit",
            colors: ["#304758"],
            fontWeight: 500,
        },
        background: {
            enabled: true,
            foreColor: "#000",
            padding: 6,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#000",
            opacity: 0.15,
        },
    },
    plotOptions: {
        bar: {
            dataLabels: {
                position: "top",
            },
            borderRadius: 3,
            columnWidth: getWidth(Math.max(statHistory.length || 0)),
        },
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        markers: {
            radius: 9999,
        },
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#f1f1f1",
    },
};

// -------

const viewsGrowthSeries = [
    {
        name: "Views",
        data: statHistory.map(({ avgViews }) => avgViews),
    },
];

const viewsGrowthOptions = {
    series: viewsGrowthSeries,
    chart: {
        type: "bar",
        height: 230,
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: true,
        },
    },
    colors: ["#3b82f6", "#60a5fa", "#93c5fd"],
    xaxis: {
        categories: statHistory.map(({ month }) =>
            moment(month).format("MMM 'YY")
        ),
        labels: {
            style: {
                fontSize: "10px",
                fontFamily: "inherit",
            },
        },
    },
    yaxis: {
        labels: {
            formatter: (val) => beautify(val),
            style: {
                fontSize: "10px",
                fontFamily: "inherit",
            },
        },
    },
    dataLabels: {
        enabled: true,
        formatter: (val) => beautify(val),
        offsetY: -20,
        style: {
            enabled: true,
            fontSize: "10px",
            fontFamily: "inherit",
            colors: ["#304758"],
            fontWeight: 500,
        },
        background: {
            enabled: true,
            foreColor: "#000",
            padding: 6,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#000",
            opacity: 0.15,
        },
    },
    plotOptions: {
        bar: {
            dataLabels: {
                position: "top",
            },
            borderRadius: 3,
            columnWidth: getWidth(Math.max(statHistory.length || 0)),
        },
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        markers: {
            radius: 9999,
        },
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#f1f1f1",
    },
};

const subTitles = {
    instagram:
        "This section analyzes influencer's followers and likes over a specified period.",
    youtube:
        "This section analyzes influencer's subscribers, views and likes over a specified period.",
    tiktok: "This section analyzes influencer's followers, views and likes over a specified period.",
};

const GrowthRateOnly = ({ platform }) => {
    return (
        <div className="flex-1 p-4">
            <SectionHeader
                title="Growth Rate"
                description={subTitles[platform]}
            />

            <div className="mt-2 grid grid-cols-2 gap-4">
                <GrowthRateLineChart
                    series={followersOrSubscribersGrowthSeries}
                    options={followersOrSubscribersGrowthOptions}
                    type="Followers"
                />

                <GrowthRateBarChart
                    series={likesGrowthSeries}
                    options={likesGrowthOptions}
                    type="Likes"
                />
            </div>

            <div className="my-4">
                <GrowthRateBarChart
                    series={viewsGrowthSeries}
                    options={viewsGrowthOptions}
                    type="Views"
                />
            </div>
        </div>
    );
};

export default GrowthRateOnly;
