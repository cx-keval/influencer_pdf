import { OverviewStats, ProfileCard, SocialScore } from "../components";

const ProfileOverviewWithSocialScore = ({ platform = "instagram" }) => {
    return (
        <div className="flex-1 space-y-6 p-4">
            <div className="grid grid-cols-2 items-stretch gap-6">
                <ProfileCard platform={platform} />

                <OverviewStats platform={platform} />
            </div>

            {platform !== "tiktok" ? <SocialScore platform={platform} /> : null}
        </div>
    );
};

export default ProfileOverviewWithSocialScore;
