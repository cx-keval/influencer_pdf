import { ProfileItemCard, SectionHeader } from "../components";

const TopFollowersWithSimilarProfiles = () => {
    return (
        <div className="flex-1 p-4">
            <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <ProfileItemCard key={i} />
                ))}
            </div>

            <SectionHeader
                title="Similar Profiles"
                description="This section identifies profiles similar to the influencer based on audience characteristics and engagement patterns."
                className="mt-6"
            />

            <div className="mt-2 grid grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <ProfileItemCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default TopFollowersWithSimilarProfiles;
