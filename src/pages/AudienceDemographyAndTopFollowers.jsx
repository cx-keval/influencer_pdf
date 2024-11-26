import {
    AgeSplit,
    GenderSplit,
    SectionHeader,
    ProfileItemCard,
} from "../components";

const AudienceDemographyAndTopFollowers = () => {
    return (
        <div className="flex-1 p-4">
            <SectionHeader
                title="Audience Demography"
                description="This section provides a breakdown of the influencer's audience by age and gender."
            />

            <div className="mt-2 grid grid-cols-3 gap-4">
                <GenderSplit />

                <AgeSplit />
            </div>

            <SectionHeader
                title="Top Followers"
                description="This section lists the most influential followers (top 8)of the influencer."
                className="mt-4"
            />

            <div className="mt-2 grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <ProfileItemCard key={i} />
                ))}
            </div>
        </div>
    );
};

export default AudienceDemographyAndTopFollowers;
