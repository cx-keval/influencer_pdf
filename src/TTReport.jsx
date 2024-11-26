import { IntroPage, PageWrapper } from "./components";
import {
    ContentAnalysis,
    ProfileOverviewWithSocialScore,
    AudienceOverviewCredibilityGeography,
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
        </div>
    );
};

export default TTReport;
