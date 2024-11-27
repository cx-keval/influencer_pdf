import { BrandedGeneralStatsAnalysis, PostCard } from "../components";
import SectionHeader from "../components/SectionHeader";

const BrandedInsightsOne = ({ platform }) => {
    return (
        <div className="flex-1 p-4">
            <SectionHeader
                title="Branded Media Performance Insights"
                description="This section provides insights into the performance of contents featuring branded content by the influencer."
                className="mb-2"
            />

            {platform !== "tiktok" ? (
                <BrandedGeneralStatsAnalysis
                    type={platform === "instagram" ? "reels" : "shorts"}
                    className="mb-4"
                />
            ) : null}

            <BrandedGeneralStatsAnalysis
                type={platform === "instagram" ? "feed" : "videos"}
                className="mb-4"
            />

            {platform === "tiktok" ? (
                <div>
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
