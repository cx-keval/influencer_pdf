import { IntroPage, PageWrapper } from "./components";
import {
    ContentAnalysis,
    ProfileOverviewWithSocialScore,
    AudienceOverviewCredibilityGeography,
    AudienceDemographyAndTopFollowers,
    TopFollowersWithSimilarProfiles,
    GrowthRateOnly,
    PostEngagementPage,
} from "./pages";

const YTReport = () => {
    return (
        <div aria-label="main" className="w-full">
            <IntroPage platform="YouTube" />

            <PageWrapper platform="youtube">
                <ProfileOverviewWithSocialScore platform="youtube" />
            </PageWrapper>

            <PageWrapper platform="youtube">
                <ContentAnalysis platform="youtube" type="shorts" />
            </PageWrapper>

            <PageWrapper platform="youtube">
                <ContentAnalysis platform="youtube" type="videos" />
            </PageWrapper>

            <PageWrapper platform="youtube">
                <AudienceOverviewCredibilityGeography platform="youtube" />
            </PageWrapper>

            <PageWrapper platform="youtube">
                <AudienceDemographyAndTopFollowers />
            </PageWrapper>

            <PageWrapper platform="youtube">
                <TopFollowersWithSimilarProfiles />
            </PageWrapper>

            <PageWrapper platform="youtube">
                <GrowthRateOnly platform="youtube" />
            </PageWrapper>

            <PageWrapper platform="youtube">
                <PostEngagementPage platform="youtube" />
            </PageWrapper>
        </div>
    );
};

export default YTReport;
