import {
    AudienceOverview,
    AudienceGeography,
    AudienceCredibility,
} from "../components";

const AudienceOverviewCredibilityGeography = ({ platform }) => {
    return (
        <div className="flex-1 space-y-6 p-4">
            <div
                className={`${platform === "instagram" ? "grid grid-cols-2 gap-4" : ""}`}
            >
                <AudienceOverview platform={platform} />

                {platform === "instagram" ? (
                    <AudienceCredibility platform={platform} />
                ) : null}
            </div>

            <AudienceGeography platform={platform} />
        </div>
    );
};

export default AudienceOverviewCredibilityGeography;
