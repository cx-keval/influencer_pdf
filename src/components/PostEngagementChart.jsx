import moment from "moment";
import Chart from "react-apexcharts";
import { beautify } from "../utils";
import SectionHeader from "./SectionHeader";

const recentPosts = [
    {
        id: "dc089EZRGcg",
        views: 7268281,
        likes: 451196,
        comments: 2057,
        created: "2024-11-18T19:00:00.000+00:00",
    },
    {
        id: "I9mw5UlDyPI",
        views: 188741,
        likes: 191371,
        comments: 1224,
        created: "2024-11-12T17:00:00.000+00:00",
    },
    {
        id: "pS-fFdvyHLE",
        views: 142214182,
        likes: 4387542,
        comments: 6797,
        created: "2024-11-08T17:00:00.000+00:00",
    },
    {
        id: "Xj0Jtjg3lHQ",
        views: 99519765,
        likes: 3646546,
        comments: 45607,
        created: "2024-11-02T16:00:00.000+00:00",
    },
    {
        id: "HHV4WT8AA1w",
        views: 35473423,
        likes: 1726113,
        comments: 5285,
        created: "2024-10-30T16:00:00.000+00:00",
    },
    {
        id: "9UtcHPCEBgg",
        views: 113162791,
        likes: 7625147,
        comments: 9993,
        created: "2024-10-19T18:00:00.000+00:00",
    },
    {
        id: "ZNt_GoOBHq8",
        views: 210735222,
        likes: 8104810,
        comments: 9869,
        created: "2024-10-17T19:00:00.000+00:00",
    },
    {
        id: "bn0Kh9c4Zv4",
        views: 80083970,
        likes: 2676832,
        comments: 26888,
        created: "2024-10-12T16:00:00.000+00:00",
    },
    {
        id: "dDVFnfCwjHA",
        views: 166317254,
        likes: 5879547,
        comments: 3814,
        created: "2024-10-11T16:00:01.000+00:00",
    },
    {
        id: "Kt2HvqRruHQ",
        views: 132543763,
        likes: 5941064,
        comments: 4094,
        created: "2024-10-05T16:00:00.000+00:00",
    },
];

const PostEngagementChart = ({ platform, className = "" }) => {
    const postEngagementSeries = [
        ...(platform !== "instagram"
            ? [
                  {
                      name: "Views",
                      group: "views",
                      data: recentPosts
                          ?.filter((item) =>
                              Object.prototype.hasOwnProperty.call(
                                  item,
                                  "views"
                              )
                          )
                          ?.map((item) => item.views),
                  },
              ]
            : []),
        {
            name: "Likes",
            group: "likes",
            data: recentPosts
                ?.filter((item) =>
                    Object.prototype.hasOwnProperty.call(item, "likes")
                )
                ?.map((item) => item.likes),
        },
        {
            name: "Comments",
            group: "comments",
            data: recentPosts
                ?.filter((item) =>
                    Object.prototype.hasOwnProperty.call(item, "comments")
                )
                ?.map((item) => item.comments),
        },
    ];

    const postEngagementOptions = {
        chart: {
            type: "bar",
            height: 250,
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
            categories: recentPosts?.map((e) =>
                moment(e.created).format("DD-MMM-YY")
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
                borderRadius: 5,
                columnWidth: "55%",
                endingShape: "rounded",
                dataLabels: {
                    position: "top",
                },
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

    return (
        <div className={`space-y-2 ${className}`}>
            <SectionHeader
                title="Post Engagement"
                description="This section displays the number of engagements per post for the influencer's most recent publications. (upto 10)"
            />

            <div className="rounded-md border pt-4">
                <Chart
                    type="bar"
                    options={postEngagementOptions}
                    series={postEngagementSeries}
                    height={250}
                />
            </div>
        </div>
    );
};

export default PostEngagementChart;
