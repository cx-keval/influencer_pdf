import {
    PostingFrequency,
    RecentContentSection,
    ContentStatsOverview,
} from "../components";

const ContentAnalysis = ({
    platform,
    type, // "reels" | "shorts" | "feed" | "videos"
}) => {
    return (
        <div className="flex-1 space-y-6 p-4">
            <div className="flex gap-4">
                <ContentStatsOverview type={type} />

                <PostingFrequency platform={platform} type={type} />
            </div>

            <RecentContentSection type={type} />
        </div>
    );
};

export default ContentAnalysis;
