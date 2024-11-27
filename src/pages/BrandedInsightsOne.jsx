import { BrandedGeneralStatsAnalysis, PostCard } from "../components";
import SectionHeader from "../components/SectionHeader";

const BrandedInsightsOne = ({ platform }) => {
    return (
        <div className="flex-1 p-4">
            <SectionHeader
                title="Branded Media Performance Insights"
                description="This section provides insights into the performance of contents featuring branded content by the influencer."
            />

            {platform !== "tiktok" ? (
                <BrandedGeneralStatsAnalysis
                    className="mt-2"
                    type={platform === "instagram" ? "reels" : "shorts"}
                />
            ) : null}

            <BrandedGeneralStatsAnalysis
                className="mt-3"
                type={platform === "instagram" ? "feed" : "videos"}
            />

            {platform === "tiktok" ? (
                <div className="mt-6">
                    <SectionHeader
                        title="Branded Content"
                        description="This section showcases media content created by the influencer in collaboration with brands."
                    />

                    <div className="mt-2 grid grid-cols-4 gap-4">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default BrandedInsightsOne;
