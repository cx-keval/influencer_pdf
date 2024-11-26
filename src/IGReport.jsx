import { IntroPage, PageWrapper } from "./components";
import { ContentAnalysis, ProfileOverviewWithSocialScore } from "./pages";

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
        </div>
    );
};

export default IGReport;
