import moment from "moment/moment";
import SectionHeader from "../components/SectionHeader";
import Chart from "react-apexcharts";
import { beautify } from "../utils";
import { IconCaretUpFilled } from "@tabler/icons-react";

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

const recentPosts = [
    {
        id: "3461857932495833341_1797720972",
        url: "https://www.instagram.com/p/DAK_XKpSEj9/",
        created: "2024-09-21T08:00:46.000+00:00",
        type: "photo",
        likes: 330244,
        comments: 2551,
        mentions: [
            "paramountpicsin",
            "paramountplusuk",
            "keeganmichaelkey",
            "chrishemsworth",
            "briantyreehenry",
            "transformersmovie",
        ],
    },
    {
        id: "3461219354625125564_1797720972",
        url: "https://www.instagram.com/p/DAIuKoqIyy8/",
        created: "2024-09-20T10:52:01.000+00:00",
        type: "photo",
        likes: 475863,
        comments: 3950,
        mentions: [
            "houseofcb",
            "renecaovilla",
            "viviennewestwood",
            "__rohit.uk",
        ],
    },
    {
        id: "3460459890338735351_1797720972",
        url: "https://www.instagram.com/p/DAGBe-bIKT3/",
        created: "2024-09-19T09:43:06.000+00:00",
        type: "photo",
        likes: 227381,
        comments: 2130,
        hashtags: ["comingsoon"],
    },
    {
        id: "3459003984606428757_1797720972",
        url: "https://www.instagram.com/p/DAA2cwjIH5V/",
        created: "2024-09-17T09:30:29.000+00:00",
        type: "photo",
        likes: 197456,
        comments: 1840,
        mentions: ["nike", "goyardofficial", "newbalance"],
        hashtags: ["styledbyme"],
    },
    {
        id: "3458109915972450282_1797720972",
        url: "https://www.instagram.com/p/C_9rKWPyzfq/",
        created: "2024-09-16T03:54:08.000+00:00",
        type: "photo",
        likes: 310932,
        comments: 1250,
        mentions: ["kmundhe4442"],
        hashtags: ["blessed", "comingsoon"],
    },
    {
        id: "3457699739278055705_1797720972",
        url: "https://www.instagram.com/p/C_8N5fboRkZ/",
        created: "2024-09-15T14:21:21.000+00:00",
        type: "video",
        likes: 131848,
        comments: 919,
        plays: 2369217,
    },
    {
        id: "3457006117556095896_1797720972",
        url: "https://www.instagram.com/p/C_5wL93SIuY/",
        created: "2024-09-14T15:21:04.000+00:00",
        type: "photo",
        likes: 379668,
        comments: 2432,
        mentions: ["leaclothingco"],
    },
    {
        id: "3456779740986771292_1797720972",
        url: "https://www.instagram.com/p/C_48twQSIdc/",
        created: "2024-09-14T07:51:18.000+00:00",
        type: "photo",
        likes: 239563,
        comments: 1353,
    },
    {
        id: "3456126380241256828_1797720972",
        url: "https://www.instagram.com/p/C_2oKGpIwF8/",
        created: "2024-09-13T10:13:12.000+00:00",
        type: "photo",
        likes: 410346,
        comments: 1352,
    },
    {
        id: "3455484198025938631_1089892098",
        url: "https://www.instagram.com/p/C_0WJH2T8bH/",
        created: "2024-09-12T12:57:18.000+00:00",
        type: "photo",
        likes: 289970,
        comments: 1482,
        mentions: [
            "avneetkaur_13",
            "sarahkhalkho",
            "akshaynavlakhefilms",
            "spicesocial",
        ],
        hashtags: ["BridesTodayIn", "BridesTodayIndia"],
    },
];

const PageEight = () => {
    const followersGrowthSeries = [
        {
            name: "Followers",
            data: statHistory.map(({ month, followers }) => ({
                x: new Date(month),
                y: followers,
            })),
        },
    ];

    const followersGrowthOptions = {
        series: followersGrowthSeries,
        chart: {
            type: "area",
            height: 250,
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

    // ---------------------------------------------
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

    // ------------------------------------------------
    const postEngagementSeries = [
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
        <div className="flex-1 p-4">
            <SectionHeader
                title="Growth Rate"
                description="This section analyzes influencer's followers and likes over a specified period."
            />

            <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="rounded-md border py-4">
                    <p className="pl-4 text-sm font-medium text-slate-600">
                        Followers Analysis
                    </p>

                    <Chart
                        type="area"
                        options={followersGrowthOptions}
                        series={followersGrowthSeries}
                        height={250}
                    />

                    <div className="px-4">
                        <div className="flex items-center justify-between rounded-md border px-2 py-1 text-sm">
                            <span className="text-slate-600">
                                Growth by Followers
                            </span>

                            <div className="flex justify-end gap-2 text-sm">
                                <span className="flex items-center text-sm font-semibold text-green-500">
                                    <IconCaretUpFilled className="h-4 w-4" />
                                    8.7%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-md border py-4">
                    <p className="pl-4 text-sm font-medium text-slate-600">
                        Likes Analysis
                    </p>

                    <Chart
                        type="bar"
                        options={likesGrowthOptions}
                        series={likesGrowthSeries}
                        height={250}
                    />

                    <div className="px-4">
                        <div className="flex items-center justify-between rounded-md border px-2 py-1 text-sm">
                            <span className="text-slate-600">
                                Growth by Likes
                            </span>

                            <div className="flex justify-end gap-2 text-sm">
                                <span className="flex items-center text-sm font-semibold text-green-500">
                                    <IconCaretUpFilled className="h-4 w-4" />
                                    4.7%
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionHeader
                title="Post Engagement"
                description="This section displays the number of engagements per post for the influencer's seven most recent publications."
                className="mt-4"
            />

            <div className="mt-2 rounded-md border pt-4">
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

export default PageEight;
