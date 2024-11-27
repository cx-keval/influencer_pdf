import { IntroPage, PageWrapper } from "./components";
import {
    ContentAnalysis,
    ProfileOverviewWithSocialScore,
    AudienceOverviewCredibilityGeography,
    AudienceDemographyAndTopFollowers,
    TopFollowersWithSimilarProfiles,
    GrowthRateWithPostEngagements,
    TopHashtagsAndMentions,
} from "./pages";

const IGReport = () => {
    return (
        <div aria-label="main" className="w-full">
            <IntroPage platform="instagram" />

            <PageWrapper platform="instagram">
                <ProfileOverviewWithSocialScore platform="instagram" />
            </PageWrapper>

            <PageWrapper platform="instagram">
                <ContentAnalysis platform="instagram" type="reels" />
            </PageWrapper>

            <PageWrapper platform="instagram">
                <ContentAnalysis platform="instagram" type="feed" />
            </PageWrapper>

            <PageWrapper platform="instagram">
                <AudienceOverviewCredibilityGeography platform="instagram" />
            </PageWrapper>

            <PageWrapper platform="instagram">
                <AudienceDemographyAndTopFollowers platform="instagram" />
            </PageWrapper>

            <PageWrapper platform="instagram">
                <TopFollowersWithSimilarProfiles />
            </PageWrapper>

            <PageWrapper platform="instagram">
                <GrowthRateWithPostEngagements platform="instagram" />
            </PageWrapper>

            <PageWrapper platform="instagram">
                <TopHashtagsAndMentions platform="instagram" />
            </PageWrapper>
        </div>
    );
};

export default IGReport;
