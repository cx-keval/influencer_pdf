import {
    BrandedGeneralStatsAnalysis,
    BrandItem,
    PostCard,
} from "../components";
import SectionHeader from "../components/SectionHeader";

const BrandedInsightsTwo = ({ platform }) => {
    return (
        <div className="flex-1 p-4">
            {platform === "instagram" ? (
                <>
                    <SectionHeader
                        title="Brand Mentions"
                        description="This section tracks and analyzes mentions of specific brands by the influencer across their content."
                        className="mb-2"
                    />
                    <div className="mb-6 grid grid-cols-4 gap-4">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <BrandItem key={i} />
                        ))}
                    </div>
                </>
            ) : null}

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
    );
};

export default BrandedInsightsTwo;
