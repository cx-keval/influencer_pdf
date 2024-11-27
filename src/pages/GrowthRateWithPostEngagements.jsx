import moment from "moment";
import {
    GrowthRateBarChart,
    GrowthRateLineChart,
    PostEngagementChart,
    SectionHeader,
} from "../components";
import { beautify } from "../utils";

const statHistory = [
    {
        month: "2024-04",
        followers: 32362917,
        avgLikes: 302964,
        following: 215,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-05",
        followers: 32317975,
        avgLikes: 310131,
        following: 232,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-06",
        followers: 32225203,
        avgLikes: 248552,
        following: 248,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-07",
        followers: 32143350,
        avgLikes: 233909,
        following: 256,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-08",
        followers: 32095545,
        avgLikes: 257635,
        following: 255,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-09",
        followers: 32011595,
        avgLikes: 265460,
        following: 262,
        avgComments: 0,
        avgViews: 0,
    },
    {
        month: "2024-10",
        followers: 31986470,
        avgLikes: 268628,
        following: 263,
        avgComments: 0,
        avgViews: 0,
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

const likesGrowthSeries = [
    {
        name: "Likes",
        data: statHistory.map(({ avgLikes }) => avgLikes),
    },
];

const getWidth = (length) => {
    if (length < 11) {
        return `${length * 3}%`;
    } else {
        return "60%";
    }
};

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

// -----------------------------------------------------------------
const subTitles = {
    instagram:
        "This section analyzes influencer's followers and likes over a specified period.",
    youtube:
        "This section analyzes influencer's subscribers, views and likes over a specified period.",
    tiktok: "This section analyzes influencer's followers, views and likes over a specified period.",
};

const GrowthRateWithPostEngagements = ({ platform }) => {
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

            <PostEngagementChart className="mt-4" platform={platform} />
        </div>
    );
};

export default GrowthRateWithPostEngagements;
