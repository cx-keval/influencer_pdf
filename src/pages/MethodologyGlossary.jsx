const MethodologyAndGlossary = [
    {
        title: "Avg. Likes",
        subTitle: "The number of likes is calculated based on last 24 content.",
    },
    {
        title: "Avg. Comments",
        subTitle: "The average number of comments based on last 24 content.",
    },
    {
        title: "Sponsored Post Performance",
        subTitle:
            "This percentage reflects how successful branded content performed relative to general content.",
    },
    {
        title: "Avg. Reel Plays",
        subTitle: "The average number of reel plays based on last 24 content.",
    },
    {
        title: "Engagement Rate",
        subTitle:
            "The engagement rate is calculated from total likes + total comments based on last 24 content.",
    },
    {
        title: "Audience Lookalikes",
        subTitle:
            "Lookalikes refer to influencers with similar audience demographics.",
    },
    {
        title: "Credibility",
        subTitle:
            "Represents the percentage of genuine followers out of the total follower count.",
    },
];

const MethodologyGlossary = () => (
    <div className="flex-1 p-5">
        <p className="font-medium text-slate-600">Methodology & Glossary</p>
        <p className="text-slate-400">
            This section explains the methodology used in the campaign analysis
            and defines key terms.
        </p>

        <div className="mt-4 grid grid-cols-3 gap-8 rounded-md bg-slate-100 p-5">
            {MethodologyAndGlossary.map(({ title, subTitle }) => (
                <div key={title} className="max-w-[180px]">
                    <p className="font-medium text-slate-600">{title}</p>
                    <p className="text-sm text-slate-600">{subTitle}</p>
                </div>
            ))}
        </div>
    </div>
);

export default MethodologyGlossary;
