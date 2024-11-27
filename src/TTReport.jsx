import { IntroPage, PageWrapper } from "./components";
import {
    ContentAnalysis,
    ProfileOverviewWithSocialScore,
    AudienceOverviewCredibilityGeography,
    AudienceDemographyAndTopFollowers,
    TopFollowersWithSimilarProfiles,
    GrowthRateOnly,
    PostEngagementPage,
    BrandedInsightsOne,
    BrandedInsightsTwo,
    MethodologyGlossary,
    Disclaimer,
} from "./pages";

const TTReport = () => {
    return (
        <div aria-label="main" className="w-full">
            <IntroPage platform="TikTok" />

            <PageWrapper platform="tiktok">
                <ProfileOverviewWithSocialScore platform="tiktok" />
            </PageWrapper>

            <PageWrapper platform="tiktok">
                <ContentAnalysis platform="tiktok" type="videos" />
            </PageWrapper>

            <PageWrapper platform="tiktok">
                <AudienceOverviewCredibilityGeography platform="tiktok" />
            </PageWrapper>

            <PageWrapper platform="tiktok">
                <AudienceDemographyAndTopFollowers />
            </PageWrapper>

            <PageWrapper platform="tiktok">
                <TopFollowersWithSimilarProfiles />
            </PageWrapper>

            <PageWrapper platform="tiktok">
                <GrowthRateOnly platform="tiktok" />
            </PageWrapper>

            <PageWrapper platform="tiktok">
                <PostEngagementPage platform="tiktok" />
            </PageWrapper>

            <PageWrapper platform="tiktok">
                <BrandedInsightsOne platform="tiktok" />
            </PageWrapper>

            <PageWrapper platform="tiktok">
                <MethodologyGlossary platform="tiktok" />
            </PageWrapper>

            <PageWrapper platform="tiktok">
                <Disclaimer platform="tiktok" />
            </PageWrapper>
        </div>
    );
};

export default TTReport;
